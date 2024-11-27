const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kreq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    await client.connect();

    const coffeeCollection = client.db('EspressoDB').collection('coffees')

    // add coffees/ created coffees
    app.post('/coffees',async(req,res)=>{
        const newCoffee=req.body;
        const result = await coffeeCollection.insertOne(newCoffee)
        res.send(result)
    })
    // get/read coffee data ^^^^^^(post thn get)^^^^^^
    app.get('/coffees',async(req,res)=>{
      const cursor = coffeeCollection.find()
      const result = await cursor.toArray()
      res.send(result)
   })

    //update part 1
    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
  })

    // update part 2
      app.put('/coffees/:id', async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updatedCoffee = req.body;
        const coffee = {
            $set: {
                name: updatedCoffee.name,
                chef: updatedCoffee.chef,
                supplier: updatedCoffee.supplier,
                taste: updatedCoffee.taste,
                category: updatedCoffee.category,
                details: updatedCoffee.details,
                photo: updatedCoffee.photo
            }
        }

        const result = await coffeeCollection.updateOne(filter, coffee, options )

        res.send(result);
      })
      
      // deleteee
      app.delete('/coffees/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const result = await coffeeCollection.deleteOne(query);
        res.send(result);
    })

     


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Espresso Escape server is running')
})
app.listen(port, ()=>{
   console.log(`Espresso Escape server is running on port ${port}`)
})