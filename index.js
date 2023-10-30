const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3000
const app=express()

// middleware 
app.use(express.json())
app.use(cors())


// username and password
// implementation-jwt
// vlXiU75TtGo9WlvB


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://implementation-jwt:vlXiU75TtGo9WlvB@cluster0.kndeci6.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // database collection
    const implementationJwtDB=client.db("jwtDB")
    const productsCollection=implementationJwtDB.collection("products")

    // get:: send clientside add products data from database
    app.get("/product",async(req,res)=>{
        const result= await productsCollection.find().toArray()
        res.send(result)
    })


    // post:: Send databse Add Products Data
    app.post("/product",async(req,res)=>{
        console.log(product);
        const result=productsCollection.insertOne(product)
        res.send(result)
    })



    // Send a ping to confirm a successful connection
     client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send("Server is running...")
})

app.listen(port,(req,res)=>{
    console.log(`port${port}`);
})


