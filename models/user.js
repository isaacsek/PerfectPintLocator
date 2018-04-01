const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    name: Object,
    email: String,
    bookmarks: Array,
    currentBookmark: Object
});

mongoose.model('users', userSchema);
