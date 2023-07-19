const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signin.html");
})

app.post("/", (req,res)=>{
    
    if(res.statusCode === 200){
        const firstName =  req.body.fname;
        const lastName =  req.body.lname;
        const email =  req.body.email;

            const data = {
                member : [{
                    email_address: email,
                    status : "subscribed",
                    merge_fields : {
                        FNAME : firstName,
                        LNAME : lastName,
                    }
                }
                ]
            };
        
          
          console.log("First Name :" + firstName);
          console.log("Last Name :" + lastName);
          console.log("Email :" + email);
          res.sendFile(__dirname + "/success.html");
    }else{
        console.log("Error");
        res.sendFile(__dirname + "/fail.html");
    }
    
})

//list-id

//apiKey
//713f30c525d801f4f768150e93ec7d13-us14

app.listen(process.env-PORT || 3000, (req,res)=> {
    console.log("Your server is running on port 3000");
})