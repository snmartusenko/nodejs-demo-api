const express = require('express');
const router = express.Router();
const EmployeController = require('../controllers/EmployeController');
const verifyToken = require('../auth/VerifyToken');

router.all('*', verifyToken);

router.post('/create', EmployeController.create);
router.get('/', EmployeController.getAll);
router.get('/:id', EmployeController.getOne);
router.put('/:id/update', EmployeController.update);
router.delete('/:id/delete', EmployeController.delete);

module.exports = router;
