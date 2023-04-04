export const userSchema = `
    type User {
        firstName: String
        lastName: String
        photo: String
        address: String
        email: String
        password: String
        gender: String
        userType: String
        isVerified: Boolean
        createdAt: Date
        updatedAt: Date
    }
    input userInput {
        firstName: String
        lastName: String
        photo: String
        address: String
        email: String
        password: String
        gender: Gender
        # userType: String
    }

    type signInRes {
        token :String
        user:User
     }

    extend type Query {
        getAllUser:[User]
    }
    extend type Mutation {
        signUp(input:userInput):Boolean 
        signIn(email:String,password:String):signInRes
        verifyEmail(email:String):Boolean
        deleteUser:Boolean
        fileUpload(img:String):String
    }
`;
