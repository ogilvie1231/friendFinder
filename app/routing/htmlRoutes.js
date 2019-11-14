var path = require('path')

var htmlRouter = require('express').Router()

htmlRouter.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
})

htmlRouter.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

module.exports = htmlRouter