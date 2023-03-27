const mongoose = require('mongoose');

const db = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}
module.exports = { db }