const ep = require('express')
const app = ep()

app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render(__dirname + "/p1")
})
app.listen(5555)