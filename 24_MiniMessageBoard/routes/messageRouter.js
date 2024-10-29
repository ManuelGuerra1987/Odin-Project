const { Router } = require("express");
const { getMessage } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get("/:messageId", getMessage);


module.exports = messageRouter;