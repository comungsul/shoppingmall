const express = require('express')
const app = express()
const port = 8002

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index');  // ejs 파일 적용
})

app.get('/detail', (req, res) => {
  res.render('detail')  // ejs 파일 적용
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public')); // 이미지같은 정적파일 이용

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})