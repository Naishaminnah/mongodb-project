const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    email: String,
    password: String,
})
mongoose.model('User',userSchema)