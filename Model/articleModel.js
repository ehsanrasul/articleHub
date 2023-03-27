const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articleSchema = new Schema({
    title:{type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},
    published: {type: Boolean},
    tags: {type: String, required: true}
})


module.exports = mongoose.model('Article', articleSchema);


