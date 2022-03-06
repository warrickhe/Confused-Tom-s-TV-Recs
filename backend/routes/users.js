const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;
const { User, validateLogin, validateRegister} = require("../models/user.js")

console.log(User)
console.log(validateLogin)
console.log(validateRegister)
router.get("/username", async (req, res) => {
	console.log("reached!")
    var user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("User doesn't exist.");
    return res.status(200).send(user)
});

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