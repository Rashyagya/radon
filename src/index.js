const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const midGlb= function (req, res, next) {
    console.log("Hi I am a GlOBAL middleware");
    //logic
    next()
}

const assignmentMW= function (req, res, next) {

  // current date and time                 
    let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)

    // for ip address
    const dns = require('dns');
dns.lookup('www.google.org', 
(err, addresses, family) => {
   console.log(addresses);
    //console.log("/creatUser")

 console.log("/creatUser")
    //next();
})

    
    //console.log('$(datetime)  $(ip)  $(url)')
                   
}

app.use(assignmentMW)

mongoose.connect("mongodb+srv://Rashmivishwakarma:rashmi1996@cluster0.m1asu.mongodb.net/10junework?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("Your MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        //req.body ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
