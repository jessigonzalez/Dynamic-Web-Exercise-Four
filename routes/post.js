//post.js in app.js
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
//Route: /post:id
router.get("/:id",(req,res) =>{
  let queryId = req.params.id;
  let docRef = db.collection("blog-posts").doc(queryId);
  docRef
  .get()
  .then(doc => res.send(doc.data()))
  .catch(error => res.send(error));
})

module.exports = router;
