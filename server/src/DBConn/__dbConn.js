const mongoose = require("mongoose");


const DBConn = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/CRUD_operation");
        console.log("Database Connected Successfully!!!");
    } catch (error) {
        console.log("Database Connection Failed!!!");
    }
    
}

DBConn();