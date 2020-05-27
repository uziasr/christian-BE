
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const entrepreneurRouter = require("./entrepreneurs/e-router")
const backerRouter = require("./backers/backer-router")
const cookieParser = require("cookie-parser")


const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(cookieParser())


server.use("/api/entrepreneur", entrepreneurRouter)
server.use("/api/backer", backerRouter)

server.get("/", (req, res, next) => {
    return res.status(201).json({
        message: "Welcome to VR Direct!"
    })
})
server.use((err, req, res, next) => {
    console.log("error", err)
    return res.status(500).json ({ 
        message: "uh oh there was a problem!"
    })
})

module.exports = server;
