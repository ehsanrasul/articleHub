const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Article = require('../Model/articleModel')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


//Creating a New Article to the Database
app.post('/createArticle', async (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        published: req.body.published,
        tags: req.body.tags
    });

    try {
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving article');
    }
});



//Retrieveing all the Articles from the Database
app.get('/retrieveArticle', async (req, res) => {
    try {
        const articles = await Article.find({});
        res.json(
            articles.map((article) => ({
                title: article.title,
                body: article.body,
                author: article.author,
                published: false,
                tags: article.tags
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving articles');
    }
});


//Updating the Articles
app.put('/updateArticle/:articleId', async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.articleId,
            {
                title: req.body.title,
                body: req.body.body,
                author: req.body.author,
                published: true,
                tags: req.body.tags
            },
            { new: true }
        );
        res.json(updatedArticle);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating article');
    }
});


//Deleting the Articles
app.delete('/deleteArticle/:articleId', async (req, res) => {
    try {
        const removedRecord = await Article.findByIdAndRemove(req.params.articleId);
        res.json(removedRecord);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting article');
    }
});




module.exports = app
