const mailOptionsMiddleware = (receiver, subject, content) => ({
    from: 'startwithbinno@gmail.com',
    to: receiver, // This should be a valid email address
    subject: subject,
    html: content,
});

module.exports = mailOptionsMiddleware;
