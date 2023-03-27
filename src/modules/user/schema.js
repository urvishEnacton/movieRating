const userSchema = `
    type User {
        firstName: String
        lastName: String
        photo: String
        Address: String
        Email: String
        Password: String
        Gender: String
        userType: String
        isVerified: Boolean
        createdAt: Date
        updatedAt: Date
    }
   input userInput {
    firstName: String
    lastName: String
    photo: String
    Address: String
    Email: String
    Password: String
    Gender: String
    userType: String
   }

   type signInRes {
    token :String
    data:User
   }

extend type Query {
    getAllUser:[User]
}
extend type Mutation {
    signUp(input:userInput):Boolean 
    signIn(email:String,password:String):signInRes
    verifyEmail(email:String):Boolean
    deleteUser:Boolean
}
`

module.exports = { userSchema }
