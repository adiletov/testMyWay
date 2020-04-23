const driver =  "../test/driver";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {nanoid} = require('nanoid');
const bcrypt = require('bcrypt');



const newSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user', 'driver'],
    },
    avatar: String
});

newSchema.methods.generationToken = function () {
this.token = nanoid();
};

newSchema.methods.sortUser = function(req,res,next){
    console.log(req)
};

newSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();


    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next()
});

newSchema.set('toJSON', {
    transform: (doc, ret, options)=>{
        delete ret.password;
        return ret;
    }
});


const User = mongoose.model('User', newSchema);
module.exports = User;
