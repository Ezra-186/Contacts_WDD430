const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .find();

  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
  });
};


const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .find({ _id: contactId });

  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts[0]);
  });
};

const createContact = async (req, res) => {
  const newContact = req.body;
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .insertOne(newContact);

  if (response.acknowledged) {
    res.status(201).json({ id: response.insertedId });
  } else {
    res.status(500).json({ error: "Failed to create contact" });
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const updatedContact = req.body;
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .replaceOne({ _id: contactId }, updatedContact);

  if (response.matchedCount > 0) {
    res.status(200).json({ message: "Contact updated" });
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .deleteOne({ _id: contactId });

  if (response.deletedCount > 0) {
    res.status(200).json({ message: "Contact deleted" });
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};
