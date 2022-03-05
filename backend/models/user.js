const Joi = require('joi');
const mongoose = require('mongoose');
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
    password: {
    	type: String,
    	required: true,
    	minLength: 5,
    	maxLength: 15
    }
});

UserSchema.methods.validatePassword = function(password) {
    return password === this.password
}

function validateUserLogin(user) {
    const schema = Joi.object({
        username: Joi.string().max(255),
        password: Joi.string().min(3).max(255).required()
    });
    return schema.validate(user);
}

function validateUserRegister(user) {
    const schema = Joi.object({
        firstName: Joi.string().min(1).max(50).required(),
        lastName: Joi.string().min(1).max(50).required(),
        username: Joi.string().max(255).required(),
        password: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(user);
}

const User = mongoose.model('User', UserSchema);

module.exports = {
    User:User,
    validateLogin:validateUserLogin,
    validateRegister:validateUserRegister,
}