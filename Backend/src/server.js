// Imports
import express from "express";
import cors from "cors";

import router from './routes/task.route.js';
import configDetails from "./config.js";
import mongoose from "mongoose";


// Config Details
const PORT = configDetails.PORT;
const URI = configDetails.URI;


// Initialisation
const server = express();


// Middleware
server.use(cors);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// Routes
server.use('/', router);


// DB Connection
mongoose.connect(URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        return server.listen(PORT);
    })
    .then(() => {
        console.log(`Server listening on port ${PORT}`);
    })
    .catch((err) => {
        console.error('Error connecting to DB:', err);
    });