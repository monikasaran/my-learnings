const express = require('express')

const app = express()

//routes
const swapiRouter  = require('./routes/swapi')

app.use((req, res, next) =>{
    const allowedOrigins = ['http://localhost:3000']
    const origin = req.headers.origin
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})

app.use('/', swapiRouter)

// listen on port 5002
const port = 5002
app.listen(port, () => console.log(`Listening on port ${port}`))