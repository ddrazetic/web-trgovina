const express = require('express');
const router = express.Router();
const ArticlesController = require('../controller/ArticlesController')

router.get('/', ArticlesController.show);
router.post('/', ArticlesController.store);
router.put('/:id', ArticlesController.edit)
router.delete('/:id', ArticlesController.delete)

module.exports = router;