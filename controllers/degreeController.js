const Degree = require("../degree");

const degreeController = {
  add: async (req, res) => {
    const address = req.body.degree;
    try {
      const addDegree = new Degree({ address });
      await addDegree.save();
      res.json("successfully!!!");
    } catch (error) {
      return console.log(error);
    }
  },
  get: async (req, res) => {
    const id = req.params.id;
    const getAddress = await Degree.findById(id);
    res.json({data:getAddress});
  },
};

module.exports = degreeController;
