import express from "express";

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //jsp, blade
    app.set("views", "./src/views");
}

module.exports = configViewEngine;