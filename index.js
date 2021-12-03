const express = require('express')
const app = express()
const port = 8002

const connect = require("./schemas");
connect();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]);

app.get('/', (req, res) => { // localhost 첫 페이지
    res.send('go to goods <a href="/goods/list">list</a>')
  })

//ejs templete file
app.get('/goods/list',(req, res, next)=>{ // http://localhost:3000/home
    res.render('index');  //ejs 파일
  })
  
  // detail 페이지 구현
  app.get('/detail',(req, res, next)=>{ // http://localhost:3000/detail
    res.render('detail');
  })

app.use('/goods',goodsRouter); // goods 라우터

app.get('/mongodb', async (req, res) => {
    await mongoose.connect('mongodb://localhost/voyage', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: true,   // mongoose 6.0 이상부터 사라짐
        //useCreateIndex: true   // mongoose 6.0 이상부터 사라짐
    });

    const { Schema } = mongoose;
    const goodsSchema = new Schema({
        goodsId: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        thumbnailUrl: {
            type: String
        },
        category: {
            type: String
        },
        price: {
            type: Number
        }
    });

    let Goods = mongoose.model("Goods", goodsSchema)

		await Goods.create({
        goodsId: 46,
        name: "맛있는 저녁",
        thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRQ3NDs5bjulPr3JaXJzP7DH3Y-71WX9wzQ7N8XD9KLUHjT6L&usqp=CAc",
        category: "food",
        price: 15000
    });

	res.send('ok');
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public')); // 이미지같은 정적파일 이용

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})