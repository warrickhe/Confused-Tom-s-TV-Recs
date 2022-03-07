const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;
const User = require("../models/user.js").User
const { Review, validateReview} = require("../models/review.js")

router.get("/review/user/:username", async (req, res) => {
	//for body just have username, this will always return the user's last 5 revieews
    var user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(400).send("User doesn't exist.");
    reviews = await Review.find({username:[req.params.username]}).sort({date: 'descending'});
    return res.status(200).send(reviews);
});

router.get("/review/show/:tvshow", async (req, res) => {
	//for body just have username, this will always return the user's last 5 revieews
    var reviews = await Review.find({ showName: req.params.tvshow });
    if (!reviews || reviews.length===0) return res.status(400).send("TV Show doesn't exist, or has no reviews.");
    reviews = await Review.find({showName:[req.params.tvshow]}).sort({date: 'descending'});
    const average = await Review.aggregate([
	    { $match: { showName: req.params.tvshow } },
	    { $group: { _id: null, average: { $avg: '$rating' } } },
	]).exec();
    return res.status(200).send(reviews);
});

router.get("/review/show/:tvshow/rating", async (req, res) => {
	//for body just have username, this will always return the user's last 5 revieews
    var reviews = await Review.find({ showName: req.params.tvshow });
    if (!reviews || reviews.length===0) return res.status(400).send("TV Show doesn't exist, or has no reviews.");
    reviews = await Review.find({showName:[req.params.tvshow]}).sort({date: 'descending'});
    const average = await Review.aggregate([
	    { $match: { showName: req.params.tvshow } },
	    { $group: { _id: null, averageRating: { $avg: '$rating' } } },
	]).exec();
    return res.status(200).send(average);
});

router.post("/review", async(req,res) => {
	const { error } = validateReview(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //create new review
    review = new Review({
        showName: req.body.showName,
        rating: req.body.rating,
        review: req.body.review,
        date: new Date(req.body.date),
        username: req.body.username,
    });
    review.save()
    return res.status(200).send("Review submitted.");
})

module.exports = router