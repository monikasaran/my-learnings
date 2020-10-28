const express = require('express')
const swapiRouter = express.Router()
const axios = require('axios')


swapiRouter.get('/all', async(req, res)=> {
    try {
        const { type, page } = req.query
        const url = `https://swapi.dev/api/${type}/?page=${page}`
        const newsApi = await axios.get(url)
        res.send(newsApi.data)
    } catch (e) {
        console.error(e.message);
        res.send(e)
    }
})


module.exports = swapiRouter