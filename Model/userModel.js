const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    articles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Article",
        },
      ],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;