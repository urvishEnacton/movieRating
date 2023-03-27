const gql = require("graphql-tag")
const { User, userSchema, userQuery, userMutation } = require("./user")
const { Movie, movieSchema, movieQuery, movieMutation } = require("./movie")
const { Rating,ratingSchema,ratingQuery,ratingMutation } = require("./rating")

const models = {
    User,
    Movie,
    Rating
}

const typeDefs = gql`
   	scalar Date
	scalar JSON
	scalar Number

     type Query
     type Mutation

     ${userSchema}
     ${movieSchema}
     ${ratingSchema}
`


const resolvers = {
    Query: {
        ...userQuery,
        ...movieQuery,
        ...ratingQuery,
    },
    Mutation: {
        ...userMutation,
        ...movieMutation,
        ...ratingMutation
    }
}

module.exports = {
    models,
    resolvers,
    typeDefs
}