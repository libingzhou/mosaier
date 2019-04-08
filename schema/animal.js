const mongoose = require('mongoose');

const Animal = new mongoose.Schema({
    name:String,
    id:String,
    datum:Array,
});

module.exports = Animal;