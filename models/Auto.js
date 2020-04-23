const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    carBrand: {
        type: String,
        required: true
    },
    governmentNumber: {
        type: String,
        required: true
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    yearOfIssue: {
        type: Number,
        required: true
    },
    carColor: {
        type: String,
        required: true
    },
    optionalEquipment: [String],
    insurance:{
        type: String,
        required: true
    }
});

const Auto = mongoose.model('Auto', newSchema);
module.exports = Auto;
