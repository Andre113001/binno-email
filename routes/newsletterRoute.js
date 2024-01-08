const express = require('express');
const router = express.Router();
const nodemailerMiddleware = require('../middlewares/nodeMailerMiddleware');
const newsletterController = require('../controllers/newsletterEmailController');

router.use(nodemailerMiddleware);

router.post('/blog', newsletterController.blogNewsletter);
router.post('/event', newsletterController.eventNewsletter);
router.post('/guide', newsletterController.guideNewsletter);
router.post('/post', newsletterController.postNewsletter);

module.exports = router;
