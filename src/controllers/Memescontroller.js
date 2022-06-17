// Axios POST request assignment
// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
//2. Pick a memeId you want (Eg 129242436) for the POST request
//3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
//template_id <meme_id>
//text0 <text you want as a caption>
//text1 <optional>
//username chewie12345
//password meme@123

//4. Return a response with a body like this
//"data": {
//"url": "https://i.imgflip.com/5mvxax.jpg",
//"page_url": "https://imgflip.com/i/5mvxax"
//}


let axios = require("axios")
 
let memeHandler = async function (req,res){
    try{
        let options = {
            method : "post" ,
            url: "https://api.imgflip.com/caption_image?template_id=195515965&text0=you&text1=wow&username=chewie12345&password=meme@123"
            // url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
        }
        let result = await axios (options)

        res.send({ data: result.data})

    }catch (error){
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})
    }
}

module.exports.memeHandler = memeHandler