const { User } = require("./model")
const { userSchema } = require("./schema")
const { userQuery, userMutation } = require("./resolver")
module.exports = {
    User,
    userSchema,
    userQuery,
    userMutation
}