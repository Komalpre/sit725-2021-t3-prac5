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

module.exports = { mongoClient };
