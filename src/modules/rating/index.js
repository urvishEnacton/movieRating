const { Rating } = require("./model")
const { ratingSchema } = require("./schema")
const { ratingQuery, ratingMutation } = require("./resolver")
module.exports = {
    Rating,
    ratingSchema,
    ratingQuery,
    ratingMutation
}