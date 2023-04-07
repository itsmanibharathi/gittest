const { exec } = require("child_process");
const express = require("express");
const gitControllers = require('./gitControllers')
const Fs = require('fs');


const app = express();
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});
app.get('/', (req, res) => {
    try {
        const git= new gitControllers('codestack/')
        if(Fs.existsSync('./codestack/React-Testing'))
        {
            res.status(200).json({mag :"al"});
    }
        else{
            git.clone('https://github.com/itsmanibharathi/React-Testing')
        }
    } catch (error) {
        
        res.status(200).json({mag:error})
    }
})

app.get('/ls', (req, res) => {

    exec("ls codestack -al", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).json({mag:stdout})
});
});
// git.push();
// git.commit("simple-git init commit ");cls
