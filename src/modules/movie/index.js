const { Movie } = require("./model")
const { movieSchema } = require("./schema")
const { movieQuery, movieMutation } = require("./resolver")
module.exports = {
    Movie,
    movieSchema,
    movieQuery,
    movieMutation
}