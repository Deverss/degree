const express = require("express");
const router = express.Router();
const degreeController = require("../controllers/degreeController");

router.post('/add', degreeController.add);
router.get('/get', degreeController.get);

module.exports = router;
