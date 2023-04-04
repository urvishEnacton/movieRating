import { combineResolvers, skip } from "graphql-resolvers";
import { GraphQLError } from "graphql";

const isAuthentication = (parents, args, { me }) => {
  return me ? skip : new GraphQLError("you are not authenticated", { extensions: { code: "UNAUTHENTICATED" } });
};

const isAdmin = combineResolvers(isAuthentication, (parents, args, { me: { userType } }) => {
  return userType === "Admin" ? skip : new GraphQLError("you are not Admin", { extensions: { code: "UNAUTHENTICATED" } });
});

module.exports = {
  isAuthentication,
  isAdmin,
};
