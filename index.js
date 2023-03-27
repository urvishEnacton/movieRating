// npm install @apollo/server express graphql cors body-parser
const { config } = require('dotenv') // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-const
config()
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const { ApolloServerPluginUsageReporting } = require('@apollo/server/plugin/usageReporting');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { UserInputError, AuthenticationError } = require('@apollo/server/errors');
const express = require('express');
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');
const { typeDefs, resolvers, models } = require('./src/modules');
const { db } = require("./src/db");
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");




const app = express();
const httpServer = http.createServer(app);



const getMe = async (token) => {
  if (token) {
    try {
      const me = await jwt.verify(token, process.env.SECRET);
      return models.User.findById(me?.id).populate("roleId");
    } catch (error) {
      throw new GraphQLError("Session Invalid or expired.", { extensions: { code: 'UNAUTHENTICATED' } });
    }
  }
}

const startServer = async () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers, })
  const server = new ApolloServer({
    schema,
    formatError: (error) => {
      const message = error.message.slice(error?.message?.lastIndexOf(":") + 1, error?.message?.length).trim();
      delete error?.extensions?.stacktrace
			return { ...error,message  };
      // return {  ...error };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        if (req) {
          const me = await getMe(req?.headers["x-token"]);
          return { models, me, secret: process.env.SECRET };
        }
      }
    })
  );
  db().then(async (res) => {
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
  }).catch((err) => {
    console.log("Mongodb connection error...!", err)
  })
}

process.on("uncaughtException", (err) => {
  console.error(err && err.stack);
});

startServer()