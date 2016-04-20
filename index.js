var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/view/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.locals.stuff = {
    page : "index",
  }
  res.render(path + "index.ejs");
});

router.get("/index",function(req,res){
  res.locals.stuff = {
    page : "index",
  }
  res.render(path + "index.ejs");
});

router.get("/provice",function(req,res){
  res.locals.stuff = {
    page : "provice",
  }
  res.render(path + "provice.ejs");
});

router.get("/shelfs/:provice",function(req,res,next){
  var provice = req.params.provice;
  res.locals.stuff = {
    page : "provice",
    provice : req.params.provice,
  }
  console.log(provice);
  res.render(path + "shelfs.ejs");
});

router.get("/map/:provice/:type",function(req,res){
  var provice = req.params.provice;
  var type = req.params.type;
  res.locals.stuff = {
    page : "provice",
    provice : req.params.provice,
    type : type,
  }
  res.render(path + "main_map.ejs");
});
// app.user(function(req, res, next) {
  //  res.locals.stuff = {
  //      provice : req.params.provice,
  //  }
//
//    next();
// });

// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });
//
// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });

app.use("/",router);
app.use("/css",express.static(__dirname + "/css"));
app.use("/img",express.static(__dirname + "/img"));
app.use("/ammap",express.static(__dirname + "/ammap"));
// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
