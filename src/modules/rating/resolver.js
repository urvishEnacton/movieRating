const { combineResolvers } = require("graphql-resolvers")
const { isAuthentication, isAdmin } = require("../../authentication");

const ratingQuery = {
    getAllRating: (parent, { id }, { models, me }) => {
        return new Promise(async (resolve, reject) => {
            models.Rating.find({ ...(id && { _id: id }) }, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }
}

const ratingMutation = {
    addRating: combineResolvers(isAdmin, async (parent, { input }, { models, me }) => {
        return new Promise((resolve, reject) => {
            models.Rating.findByIdAndUpdate(input?.id, input, { upsert: true, new: true }, (err, res) => {
                if (err) return reject(err);
                else resolve(res);
            });
        });
    }),

    deleteRating: combineResolvers(isAuthentication, async (parent, { id }, { models, me }) => {
        return new Promise((resolve, reject) => {
            models.Rating.findByIdAndRemove(id, { isDeleted: true }, { new: true }, (err, res) => {
                if (err) return reject(err);
                else resolve(true);
            });
        });
    }),

}


module.exports = { ratingMutation, ratingQuery }
