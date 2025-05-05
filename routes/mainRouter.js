const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUsersById,
  createUsers,
  deleteUsers,
  updateUsers,
} = require("../controllers/users");

router.get("/", getAllUsers);
router.get("/:id", getUsersById);
router.post("/", createUsers);
router.delete("/:id", deleteUsers);
router.put("/:id", updateUsers);

module.exports = router;
