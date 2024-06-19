const ep = require('express')
const app = ep()

app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render(__dirname + "/p2")
})
app.get('/data', function (req, res) {
    res.set('Content-type', 'text/html')
    res.write("<h1 style='color:green'>Welcome " + req.query.name + " " + req.query.email + "</h1>")
    res.send()

})
app.listen(1000)

