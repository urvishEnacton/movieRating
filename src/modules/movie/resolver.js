const { combineResolvers } = require("graphql-resolvers")
const { isAuthentication, isAdmin } = require("../../authentication");

const movieQuery = {
    getAllMovie: (parent, { id }, { models, me }) => {
        return new Promise(async (resolve, reject) => {
            models.Movie.find({ ...(id && { _id: id }) }, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }
}

const movieMutation = {
    addMovie: combineResolvers(async (parent, { input }, { models, me }) => {
        console.log("🚀 ~ file: resolver.js:17 ~ addMovie:combineResolvers ~ input:", input)
        return new Promise((resolve, reject) => {
            models.Movie.create(input).then((res) => resolve(res))
                .catch((err) => reject(err))
        });
    }),

    updateMovie: combineResolvers(isAuthentication, async (parent, { input }, { models, me }) => {
        return new Promise((resolve, reject) => {
            models.Movie.findByIdAndUpdate(input?.id, { new: true }).then((res) => resolve(res))
                .catch((err) => reject(err))
        });
    }),

    deleteMovie: combineResolvers(isAuthentication, async (parent, { id }, { models, me }) => {
        return new Promise((resolve, reject) => {
            models.Movie.findByIdAndRemove(id, { isDeleted: true }, { new: true }, (err, res) => {
                if (err) return reject(err);
                else resolve(true);
            });
        });
    }),

}


module.exports = { movieMutation, movieQuery }
