import { combineResolvers } from "graphql-resolvers";
import { isAuthentication, isAdmin } from "../../authentication";
import jwt from "jsonwebtoken";
import { fileUpload } from "../../functions/fileUpload";
import { GraphQLError } from "graphql";

const generateToken = (user, expiresIn) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.SECRET, { expiresIn });
};

export const userQuery = {
  getAllUser: (parent, { id }, { models, me }) => {
    return new Promise(async (resolve, reject) => {
      models.User.find({ ...(id && { _id: id }) }, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },
};

export const userMutation = {
  signUp: async (parent, { input }, { models }) => {
    console.log('input: ', input);
    // await emailCheck(input?.email);
    // await verifyRepeatEntry("User", { email: input?.email }, "This email is already in use")
    return new Promise(async (resolve, reject) => {
      models.User.create(input)
        .then((res) => {
          console.log("res: ", res);

          resolve(true);
        })
        .catch((err) => reject(err));
    });
  },

  signIn: async (parent, { email, password }, { models }) => {
    const user = await models.User.findOne({ email });
    if (!user) throw new GraphQLError("Please enter valid email or userName", { extensions: { code: "BAD_USER_INPUT" } });
    if (!user.isVerified) throw new GraphQLError("Please verify your email", { extensions: { code: "BAD_USER_INPUT" } });
    if (!(await user.validatePassword(password)))
      throw new GraphQLError("Invalid password or userName", { extensions: { code: "BAD_USER_INPUT" } });
    return {
      token: generateToken(user, "8h"),
      user: user,
    };
  },

  deleteUser: combineResolvers(isAuthentication, async (parent, args, { models, me }) => {
    return new Promise((resolve, reject) => {
      models.User.findByIdAndRemove(me?.id)
        .then((res) => resolve(true))
        .catch((err) => reject(err));
    });
  }),

  verifyEmail: async (parent, { email }, { models }) => {
    return new Promise(async (resolve, reject) => {
      models.User.findOneAndUpdate({ email }, { isVerified: true })
        .then((res) => resolve(true))
        .catch((err) => reject(err));
    });
  },

  fileUpload: combineResolvers(isAuthentication, (parent, { img }, { models, me }) => {
    return new Promise(async (resolve, reject) => {
      const file = await fileUpload(img);
      if (file) resolve(file);
      else reject(false);
    });
  }),
};
