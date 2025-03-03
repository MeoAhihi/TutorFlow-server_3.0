const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models");


const signAccessToken = (req, res, next) => {
  const user = req.user;
  console.log("b", user);
  res.accessToken = jwt.sign(
    {
      id: user.id,
      fullname: user.fullname,
      shortname: user.shortname,
      avatarUrl: user.avatarUrl,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  next();
};

router.post(
  "/register",
  async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    req.user = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    console.log("a", req.user);
    next();
  },
  signAccessToken,
  (req, res) => {
    res.status(201).json({
      message: "user registered successfully",
      accessToken: res.accessToken,
    });
  }
);

router.post(
  "/login",
  async (req, res, next) => {
    //check if user exists
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (!userExists)
      return res.status(400).json({ message: "user does not exist" });
    // check if password is correct
    const isMatched = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (!isMatched)
      return res.status(400).json({ message: "incorrect password" });
    req.user = userExists;
    next();
  },
  signAccessToken,
  (req, res) => {
    res
      .status(200)
      .json({ message: "user logged in", accessToken: res.accessToken });
  }
);

module.exports = router;
