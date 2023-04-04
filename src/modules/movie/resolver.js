import { combineResolvers } from "graphql-resolvers";
import { isAuthentication, isAdmin } from "../../authentication";

export const movieQuery = {
  getAllMovie: (parent, { id }, { models, me }) => {
    return new Promise(async (resolve, reject) => {
      models.Movie.find({ ...(id && { _id: id }) })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};

export const movieMutation = {
  addMovie: combineResolvers(isAdmin, async (parent, { input }, { models, me }) => {
    return new Promise((resolve, reject) => {
      models.Movie.create(input)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }),

  updateMovie: combineResolvers(isAdmin, async (parent, { input }, { models, me }) => {
    return new Promise((resolve, reject) => {
      models.Movie.findByIdAndUpdate(input?.id, { new: true })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }),

  deleteMovie: combineResolvers(isAdmin, async (parent, { id }, { models, me }) => {
    return new Promise((resolve, reject) => {
      models.Movie.findByIdAndRemove(id)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }),
};
