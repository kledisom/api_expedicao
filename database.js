const mongoose = require("mongoose");

function connectDB() {

     mongoose.connect(process.env.DATABASE_URL); 
    /*mongoose.connect('mongodb://localhost:27017/mydb');*/


    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("banco de dados conectado"))
}

module.exports = connectDB;
