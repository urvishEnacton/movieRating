const { combineResolvers } = require("graphql-resolvers")
const { isAuthentication, isAdmin } = require("../../authentication");

const userQuery = {
    getAllUser: (parent, { id }, { models, me }) => {
        return new Promise(async (resolve, reject) => {
            models.User.find({ ...(id && { _id: id }) }, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }
}

const userMutation = {
    signUp: async (parent, { input }, { models, me }) => {
        // await emailCheck(input?.email);
        await verifyRepeatEntry("User", { email: input?.email }, "This email is already in use")
        return new Promise(async (resolve, reject) => {
            models.User.create(input, async (err, res) => {
                if (err) reject(err);
                resolve(res);
            });

        });
    },
    signIn: async (parent, { email, password }, { models, me }) => {
        let filter = { email };
        const user = await models.User.findOne(filter)
        if (!user) throw new GraphQLError("Please enter valid email or userName", { extensions: { code: 'BAD_USER_INPUT' } });

        if (!await user.validatePassword(password)) throw new GraphQLError("Invalid Password", { extensions: { code: 'BAD_USER_INPUT' } });
        console.log("🚀 ~ file: resolver.js:79 ~ signIn: ~ await user.validatePassword(password)", await user.validatePassword(password))

        if (!user.isVerified) {
            const code = await emailService.emailNotification(user, "verifyEmail");
            if (code.flag) {
                user.code = code?.data;
                await user.save();
            }
            throw new GraphQLError("Your Email Verification is pending.", { extensions: { code: 'BAD_USER_INPUT' } });
        }

        user.save();
        return {
            token: generateToken(user, "8h"),
            user: user,
        };

    },

    deleteUser: combineResolvers(isAuthentication, async (parent, args, { models, me }) => {
        const userId = args?.id;
        return new Promise((resolve, reject) => {
            models.User.findByIdAndRemove(me?.id, (err, res) => {
                if (err) return reject(err);
                else resolve(true);
            });
        });
    }),
    verifyEmail: () => {

    }
}


module.exports = { userMutation, userQuery }
