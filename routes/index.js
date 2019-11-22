//routes

//routes/index,js
const express = require("express");
const router = express.Router();
const firebase = require("firebase");

const firebaseConfig = {
    //apikey found in firebase settings
    apiKey: "AIzaSyC_o11byY_2DSq2CR8l82d3BX7eULWSaQk",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "exercise-four-test"
    //storageBucket: "project-id.appspot.com",
    //messagingSenderId: "sender-id",
    //appId: "app-id",
    //measurementId: "G-measurement-id",
};

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

let posts = [];
db.collection('blog-posts').get()
  .then( blogPosts => {
      blogPosts.forEach(blogPosts => {
        posts.push(posts = blogPosts.data()) // on a single post
      })
      //console.log('blogPosts',blogPosts)
  })
  .catch(err => {
    console.log('error',err);
  })

  router.get('/',(req,res) => {
    res.send(posts)
})
module.exports = router;
//index.js
