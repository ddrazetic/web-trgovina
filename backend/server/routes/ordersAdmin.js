const express = require('express');
const router = express.Router();
const OrdersAdminController = require('../controller/OrdersAdminController');

router.get('/', OrdersAdminController.index)
router.get('/:id', OrdersAdminController.show)
router.delete('/:id', OrdersAdminController.delete)
router.put('/:id', OrdersAdminController.edit)

module.exports = router;