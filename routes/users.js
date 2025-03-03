const express = require("express");
const router = express.Router();
const { User } = require("../models");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const userId = req.decoded.id;
    const user = await User.findByPk(userId);
    if (user) {
      const userObj = user.toJSON();
      delete userObj.password;
      res.json(userObj);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
