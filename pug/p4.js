
const ep = require('express')
const app = ep()

app.set('view engine', 'pug')

app.get('/', function (req, res) {

    res.render(__dirname + "/form")
})
app.get('/data', function (req, res) {
    {
        res.render(__dirname + "/form_output", {
            name: req.query.name,
            email: req.query.email,
            course: req.query.course
        })
    }
})
app.listen(9999)