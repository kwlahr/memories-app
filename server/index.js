// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import { express } from "express";
// import { bodyParser } from "body-parser";
// import { mongoose } from "mongoose";
// import { cors } from "cors";

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://kwlahr:Ky13rocks!@cluster0.vdtbz.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);