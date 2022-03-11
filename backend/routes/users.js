const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;
const { User, validateLogin, validateRegister} = require("../models/user.js")
const { Review, validateReview} = require("../models/review.js")

//GET REQUESTS
router.get("/username/:username", async (req, res) => {
    var user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(400).send("User doesn't exist.");
    return res.status(200).send(user);
});

router.get("/username/:username/friends", async (req, res) => {
    var user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(400).send("User doesn't exist.");
    return res.status(200).send(user.friends);
});

router.get("/feed/:username", async (req, res) => {
    //put username inside body here
    var user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(400).send("User doesn't exist.");
    var friends = await user.friends;
    console.log(friends);
    var feed = await Review.find({'username': {$in: friends}}).sort({date: 'descending'});
    return res.status(200).send(feed);
});

//POST REQUESTS
router.post("/register", async(req,res) => {
	const { error } = validateRegister(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send("Username already taken.");
    //create new user
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
    });
    user.save()
    return res.status(200).send("User registered successfully.");
})

//make sure only logged in users can do this
router.post("/addfriend" , async(req,res) => {
    user = await User.findOne({ username: req.body.friendUsername });
    clientUser = await User.findOne({username: req.body.myUsername});
    if (!user || !clientUser) return res.status(400).send("User does not exist.");
    //create new user
    if (clientUser.friends.includes(req.body.friendUsername))
        return res.status(400).send("Already friends with this person");
    clientUser.friends.push(req.body.friendUsername);
    clientUser.save()
    return res.status(200).send("Friend added successfully.");
})

router.post("/login", async (req, res) => {
	console.log("reached!")
    // validate the request body first
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //find an existing user
    var user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("Username reqired.");
    if (user) {
        if (user.validatePassword(req.body.password)) {
            return res.status(200).send("User login successfully");
        }
        else return res.status(400).send("Password is incorrect");
    } else return res.status(400).send("User doesn't exist.");
});

module.exports = router