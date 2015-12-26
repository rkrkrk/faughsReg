var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("///");
  res.send('respond with a resource');
});

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {

    var db = req.db;
    console.log("dbdbdb", collection);
    var collection = db.get('faughstest');
    collection.find({},{},function(e,docs){
    	console.log("colltcion collection", collection);
        res.json(docs);
    });
});


router.get('/userlist', function(req, res) {

    var db = req.db;
    console.log("dbdbdb", collection);
    var collection = db.get('faughstest');
    collection.find({},{},function(e,docs){
    	console.log("colltcion collection", collection);
        res.json(docs);
    });
});

router.get('/dbs',function(req,res){
  var db = req.db;
  var dbAdmin = db.admin();
  // db.listDatabases(function(e,dbs){

  //     res.json(dbs);
  // });
   dbAdmin.driver._native.command(
      { "listDatabases": 1 },
      function(err,dbs) {
        res.json(dbs);
    });
});

router.get('/collections',function(req,res){
  var db = req.db;
  // db.collectionNames(function(e,names){
  //   res.json(names);
  // })
  db.driver._native.command(
      { "listCollections": 1 },
      function(err,names) {
         res.json( names.cursor.firstBatch.map(function(el) {
          return el.name;
        }));
    });
});

router.get('/query',function(req,res){
  var db = req.db;
  var collection = db.get('faughstest');
  console.log("  fs fsd fsf");
  console.log("request",req.body);
  collection.find({Surname: "Mahon"},{limit:20},function(e,docs){

    res.json({number:docs.length, docs:docs});
  })
});

router.post('/query',function(req,res){
  var db = req.db;
  var collection = db.get('faughstest');
  console.log("  fs fsd fsf");
  console.log("post request",req.body);
  collection.find(req.body,{limit:20},function(e,docs){

    res.json({number:docs.length, docs:docs});
  })
});


router.get('/:name',function(req,res){
	console.log("bbbbb");
  var db = req.db;
  var collection = db.get('faughstest');
  collection.find({Surname: req.params.name},{limit:20},function(e,docs){

    res.json({number:docs.length, docs:docs});
  })
});




module.exports = router;
