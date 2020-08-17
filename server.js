const express=require('express')
const app=express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

const mongoose = require('mongoose');
app.use(express.static('public'));
const url = "mongodb+srv://jeries:g1g2g3g4g5@cluster0.sb6dm.mongodb.net/test";


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const ToDoUser = mongoose.model("ToDoUser", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})
const Task = mongoose.model("Task", {
    user: {
        userEmail: String,
        firstName: String,
        lastName: String,
        imgUrl: String,
        password: String
    },
    taskTitle: String,
    taskContent: String,
    done: Boolean
})


    app.post('/register', function (req, res)  {
        console.log("cats")
        const { body } = req;
        console.log(body)
        const { email,firstname,lastname,img,password } = body;
      
        let result = false
        ToDoUser.findOne( {lastname:lastname , password:password } , function(err, docs) {
            if ( docs==null ) {
                 result = true
        }
            if(result){
              let answer='meaw'
              res.send({answer:answer})
            }
            else{
               const newUser= new ToDoUser ({ email: email, firstname:firstname,lastname:lastname ,img:img,password: password })
               newUser.save()
               res.send({ answer: "Regsiter Completed" })
            }
        
      })
    }
    )


app.post('/login-user', function (req, res) {
    const { lastname, password } = req.body;
    console.log(name,password)
    let validAdmin=false;
    ToDoUser.findOne( {lastname:lastname , password:password } , function(err, docs) {
        if ( docs!=null ) {
            let validAdmin=true;
            res.send( {validAdmin:validAdmin , id:docs._id})
        } 
        else {
            res.send({validAdmin:validAdmin})
        }

    })
});


app.get('/tasks' ,function (req, res) {
    Task.find({} , function(err, doc) {
        res.send(doc)
    })
})














const port=process.env.PORT || 3000

app.listen(port , ()=>{
    console.log(` port is listen to ${port}  `)
})