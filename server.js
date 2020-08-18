const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

const mongoose = require('mongoose');
app.use(express.static('public'));
const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/toDo";



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const User = mongoose.model("User", {
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


app.post('/register', function (req, res) {
    console.log("cats")
    const { body } = req;
    console.log(body)
    const { email, firstname, lastname, img, password } = body;

    console.log(lastname, password)

    User.findOne({ userEmail: email,lastName: lastname, password: password }, function (err, docs) {
        if (docs != null) {
            let answer = 'already exist'
            res.send({ answer: answer })
        }
        else {
            const newUser = new User({ userEmail: email, firstName: firstname, lastName: lastname, imgUrl: img, password: password })
            newUser.save()
            res.send({ answer: "Regsiter Completed" })
        }

    })

})


app.post('/login-user', function (req, res) {
    const {email, lastname, password } = req.body;
    console.log(lastname, password)
    let validAdmin = false;
    User.findOne({ userEmail:email , lastName: lastname }, function (err, docs) {
        if (docs != null) {
            let validAdmin = true;
            console.log('Found')
            res.send({ validAdmin: validAdmin, id: docs._id })
        }
        else {
            res.send({ validAdmin: validAdmin })
        }

    })
});


app.get('/ToDo', async (req, res) => {
    // const {lastname}=req.body;
    const lastName = 'biadsy'
    const tasks = await Task.aggregate(
        [{
            $match: {
                "user.lastName":lastName
            }
            
           },
        {
            $group: {
                
                _id:'$user.firstName',
                tasks: {
                    $push: "$$ROOT",
                }
            }
        },
        ]
    )
    console.log(tasks);
})















const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(` port is listen to ${port}  `)
})