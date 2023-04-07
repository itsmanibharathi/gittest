const express = require("express");
const gitControllers = require('./gitControllers')
const Fs = require('fs');
const path = require('path');

const jsonfile = require('jsonfile')
const file = './codestack/React-Testing/data.json'

const { default: simpleGit } = require("simple-git");
// const Git = require("./gitControllers");

const app = express();
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hi')
})
app.get('/clone', (req, res) => {
  new simpleGit('./codestack/')
    .outputHandler((command, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr)
        stdout.on('data', (data) => {
          console.log(data.toString('utf8'));
          res.json({"status":true,msgg:data.toString('utf8')})
        })
      })
      .clone('https://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@github.com/itsmanibharathi/React-Testing')
      res.status(200).json({"status":true})
    });
    
app.get('/update', (req, res) => {
  const val=req.body.mag || "force2";
  new simpleGit('./codestack/React-Testing/')
    .outputHandler((command, stdout, stderr) => {
      stdout.pipe(process.stdout);
      stderr.pipe(process.stderr)
      stdout.on('data', (data) => {
        console.log(data.toString('utf8'));
        res.json({"status":true,msgg:data.toString('utf8')})

      })
      })
      // .clone('https://github.com/itsmanibharathi/React-Testing','.')
      .addConfig('user.name', 'Mani')
      .addConfig('user.email', 'manibharathidct@gmail.com')
      .add('.')
      .commit(val, '.')
      .push()
      res.status(200).json({"status":true})
});

// git.push();
// git.commit("simple-git init commit ");cls
app.get('/edit', (req, res) => {

  if(Fs.existsSync('./codestack/React-Testing/src/data.json')){   
    jsonfile.readFile('./codestack/React-Testing/src/data.json', function (err, obj) {
        if (err) {
            // console.log(err);
            res.send({'status':false,'msg':err})
        }
        console.log('getdata');
        res.send({'status':true,'object':obj})
    })
}
else
res.send({'status':false,'msg':'no page found'})
});
app.post('/edit',(req,res)=>{
  jsonfile.writeFile('./codestack/React-Testing/src/data.json',req.body,function(err,obj){
    if (err) {
        console.log(err);
        res.send({'status':false,'msg':err})
    }
    res.send({'status':true,'object':obj})
})
})