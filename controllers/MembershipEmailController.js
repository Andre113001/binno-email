const path = require('path');
const ejs = require('ejs');
const mailOptionsMiddleware = require('../middlewares/mailOptionsMiddleware');

const approved = async (req, res) => {
    const { receiver, accesskey, tmpPassword  } = req.body;
    const subject = "Congratulations!"
    try {
        const templatePath = path.join(__dirname, '../views/MemberApplication/approved.ejs');
        await ejs.renderFile(templatePath, { receiver, accesskey, tmpPassword }, (err, data) => {
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

const ongoing = async (req, res) => {
    const {email} = req.params;
    const receiver = email;
    const subject = "Process Ongoing..."
    try {
        const templatePath = path.join(__dirname, '../views/MemberApplication/ongoing.ejs');
        await ejs.renderFile(templatePath, { receiver }, (err, data) => {
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
}

module.exports = {
    approved,
    ongoing
};
