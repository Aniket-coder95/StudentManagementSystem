const express = require('express');
const router = express.Router();
const db = require('../db/connection')
const bcrypt = require('bcrypt')


//middleware
const middleware = (req,res,next) => {
    console.log('hey im middleware');
    next();
};


router.get('/', (req, res)=>{
    res.send('hello from root router');
    db.query("SELECT * FROM users",function(error,rows,fields){
        if(error){
            console.log('wrong query');
        }else{
            console.log('query is correct');
            console.log(rows);
        }
    });
});


router.post('/signup',(req, res)=>{
    const salt =bcrypt.genSaltSync();
    var n = req.body.name;
    var e = req.body.email;
    var p = bcrypt.hashSync(req.body.password,salt)
    console.log('pass=',p)
    var c= req.body.contact;
    var r = req.body.role;
    var sql = "INSERT INTO users(contact,email,name,password,role) VALUES(?,?,?,?,?)"; 
    db.query(sql,[c,e,n,p,r],(error,result)=>{
        if(error) console.log('got error in insertion/post');
        console.log('inserted');
    })
    
});
router.post('/signin',(req, res)=>{
    // const x = 'hey this is a test message'; 
    // res.send(x);

    
    db.query("SELECT email,role FROM users WHERE email=?",req.body.email,function(error,rows,fields){
        if(error){
            console.log('error');
        }
        else{
            const email =(rows[0].email === req.body.email)
            // console.log(rows[0].email , req.body.email)
            const role = (rows[0].role === req.body.role)
            if(!email){
                console.log('cant find user')
            }else if(!role){
                console.log('this user not having this role')
            }else{

                //const e = req.bod.password;
                db.query("SELECT password FROM users WHERE email = ?",req.body.email,function(error,rows,fields){
                    if(bcrypt.compareSync(req.body.password,'$2b$10$wZIlJPLypSQcACz5HJc7u.rmB5J1Rb4YqotnhhuUx3gdRvl.Pkch2')){
                        if(req.body.role === 'Student'){
                            console.log('Student')
                        }else if(req.body.role === 'Student'){
                            console.log('Student')
                        }else if(req.body.role === 'Student'){
                            console.log('Student')
                        }
                    }else{
                        console.log('login credentials are wrong')
                    }
                });

            }
        }
    });

    
    
});













router.post('/user',(req,res)=>{
    const salt =bcrypt.genSaltSync()
    const hashedp =bcrypt.hashSync(req.body.password,salt)
    const check = {
        name:req.body.name,
        password:hashedp
    }
    console.log(check)
    //console.log(salt)
})
router.post('/user/login',(req,res)=>{
    const check =('erf' === req.body.name)
    if(!check){
        console.log('cant find user')
    }
    else{
        try {
            if(bcrypt.compareSync(req.body.password,'$2b$10$a/tDU2kQ/C6ewYJLBl.XFOug7vyNi0b.cR1LAqHp0PU7.qLnF3A6W')){
                console.log('login success')
            }else{
                console.log('login not success')
            }
        } catch {
            console.log('error catched')
        }
    }
})








module.exports = router;