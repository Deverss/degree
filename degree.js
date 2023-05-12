const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DegreeSchema = new Schema({
    address:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('degree', DegreeSchema);;
