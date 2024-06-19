// js to pug
const ep = require('express')
const app = ep()

app.set('view engine', 'pug')

app.get('/', function (req, res) {

    res.render(__dirname + "/p3", {
        message: "Hello from Express!",
        name: "LJU",
        id: 456
    })

})

app.listen(3030)
// write a express js script to load student form using pug file which contains foll fields name ,email, course
// radio button ce,it,cse once a form  submit data should be displayed in pug file in which 