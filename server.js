const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.port || 5000;

app.use(express.static('Public'));
app.use("/static", express.static('./static/'));
app.use(express.json())

app.get('/',(req,res) =>{
    res.send('hello!');
})

app.post('/', (req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'developerraymond6@gmail.com',
            pass: 'Bomboclatman#256'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'developerraymond6@gmail.com',
        subject: `Message from ${req.body.mail}: ${req.body.phonenumber}`,
        text: req.body.msg
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:'+info.response);
            res.send('success');
        }
    })
})

app.listen(PORT,()=>{
    console.log('server is running');
})