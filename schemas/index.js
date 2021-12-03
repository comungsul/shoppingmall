const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/voyage", {
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