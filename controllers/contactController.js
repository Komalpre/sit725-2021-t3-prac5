const { ObjectId } = require('mongodb');
const contactService = require('../services/contactService');

// Get all contacts
const getAllContact = (req, res) => {
  contactService.getAll(res);
};

// Insert contact
const insertContact = (req, res) => {
  contactService.insert(req.body, res);
};

// Delete contact
const deleteContact = (req, res) => {
  const { id } = req.params;
  contactService.remove(ObjectId(id), res);
};

module.exports = {
  getAllContact,
  insertContact,
  deleteContact,
};
