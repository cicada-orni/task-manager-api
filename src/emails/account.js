const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ranafaisall04@gmail.com',
        subject: 'This is for joining in',
        text: `Welcome to the app, ${name}. Let me know how you will get along with the app`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ranafaisall04@gmail.com',
        subject: 'Cancellation Email',
        text: `It's very hard to say goodbye to you, ${name}. Hope to see you again`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}