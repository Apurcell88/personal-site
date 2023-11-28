const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'apurcell88@gmail.com',
        pass: 'Cubs1988!',
    },
  });

  const mailOptions = {
    from: 'apurcell88@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send(err.toString());
    }

    res.status(200).send(`Email sent: ${info.response}`)
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});