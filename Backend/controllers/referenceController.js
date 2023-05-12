const Reference = require("../models/referenceList");

const getReferences = async (req, res) => {
  try {
    const references = await Reference.find();
    res.json(references);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createReference = async (req, res) => {
  const reference = new Reference({
    title: req.body.title,
    link: req.body.link,
  });

  try {
    const savedReference = await reference.save();
    res.json(savedReference);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteReference = async (req, res) => {
  try {
    await Reference.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getReferences,
  createReference,
  deleteReference,
};