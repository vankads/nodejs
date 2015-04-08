var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('cart', {
    	products:[
    		{ title : 'Vanilla Cake',price : 'Rs. 991',id: '1234',qty:'1'},
    		{ title : 'Black Forest Cake',price : 'Rs. 992',id: '1235',qty:'2'},
			{ title : 'Chocolate Cake',price : 'Rs. 993',id: '1236',qty:'3'},
			{ title : 'Mixed Fruit Cake',price : 'Rs. 994',id: '1237',qty:'4'},
			{ title : 'Pineapple Cake',price : 'Rs. 995',id: '1238',qty:'5'}
    	]
    }

    );
});

router.post('/', function(req,res,next){
    var id=req.body.id;
    res.end("Item added to cart successfully");
});

module.exports = router;
