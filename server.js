const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(express.json());


const { MongoClient } = require('mongodb');
const MONGODB_URI = 'mongodb+srv://Sit-725-2021:8QQ1Ks9j6d0UEmwK@sit-725-prac4.t2u3p.mongodb.net/e-shop?retryWrites=true&w=majority';

// Create MongoDB client
const mongoClient = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// Connect to MongoDB
mongoClient.connect((err) => {
    if (err) throw err;
    console.log('Database connected');
  });


// To make a contact post.
let contactCollection;
app.post("/contacts",(req,res) =>{
    contactCollection = mongoClient.db('e-shop').collection('contact');
    contactCollection.insertOne(req.body, (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json({
        success: true,
        message: 'Your message has been sent!',
      });
    });
});

const port = 3000;
app.listen(port, ()=>{
    console.log("E-shop is running on localhost:"+port);
});