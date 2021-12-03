const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 8002

const connect = require("./schemas");
connect();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const goodsRouter = require('./routes/goods');

app.get('/', (req, res) => { // localhost 첫 페이지
    res.send('go to goods <a href="/list">list</a>')
  })

app.use('/',goodsRouter); // goods 라우터

app.get('/mongodb', async (req, res) => {
    await mongoose.connect('mongodb://localhost/voyage', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: true,   // mongoose 6.0 이상부터 사라짐
        //useCreateIndex: true   // mongoose 6.0 이상부터 사라짐
    });

	res.send('ok');
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public')); // 이미지같은 정적파일 이용

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})