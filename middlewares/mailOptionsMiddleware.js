const mailOptionsMiddleware = (receiver, subject, content) => ({
    from: 'startwithbinno@gmail.com',
    to: receiver,
    subject,
    html: content,
});

module.exports = mailOptionsMiddleware;
