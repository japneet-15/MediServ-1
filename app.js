
const express = require("express");
const bodyPareser = require("body-parser");
const mysql = require("mysql2");
const res = require("express/lib/response");
const app=express();


app.use(bodyPareser.urlencoded({extended: true}));

app.use(express.static("public"));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "29october",
    database: "mediserv"
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});
app.get("/seller",(req,res)=>{
    res.sendFile(__dirname+"/signup-doc.html");
});

app.get("/customer",(req,res)=>{
    res.sendFile(__dirname+"/signup-patient.html");
});

app.get("/sellerhome",(req,res)=>{
    res.sendFile(__dirname+"/sellerhome.html");
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html");
})
app.get("/medicine",(req,res)=>{
    res.sendFile(__dirname+"/medicine.html");
})

app.get("/store",(req,res)=>{
    res.sendFile(__dirname+"/store.html");
})
app.get("/land",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/land",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/store",(req,res)=>{
    res.sendFile(__dirname+"/store.html");
});
app.post("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});
app.post("/seller",(req,res)=>{
    const name=req.body.user;
    const email=req.body.email;
    const sellerid=req.body.sellerid;
    const pincode=req.body.pincode;
    const locality=req.body.locality;
    const city = req.body.city;

    db.query("Insert into seller (name, email, sellerid, pincode, locality, city) VALUES (?,?,?,?,?,?)",
    [name,email,sellerid,pincode,locality,city],
    (err,result)=>{
        if(!err){
            res.send("values saved");
        } else console.log(err);
    })
 
});
app.post("/",(req,res)=>{
    const email_id=req.body.email;
    const cust_name=req.body.name;
    const subject=req.body.subject;
    const message=req.body.desc;
    
    db.query("Insert into contact (email_id,cust_name,subject,message) VALUES (?,?,?,?)",
    [email_id,cust_name,subject,message],
    (err,result)=>{
        if(!err){
            res.send("values saved");
        } else console.log(err);
    })
    
});
app.post("/customer",(req,res)=>{
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const username=req.body.uname;
    const phoneno=req.body.pno;
    const email=req.body.email;
    const password=req.body.pass;
    const pincode=req.body.pincode;
    const locality=req.body.locality;
    const city = req.body.city;

    db.query("Insert into customer (firstname, lastname, username, phoneno, email,password, pincode, locality, city) VALUES (?,?,?,?,?,?,?,?,?)",
    [firstname, lastname, username, phoneno, email,password, pincode, locality, city],
    (err,result)=>{
        if(!err){
            res.sendFile(__dirname+"/home.html");
        } else console.log(err);
    })
    
});

app.post("/sellerhome",(req,res)=>{
    const medicine_id=req.body.MedicineID;
    const medicine_name=req.body.mname;
    const medicine_price=req.body.Price;
    const medicine_tag=req.body.Tags;
    const medicine_description=req.body.desc;
  

    db.query("Insert into medicine (medicine_id,medicine_name,medicine_price,medicine_tag,medicine_description) VALUES (?,?,?,?,?)",
    [medicine_id,medicine_name,medicine_price,medicine_tag,medicine_description],
    (err,result)=>{
        if(!err){
            res.send("values saved");
        } else console.log(err);
    })
    
});

app.post("/contact",(req,res)=>{
    const email_id=req.body.email;
    const cust_name=req.body.name;
    const subject=req.body.subject;
    const message=req.body.desc;
    
    db.query("Insert into contact (email_id,cust_name,subject,message) VALUES (?,?,?,?)",
    [email_id,cust_name,subject,message],
    (err,result)=>{
        if(!err){
            res.send("values saved");
        } else console.log(err);
    })
    
});

app.post("/medicine",(req,res)=>{
    db.query("Select * from medicine")
});

app.listen(3000, function(){
    console.log("app started at localhost 3000");
});