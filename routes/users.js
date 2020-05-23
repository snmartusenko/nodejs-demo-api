const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../auth/VerifyToken');

router.post('/register', UserController.register);

router.get('/', verifyToken, UserController.getAll);
router.get('/:id', verifyToken, UserController.getOne);
router.put('/:id/update', verifyToken, UserController.update);
router.delete('/:id/delete', verifyToken, UserController.delete);

module.exports = router;
