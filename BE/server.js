const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors())
let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(bodyParser.json());
let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: 'true',
  port: '465',
  auth: {
    user: 'akashjitnayak89@gmail.com', // must be Gmail
    pass: 'mwuwmrppyipqkcqw'
  }
});

let maillist = [
  'nayakakashjit@gmail.com',
  'saha.santanu0217@gmail.com',
  'tusarkanta9@gmail.com',
  'santanupadhy1993@gmail.com',
];

app.post('/sendFormData', cors(corsOptions), (req, res) => {
  console.log('ReqBody----------------->', req.body);
  let mailOptions = {
    from: 'akashjitnayak89@gmail.com',
    to: maillist, // must be Gmail
    cc:`${req.body.name} <${req.body.email}>`,
    subject: 'Sending Email using Node.js',
    html: `
            <table style="width: 100%; border: none">
              <thead>
                <tr style="background-color: #000; color: #fff;">
                  <th style="padding: 10px 0">Name</th>
                  <th style="padding: 10px 0">E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style="text-align: center">${req.body.name}</th>
                  <td style="text-align: center">${req.body.email}</td>
                </tr>
              </tbody>
            </table>
          `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!',

      })
    }
  });

});

app.listen(3000, () => {
  console.log("server run!!!");
});
