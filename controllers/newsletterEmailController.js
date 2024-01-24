// On each content or paragraph it must limit the words to 90

const path = require('path');
const ejs = require('ejs');
const mailOptionsMiddleware = require('../middlewares/mailOptionsMiddleware');

const subject = `BiNNO Newsletter`;

function getCurrentDateInPhilippines() {
    const currentDate = new Date();
    
    // Set the time zone to Asia/Manila (Philippines)
    const options = {
        timeZone: 'Asia/Manila',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return currentDate.toLocaleString('en-PH', options);
}
const publishedDate = getCurrentDateInPhilippines();

const blogNewsletter = async(req, res) => {
    const {receiver, memberName, image, heading, content, blogId} = req.body;
    
    try {
        const templatePath = path.join(__dirname, '../views/Newsletter/blog.ejs');
        await ejs.renderFile(templatePath, { memberName, image, heading, content, publishedDate, blogId }, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                const mailOptions = mailOptionsMiddleware(receiver, subject, data);

                req.transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.error(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).json(info.response);
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const eventNewsletter = async(req, res) => {
    const {receiver, memberName, image, heading, content, date, eventId} = req.body;

    try {
        const templatePath = path.join(__dirname, '../views/Newsletter/event.ejs');
        await ejs.renderFile(templatePath, { memberName, image, heading, content, publishedDate, date, eventId }, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                const mailOptions = mailOptionsMiddleware(receiver, subject, data);

                req.transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.error(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).json(info.response);
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const guidesNewsletter = async(req, res) => {
    const {receiver, memberName, image, heading, content, guideId} = req.body;

    try {
        const templatePath = path.join(__dirname, '../views/Newsletter/guide.ejs');
        await ejs.renderFile(templatePath, { memberName, image, heading, content, publishedDate, guideId }, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                const mailOptions = mailOptionsMiddleware(receiver, subject, data);

                req.transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.error(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).json(info.response);
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const postNewsletter = async(req, res) => {
    const {receiver, memberName, image, content, postId} = req.body;
    
    try {
        const templatePath = path.join(__dirname, '../views/Newsletter/post.ejs');
        await ejs.renderFile(templatePath, { memberName, image, content, publishedDate, postId }, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                const mailOptions = mailOptionsMiddleware(receiver, subject, data);

                req.transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.error(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).json(info.response);
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    
};

module.exports = {
    blogNewsletter,
    eventNewsletter,
    guidesNewsletter,
    postNewsletter
}