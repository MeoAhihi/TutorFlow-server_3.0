const express = require("express");
const router = express.Router();
const { User } = require("../models");

const userFields = [
  "fullname",
  "shortname",
  "birthday",
  "avatarUrl",
  "phoneNumber",
  "email",
  "address",
  "country",
  "biography",
];

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

router.patch("/", async function (req, res, next) {
  try {
    const userId = req.decoded.id;
    const data = req.body;

    const filteredData = Object.keys(data)
      .filter((key) => userFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});

    await User.update(filteredData, { where: { id: userId } });

    const updatedUser = await User.findByPk(userId);
    if (updatedUser) {
      const userObj = updatedUser.toJSON();
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
