// npm install @apollo/server express graphql cors body-parser
var { ApolloServer } = require("@apollo/server");
var { expressMiddleware } = require("@apollo/server/express4");
var {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
var express = require("express");
var http = require("http");
var cors = require("cors");
var { json } = require("body-parser");
// var { typeDefs, resolvers } = require("./schema");
const typeDefs = `
type Book {
  title: String
  author: String
}
type Query {
  books: [Book]
}
`;
const resolvers = {
  Query: {
    books: () => books,
  },
};

async function server() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
server();
