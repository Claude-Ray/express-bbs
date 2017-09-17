'use strict';

const path = require('path');
const express = require('express');

const createRouter = require('../tools/create-router');

const router = module.exports = express.Router();

const v1 = createRouter(path.join(__dirname, 'v1'));

router.use('/api/v1', v1);
