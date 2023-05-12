const express = require("express");
const router = express.Router();
const {
  getReferences,
  createReference,
  deleteReference,
} = require("../controllers/referenceController");

router.get("/references", getReferences);
router.post("/references", createReference);
router.delete("/references/:id", deleteReference);

module.exports = router;
