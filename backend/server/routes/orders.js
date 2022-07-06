const express = require('express');
const router = express.Router();
const OrdersController = require('../controller/OrdersController');

router.post('/', OrdersController.store);
router.get('/', OrdersController.index)
router.get('/:id', OrdersController.show)
router.delete('/:id', OrdersController.delete)
router.put('/:id', OrdersController.edit)

module.exports = router;