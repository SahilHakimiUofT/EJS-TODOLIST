const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const daysOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday',
'Saturday'];

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
  var today = new Date();
  var currentDay = today.getDay();
  var day = daysOfWeek[currentDay];
  res.render('list',{kindOfDay: day});
});

app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
});
