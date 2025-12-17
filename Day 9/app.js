const express= require('express')
const app= express()
const bodyParser= require('body-parser')//To get the data
const exhbs= require('express-handlebars')//template engine
const dbo=require ('./db')
let message="Kanimozhi"
app.set('view engine','hbs')//This tells Express:“Use Handlebars (.hbs files) as the template engine.”
app.set('views','viewfold')//This tells Express where your template files are located.
//app.use(bodyParser.urlencoded({extended:true}))//This tells Express to parse incoming requests with URL-encoded payloads (such as those submitted through HTML forms)
app.use(bodyParser.urlencoded({extended:true}))

app.post('/store_book',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata={
        title:req.body.title,author:req.body.author
    }
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.get('/',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    const cursor=collection.find({})
    let mydata=await cursor.toArray()
    let message ="Kanimozhi"
    switch(req.query.status){
    case '1':
        message="inserted successfully"
        break;
    default:
        break;
}
    res.render('main',{mydata,message});
});

/*app.get('/',(req,res)=>{
    let message="Abarnagaysduasd"
    
    res.render('main',{message})
})*/

app.engine('hbs',exhbs.engine(
    {layoutsDir:'viewfold/',
        defaultLayout:"main",
        extname:"hbs"}))
app.listen(8000,()=>{
    console.log("server is running on port 8000");
});


