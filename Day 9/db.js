const mongodb=require('mongodb')
const mongoclient=mongodb.MongoClient;//bridge bet code and database
let database;
async function getDataBase(){
   const client=await mongoclient.connect('mongodb://127.0.0.1:27017')
   database=await client.db('bookdemo1')
   if(!database){
    console.log("database not connected")
   }
   return database;

}
module.exports={getDataBase}