const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const DB_Con = require("./database/DB_Con")
const router = require("./routes/contact")
const path = require("path")
const app = express()
require("dotenv").config()
DB_Con()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"],
    credentials:true
}))
app.use(express.static(path.join(__dirname,".././client/build")))
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,".././client/build/index.html"))
})
app.use("/api",router)
module.exports = app
