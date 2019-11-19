//File: /routes/submit.js
const express = require('express')
      router = express.Router()
      firebase = require('firebase')

const firbaseConfig = {
    //apikey found in firebase settings
    apiKey: "AIzaSyC_o11byY_2DSq2CR8l82d3BX7eULWSaQk",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "exercise-four-test"

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
/* ***End firebase config**** */

//set sample data to submit upon request
const sampleData = {
  title: 'Words',
  text: 'Words',
  author: 'Me'
}

/*
//Test Route
router.get("/test",(req,res) => {
  //not a post request
  try{
    db.collection("blog-posts")
    //Setting an ID for the test doc
    .doc("test-doc")
    .set(sampleData)
    return res.send(`${sampleData}`,Test Data Submitted);
  }catch(e){

  }
})
*/

//Test Route
router.get("/test",(req,res) => {
  //not a post request
  try{
    db.collection("blog-posts")
    //Setting an ID for the test doc
    .doc("test-doc")
    .set(sampleData)
    .then(function()) {
      res.send("Document successfully written!");
    })
  .catch(function(error){
    res.send("Error writing document: ",error);
  });
});

//Submit Data
router.get("/", (req,res) => {
  //localhost:4000/submit?title=title&text=text&author=authornamewhatever
  let titleVal = req.query.title ? req.query.title : '';
  let textVal = req.query.text ? req.query.text : '';
  let authorVal =  req.query.author ? req.query.author : '';
  db.collection("blog-posts")
  .add({
    title: titleVal,
    text: textVal,
    author: authorVal
  })
  .then(ref => res.send(ref))
  .catch(e => res.send(e))
}
module.exports = router
