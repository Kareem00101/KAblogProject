// What we require
const express = require('express');
//const axios = require('axios');
const aRouter = express.Router();
const aController = require('../controllers/aController')

// The axios routes
aRouter.get('/', aController.axios_index);


// exporting
module.exports = (aRouter);