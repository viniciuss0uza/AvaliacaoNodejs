const express = require('express');
const router = express.Router();
const controller = require('../controllers/api');

router.get('/operacoes', controller.getOperacoes);
router.post('/somar', controller.somar);
router.post('/subtracao', controller.subtracao);
router.post('/multiplicacao', controller.multiplicacao);
router.post('/divisao', controller.divisao);
router.post('/potencia', controller.potencia);
router.post('/sqrt', controller.sqrt);

module.exports = router;