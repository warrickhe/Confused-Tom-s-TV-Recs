const Joi = require('joi');
const mongoose = require('mongoose');
//notes: add auth later
//pw and user will follow format userN passN
const ReviewSchema = new mongoose.Schema({
    showName: {
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
    },
    username: {
        type: String,
        required: true,
        maxlength: 20,
    }
});

function validateReview(review) {
    const schema = Joi.object({
        showName: Joi.string().max(60).required(),
        rating: Joi.number().min(1).max(5).required(),
        review: Joi.string().max(255),
        date: new Date(),
        username: Joi.string().max(20).required(),
    });
    return schema.validate(review);
}

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
    Review: Review,
    validateReview: validateReview,
}