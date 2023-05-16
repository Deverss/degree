const express = require("express");
const router = express.Router();
const degreeController = require("../controllers/degreeController");

router.post('/add', degreeController.add);
router.get('/get', degreeController.get);
router.get('/getall',degreeController.getAll);
router.delete('/deleteall', degreeController.deleteAll);
module.exports = router;
