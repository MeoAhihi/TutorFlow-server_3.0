const express = require("express");
const router = express.Router();
const { Student } = require("../models");
const { decodeJwtMiddleware } = require("../middlewares/decodeToken");
const asyncHandler = require("express-async-handler");

router.use(decodeJwtMiddleware);
router.get(
  "/",
    asyncHandler(async (req, res, next) => {
      
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
