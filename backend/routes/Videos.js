const express = require('express')
const router = express.Router()
const Sentiment = require('sentiment');
const fs = require('fs')
const con= require('../dbcon')
var mysql = require('mysql2');

// get list of videos
router.get('/', (req,res)=>{      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM videodetails", function (err, result, fields) {
          if (err) throw err;
          res.json(result)
        });
      });
})

router.get('/:id/data',(req,res)=>{
    const id=parseInt(req.params.id,10)
    res.json(videos[id])
})

router.get('/products/:id',(req,res)=>{
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM productdetails where id like '"+req.params.id+"'", function (err, result, fields) {
      if (err) throw err;
      res.json(result)
    });
  });
})

router.get('/video/:id', (req, res) => {
    const videoPath = `assets/${req.params.id}.mp4`;
    const videoStat = fs.statSync(videoPath);
    const fileSize = videoStat.size;
    const videoRange = req.headers.range;
    if (videoRange) {
        const parts = videoRange.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(videoPath, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
})

router.post('/comment',(req,res)=>{
    console.log(req.body);
    var a=Object.values(req.body)[0];
    var b=Object.values(req.body)[1];
    con.connect(function(err) {
        if (err) throw err;
        con.query("INSERT INTO commentdetails (`id`, `Comment_txt`) VALUES ('"+b+"','"+a+"')", function (err, result, fields) {
          if (err) throw err;
        });
      });
});

router.post('/analyze',(req,res)=>{
    var sent=new Sentiment();
    var vidscore=0;
    var name=Object.values(req.body)[0];
    con.connect(function(err) {
        if (err) throw err;
        if(vidscore==0){
        con.query("SELECT "+"Comment_txt"+" FROM commentdetails where id like '"+name+"'", function (err, result, fields) {
          if (err) throw err;
          result.forEach(result=>{
            var sco=sent.analyze(Object.values(result)[0]);
            vidscore=vidscore+sco.comparative;
            console.log(sco);
            
          })
          con.query("UPDATE videodetails SET vidscore = '"+vidscore+"' WHERE (`id` = '"+name+"');", function (err, result, fields){
              if (err) throw err;
          });
          con.query("SELECT * FROM videodetails ORDER BY vidscore DESC;", function (err, result, fields){
              if (err) throw err;
          });
        })}
    });

    });
router.get('/comments/:id',(req,res)=>{
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT "+"Comment_txt"+" FROM commentdetails where id like '"+req.params.id+"'", function (err, result, fields) {
          if (err) throw err;
          console.log(result)
          res.json(result)
        });
      });
});
module.exports = router;