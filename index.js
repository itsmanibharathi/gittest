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
app.use(express.json());

app.get('/', (req, res) => {

    exec( req.body.command , (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        res.status(200).json({err:error.message})
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(200).json({err:stderr})
        return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).json({mag:stdout})
});
});
// git.push();
// git.commit("simple-git init commit ");cls
