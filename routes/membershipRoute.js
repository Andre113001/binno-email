const express = require('express');
const router = express.Router();
const nodemailerMiddleware = require('../middlewares/nodeMailerMiddleware');
const emailController = require('../controllers/MembershipEmailController');

router.use(nodemailerMiddleware);

router.post('/approved', emailController.approved);
router.post('/ongoing/:email', emailController.ongoing);

module.exports = router;
