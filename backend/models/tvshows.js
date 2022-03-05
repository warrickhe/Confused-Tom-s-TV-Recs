const Joi = require('joi');
const mongoose = require('mongoose');
const TVShowSchema = new mongoose.Schema({
    ShowName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 60,
        unique: true
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

const TVShow = mongoose.model('TVShow', TVShowSchema);
