const mongoose = require("mongoose");

const connect = () => {
	mongoUrl = 'mongodb://root:example@host:port/voyage?authSource=admin&authMechanism=SCRAM-SHA-1;
 mongoose
    .connect(mongoUrl, { // docker에 올리려면 localhost:27017이 아니라 mongo:27017로 해야한다.

      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true,   // mongoose 6.0 이상부터 사라짐
      //useCreateIndex: true   // mongoose 6.0 이상부터 사라짐
    })
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
