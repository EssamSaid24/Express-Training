const express = require('express');
const friendController = require("../controllers/friends.controller");

const friendsRouter = express.Router()

friendsRouter.post("/", friendController.postFriend)
friendsRouter.get("/", friendController.getFriend)
friendsRouter.get("/:id", friendController.getFriendId)

module.exports = friendsRouter