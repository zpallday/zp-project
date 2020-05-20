const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userFunc = require("../models/userModel");
const db = require("../config/dbConfig");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  userFunc.getAll().then(users => {
    res.status(200).json(users);
  });
});

router.post("/register", userFunc.hashPassword, (req, res) => {
  const newUser = req.body;
  userFunc
    .addNewUser(newUser)
    .then(newU => {
      res.status(200).json(newU);
    })
    .catch(error => {
      res.status(500).json({ Error: "Did not add user" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const username = req.body.username
  userFunc
    .findUser(username)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ Error: "Something's gone horribly wrong" });
    });
});

router.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  db("users")
    .where({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = userFunc.generateToken(user);
        res.status(200).json({ token: token, id: user.id  });
      } else {
        res.status(401).json({ Error: "password fail" });
      }
    })

    .catch(error => {
      res.status(500).json({ Error: "Didn't get past findUser" });
    });
});

module.exports = router;
