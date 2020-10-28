
const express = require("express")
const app = express()
const { MongoClient } = require('mongodb');
const uri = "";

const listUsers =  (client) => {
    return client.db("users_info").collection("users").find({})
}

const getUser = (client, id) => {
    return client.db("users_info").collection("users").findOne({ id: `${id}` })
}

const insertUser = (client, newUser) => {
    return  client.db("users_info").collection("users").insertOne(newUser)
}

const updateUser = (client, id) => {

}

app.get("/users", async(req, res, next) => {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        listUsers(client).toArray().then(data => {
            res.json({users: data})
        })
    } catch(e) {
        throw e
    }
})

app.get("/users/:id", async(req, res, next) => {
    const client = new MongoClient(uri)
    try {
        const { id } = req.params
        await client.connect()
        getUser(client, id).then(data => {
            res.json({user: data})
        })
    } catch(e) {
        throw e
    }
})

app.post("/users", async(req, res, next) => {
    const client = new MongoClient(uri)
    try {
        const user = req.body
        await client.connect()
        insertUser(client, user).then(data => {
            res.json({user: data})
        })
    } catch(e) {
        throw e
    }
})

app.patch("/users/:id", async(req, res, next) => {
    const client = new MongoClient(uri)
    try {
        const { user } = req.params
        await client.connect()
        insertUser(client, user).then(data => {
            res.json({user: data})
        })
    } catch(e) {
        throw e
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})