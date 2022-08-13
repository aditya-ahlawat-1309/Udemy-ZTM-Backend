const express = require('express');
const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req,res,next) => {
    console.log('ip address:', req.ip);
    // localhost => 127.0.0.1 ipv6
    // ::1 ipv4 for localhost
    next();
});

friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getByFriendsId);

module.exports = friendsRouter;
