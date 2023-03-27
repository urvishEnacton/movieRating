const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    photo: String,
    Address: String,
    Email: String,
    Password: String,
    Gender: String,
    userType: String,
    isVerified: Boolean,
}, { timestamps: true })

userSchema.plugin(mongoosePaginate);
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next()
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


const User = mongoose.model('user', userSchema);
module.exports = { User }
