const express = require('express');
const router = express.Router();
const OrdersController = require('../controller/OrdersController');
const passport = require('passport');

router.post('/', OrdersController.store);
router.get('/all', OrdersController.showAll)
router.get('/', OrdersController.index)
router.get('/:id', OrdersController.show)
router.delete('/:id', OrdersController.delete)
router.put('/:id', OrdersController.edit)

module.exports = router;