const express = require('express');
const mongoose = require('mongoose');


const PostMessage = require('../models/postMessage.js');


module.exports = getPosts = async (req, res) => {
  try {
    
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
    
  } catch (error) {
    res.status(404).json({ message: error.message});
  }
}

module.exports = createPost = (req, res) => {
  res.send("Post Creation");
}