// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';


// import { express } from "express";
// import { bodyParser } from "body-parser";
// import { mongoose } from "mongoose";
// import { cors } from "cors";

// import postRoutes from './routes/posts.js';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const express = require('express');
const postRoutes = require('./routes/posts.js');

// const babel = require("@babel/core");

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://kwlahr:Ky13rocks!@cluster0.vdtbz.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);