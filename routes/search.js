var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('search-results', {
    	helpers: {
    		newRow : function(index){
    			if(index % 4 == 0){
    				console.log("index is "+index);
    				return " ";;
    			}    				
    			else{
    				console.log("index value is "+index);
    				return "";
    			}
    				
    		}
    	},
    	products:[
    		{ title : 'Vanilla Cake',price : 'Rs. 1000',id: '1234'},
    		{ title : 'Black Forest Cake',price : 'Rs. 1500',id: '1235'},
			{ title : 'Chocolate Cake',price : 'Rs. 1200',id: '1236'},
			{ title : 'Mixed Fruit Cake',price : 'Rs. 900',id: '1237'},
			{ title : 'Pineapple Cake',price : 'Rs. 800',id: '1238'}
    	]
    }

    );
});

module.exports = router;
