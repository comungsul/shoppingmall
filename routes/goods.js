var express = require('express');
var router = express.Router();
 
router.get('/list', function(req, res, next) { // 상품 리스트 페이지
    res.render('index');
});

router.get('/detail', function(req, res, next) { // 상품 상세설명 페이지
    res.render('detail');
});
  
module.exports = router;