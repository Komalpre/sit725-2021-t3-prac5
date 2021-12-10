const { mongoClient } = require('./database');

const contactCollection = mongoClient.db('business-cards').collection('contact');

// Get all documents
const getAll = (res) => {
  contactCollection.find().toArray((err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(result);
  });
};

// Insert document
const insert = (data, res) => {
  contactCollection.insertOne(data, (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({
      success: true,
      message: 'Your message has been sent!',
    });
  });
};

// Delete document
const remove = (id, res) => {
  contactCollection.deleteOne({ _id: id }, (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({
      success: true,
      message: 'Contact deleted',
    });
  });
};

module.exports = {
  getAll,
  insert,
  remove,
};
