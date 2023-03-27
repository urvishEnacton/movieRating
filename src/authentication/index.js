const { combineResolvers, skip } = require("graphql-resolvers");
const { GraphQLError } = require('graphql');


const isAuthentication = (parents, args, { me }) => {
    return me ? skip : new GraphQLError("you are not authenticated", { extensions: { code: 'UNAUTHENTICATED' }, })
}


const isAdmin = combineResolvers(isAuthentication, (parents, args, { me: { roleId } }) => {
    return roleId?.roleName === "Admin" ? skip : new GraphQLError("you are not Admin", { extensions: { code: 'UNAUTHENTICATED' }, })
})

module.exports = {
    isAuthentication,
    isAdmin
}

