const jwt = require('jsonwebtoken');
const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
//notes: add auth later
//pw and user will follow format userN passN


//add friends, and add reviews
//friends should link to other Users
//reviews link to other reviews
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    username: {
        type: String,
        required : true,
        maxlength: 255,
        unique : true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    password: {
    	type: String,
    	required: true,
    	minLength: 5,
    	maxLength: 15
    }
});

function validateUserRegister(user) {
    const schema = {
        firstName: Joi.string().min(1).max(50).required(),
        lastName: Joi.string().min(1).max(50).required(),
        username: Joi.string().max(255).required(),
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(3).max(255).required(),
    };
    return Joi.validate(user, schema);
}

const User = mongoose.model('User', UserSchema);