const express = require('express')
const router = express.Router()
const StoreController = require('../controllers/stores');

router.get('/', StoreController.getStores)
router.post('/', StoreController.addStore)

module.exports = router;