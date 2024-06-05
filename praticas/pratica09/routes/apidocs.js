const express = require('express');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('yaml');

const router = express.Router();
const file = fs.readFileSync('./swagger.yaml', 'utf-8');
const swaggerDocument = yaml.parse(file);

router.use('/', swaggerUI.serve);

router.get('/', swaggerUI.setup(swaggerDocument));

module.exports = router;