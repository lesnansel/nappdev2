const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController')
router.get('/', hp.nam);
router.get('/nem', hp.nem);
router.get('/nim', hp.nim);
router.get('/nom', hp.nom);
router.get('/nuum', hp.nuum);

module.exports = router;