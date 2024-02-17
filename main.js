const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var user = [
    { name: 'Kalpesh', email: 'kalpesh@gmail.com', address: 'Surat', gender: 'Male', course: 'Full Stack', hobby: 'Gaming,Writing,Traveling' },
    { name: 'Manish', email: 'manish@gmail.com', address: 'Vadodara', gender: 'Male', course: 'Full Stack', hobby: 'Reading,Gaming,Traveling' },
    { name: 'Umesh', email: 'umesh@gmail.com', address: 'Delhi', gender: 'Male', course: 'Full Stack', hobby: 'Reading,Gaming,Writing' },
    { name: 'Rajesh', email: 'rajesh@gmail.com', address: 'Mumbai', gender: 'Male', course: 'Full Stack', hobby: 'Reading,Writing,Traveling' },
    { name: 'Mahesh', email: 'mahesh@gmail.com', address: 'Rajkot', gender: 'Male', course: 'Full Stack', hobby: 'Reading,Gaming,Writing' }
]

app.get('/', function (req, res) {
    res.render('../view/pages/Home')
})
app.get('/about', function (req, res) {
    res.render('../view/pages/About')
})
app.get('/user', function (req, res) {
    res.render('../view/pages/User', { User: user })
})
app.get('/adduser', function (req, res) {
    res.render('../view/pages/AddUser')
})
app.post('/adduser', function (req, res) {
    user.push(req.body)
    res.redirect('/user')
})
app.get('/updateuser/:id', function (req, res) {
    var id = req.params.id
    var student = user[id]
    res.render('../view/pages/UpdateUser', { user: student })
})
app.post('/updateuser/:id', function (req, res) {
    var id = req.params.id;
    user[id] = req.body
    res.redirect('/user')
})
app.get('/deleteuser/:id', function (req, res) {
    var id = req.params.id
    user.splice(id, 1)
    res.redirect('/user')
})
app.listen(8000, () => {
    console.log('App is running on port 8000..');
});
