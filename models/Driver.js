const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectID,
        ref: 'user',
        required: true
    },
    autoId: {
        type: Schema.Types.ObjectID,
        ref: 'auto',
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    activeStatus: {
        type: String,
        enum: ['в пути', 'занят', 'свободен', 'no active'],
        default: 'no active'
    },
});

const Auto = mongoose.model('Auto', newSchema);
module.exports = Auto;