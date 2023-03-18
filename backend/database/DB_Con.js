const mongoose = require("mongoose").connect
const DB_Con = ()=>{
    mongoose(process.env.DB_URI)
    .then(()=>{
        console.log(`database connected`)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = DB_Con