const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//...
//...

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine',  'ejs')
app.post('/', function(req,res){
    res.render('index');
    console.log(req.body.city);
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!' )
})
