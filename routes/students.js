const express = require("express");
const router = express.Router();
const { Student } = require("../models");
const { decodeJwtMiddleware } = require("../middlewares/decodeToken");
const asyncHandler = require("express-async-handler");

router.use(decodeJwtMiddleware);
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const students = await Student.findAll({
      attributes: ["id", "fullname"],
      where: {
        tutorId: req.decoded.id,
      },
    });
    res.json(students);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const student = await Student.findOne({
      where: {
        id: id,
        tutorId: req.decoded.id,
      },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {})
);
router.patch(
  "/",
  asyncHandler(async (req, res, next) => {})
);
router.delete(
  "/",
  asyncHandler(async (req, res, next) => {})
);

module.exports = router;
