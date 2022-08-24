const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 80;

 
//  EXPRESS SPECIFIC STUFF --:>
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF --:>
app.engine('pug', require('pug').__express); //Code from StackOverflow
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

//ENDPOINT ---:>
app.get('/', (req,res) =>{
   
    const params ={ }
    res.status(200).render('home.pug',params);
});
app.get('/contact', (req,res) =>{
   
    const params ={ }
    res.status(200).render('contact.pug',params);
});
app.get('/about', (req,res) =>{
   
    const params ={ }
    res.status(200).render('about.pug',params);
});
app.get('/info', (req,res) =>{
   
    const params ={ }
    res.status(200).render('info.pug',params);
});
app.get('/rules', (req,res) =>{
   
    const params ={ }
    res.status(200).render('rules.pug',params);
});
// Backend work
app.post('/contact' , (req,res)=>{
    // console.log(req.body);
    name1 = req.body.name;
    email = req.body.email;
    phone = req.body.phone;
    age = req.body.age;
    desc = req.body.desc;
    // text1 = req.body.text;
    let OutputToWrite = (`The name of the person is ${name1}.His/Her email :- ${email} and His/Her Contact number is :- ${phone}. He/Her is ${age} years old. He/Her is asking that :  ${desc}. ` );
    fs.writeFileSync("output.txt", OutputToWrite);
    const params ={'message': 'The form has been submitted successfully'};
    res.status(200).render('contact.pug',params);

});


//START THE SERVER --:>
app.listen(port,()=>{
    console.log(`The server is listening on Port ${port}`);
    
});