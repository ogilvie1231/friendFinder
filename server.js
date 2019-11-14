var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080

express.json()

express.urlencoded({ extended: false })

var htmlRouter = require('./app/routing/htmlRoutes.js')
var apiRouter = require('./app/routing/apiRoutes')

app.use('/api', apiRouter)
app.use('/', htmlRouter)

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT)
})