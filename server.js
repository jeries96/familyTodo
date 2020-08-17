const express=require('express')
const app=express()

app.use(express.static('public'));

const ToDoUser = mongoose.model("ToDoUser", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})
const Task = mongoose.mode("Task", {
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
        const { body } = req;
        console.log(body)
        const { email,firstname,lastname,img,password } = body;
      
        let result = false
        ToDoUser.findOne( {lastname:lastname , password:password } , function(err, docs) {
            if ( docs==null ) {
                 result = true
        }
            if(result){
              let answer=user.password
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