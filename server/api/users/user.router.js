const router = require("express").Router();

//importing auth middleware
const auth = require("../middleware/auth");

const {
  createUser,
  getUsers,
  getUserById,
  login,
  getUserByIdNumber,
} = require("./user.controller");

//route new user to be registered using createUser controller
router.post("/", createUser);
router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/id", getUserByIdNumber);

//route existing user to be verified using auth middleware and getUserById
// router.get("/", auth, getUserById);

//route existing user to be login using login controller
router.post("/login", login);

module.exports = router;
