//const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authormodel")

              //assignment 7-june mongodb
// //a/. Write down the schemas for book and authors (keeping the data given below in mind). Also create the documents (corresponding to the data given below) in your database.
// b. CRUD operations. Write API's to do the following:
// (1)Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)

let creatAuther=async(req,res)=> {
    let data=req.body
    let savedData= await AuthorModel.create(data)
    res.sed({msg:savedData})
}
let createBook= async (req, res)=> {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
// 2.List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
let getBooksbyChetanBhagat= async(req,res)=>{
    let data=req.body
    let saveData= await BookModel.create(data)
    res.send({msg:saveData})
}

//3. find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
let authorofBook= async(req,res)=>{
    let data=await BookModel.findOneAndUpdate({Name:"Two states"},{$set:{price:100}},{new:true})
    let authorData=await AuthorModel.find({author_id}).select("author_name ")
    let price=data.prices
    res.send({msg:authorData,price})
}

//4. Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respectivebooks. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all //the authorName corresponding to the authorId’s ( by querying authorModel)
let bookBetween50_100=async(req,res)=>{
 
}



 module.exports.creatAuther= creatAuther
 module.exports.createBook= createBook
 module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
 module.exports.authorofBook= authorofBook
 module.exports.bookBetween50_100= bookBetween50_100

















// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
