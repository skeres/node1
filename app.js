const express = require('express');
var router = express.Router();
const app = express()
const port = 3000
const path = require('path');



app.get('/test',(req,res)=> {
    console.log('root/test url');
    res.json({"root/test":"ok"})
})

app.get('/',function(req,res){
    console.log('root url');
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });


app.get('/known/',(req,res)=> {
    console.log('root url');
    let x=req.query.ean;
    console.log('param value is '+x);    
    if (x==1) {
        //res.json({"knownOfPhenix":"ok"});
        setTimeout(() => { res.json({"knownOfPhenix":"ok"})  }, 2000);
    } 

    if (x==2) {
        setTimeout(() => { res.json({"knownOfPhenix":"KO"})  }, 3000);
    } 


    if (x==3) {
        //res.json({"knownOfPhenix":"ok"});
        setTimeout(() => { res.json({"knownOfPhenix":"ok"})  }, 1000);
    } 

    //other
    //res.json({"knownOfPhenix":"can't operate"});


})


app.listen(port, () => {
  console.log(`running app listening at http://localhost:${port}`);
})


function maLog() {
    console.log();
}



