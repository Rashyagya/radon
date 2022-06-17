// Create API's to do each of the following:
//- get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
//- then change the above to get the temperature only( of London)
//- Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
//result should look something like this
//[
// {city:"London", temp: 280},
// {city:"Moscow", temp: 290},
//{city:"Bangalore", temp: 301.2},
//]

let axios = require("axios")

let getSortedCities = async function (req, res) {
    try{
        let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjArray=[]
        //better to use for of here
        for (i=0 ; i<cities.length; i++){

            let obj = { city : cities[i] } //{city:"bengaluru"}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e8589c1a49a0e90900525c0a76ba55b1`)
            console.log(resp.data.main.temp )
            
            obj.temp= resp.data.main.temp //{city:"bengaluru",temp:301.2}
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort( function(a,b) {return a.temp-b.temp} )

        console.log(sorted)
        res.status(200).send ({status: true, data: sorted})
    
        } catch (error) {
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})
        }
    }

module.exports.getSortedCities = getSortedCities
