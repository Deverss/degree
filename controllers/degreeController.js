const Degree = require("../degree");

const degreeController = {
  add: async (req, res) => {
    const address = req.body.degree;
    const check = await Degree.findOne({ address: address });
    try {

      if (check) {
        res.json({ message: "existed" })
      } else {
        const addDegree = new Degree({ address });

        await addDegree.save();

        res.json("successfully!!!");
      }

    } catch (error) {
      return console.log(error);
    }
  },
  get: async (req, res) => {
    const id = req.params.id;
    const getAddress = await Degree.findById(id);
    res.json({ data: getAddress });
  },
  deleteAll: async (req, res) => {
    await Degree.deleteMany();
    res.json({ mess: "oke" });
  },
  getAll: async (req, res) => {
    const getAll = await Degree.find();
    res.json({ data: getAll });
  }
};

module.exports = degreeController;
