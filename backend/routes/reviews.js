const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;
const TVShow = require("../models/tvshows.js")
const User = require("../models/user.js").User
const { Review, validateReview} = require("../models/review.js")

router.get("/review/:username", async (req, res) => {
	//for body just have username, this will always return the user's last 5 revieews
    var user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(400).send("User doesn't exist.");
    console.log('looks good so far....')
    reviews = await Review.find({username:[req.params.username]}).sort({date: 'descending'});
    return res.status(200).send(reviews);
});

router.post("/review", async(req,res) => {
	const { error } = validateReview(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //create new review
    review = new Review({
        showName: req.body.showName,
        rating: req.body.rating,
        review: req.body.review,
        username: req.body.username,
    });
    review.save()
    return res.status(200).send("Review submitted.");
})

module.exports = router