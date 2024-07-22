const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoutes = require('./routes/product.route.js');  // Corrected this line

//Middleware
app.use(express.json())
//To add data in formats other than json for example: form data
app.use(express.urlencoded({extended: false}))

/*
Connected database and then got the server running
*/
mongoose.connect("mongodb+srv://shamika:zKXV1ph6xm9L5yqt@backenddb.mjmtp0k.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to database")
    app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
}).catch((err)=>{
    console.log(err.message)
})


/*
request - The client(browser) sends a request to server
response - The response received from server
/ - This is the path to the default page. 
  - Whenever we visit this pabge, we want to send a response from the server
*/
//Routes
app.use("/api/products", productRoutes)

