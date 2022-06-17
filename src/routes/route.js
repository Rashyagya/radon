const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const MemesController = require("../controllers/Memescontroller") 



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.get("/cowin/getDistrict_id", CowinController.getDistrict_id)

router.post("/cowin/getOtp", CowinController.getOtp)

//cities with weather name and temp-:
router.get("/getSortesCities", weatherController.getSortedCities)

//memes api
router.post("/Memes" , MemesController.memeHandler)

module.exports = router;