const express = require('express');
const logger = require('../logger/logger');
const myHelper = require('../util/helper')
const formatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    formatter.trim()
    formatter.lower()
    formatter.upper()
    res.send('My first ever api!')
});

module.exports = router;
   

    
 


module.exports = router;

// router.get('/hello',function(req, res){

//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query parameter for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district

//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+indore)
//     let candidates = ['Akash','suman']
//     res.send(candidates)
// });

// router.get('/candidates/:name', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log ('candidate name is' +req.params.name)
//     res.send('Done')
// })

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')
// });


// // adding this comment for no reason