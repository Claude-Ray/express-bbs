'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');

module.exports = versionDir => {
  const router = express.Router();
  fs.readdirSync(versionDir).forEach(file => {
    require(path.join(versionDir, file))(router);
  });
  return router;
};
