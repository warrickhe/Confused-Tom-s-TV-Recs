const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
//notes: add auth later
//pw and user will follow format userN passN
const ReviewSchema = new mongoose.Schema({
    ShowName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 60
    },
    rating: {
        type: Number,
        required : true,
        min: 1,
        max: 5,
    },
    review: {
        type: String,
        required: false,
        maxlength: 255,
    },
    date: {
    	type: Date,
    }
});

const Review = mongoose.model('Review', ReviewSchema);