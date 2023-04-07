const simpleGit = require('simple-git')
const path = require('path');
class Git {
  constructor(workingDir) {
    this._git = workingDir?simpleGit(path.join(__dirname,workingDir))
    .outputHandler((command, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr)
        stdout.on('data', (data) => {
            console.log(data.toString('utf8'));})
      })  : simpleGit().outputHandler((command, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr)
    
        stdout.on('data', (data) => {
            console.log(data.toString('utf8'));})
      }) 

  }
  async clone(repo,options){
    await this._git.clone(repo,options)
    // return new Promise((resolve,rejects)=>{
    //   if(err)
    //     rejects(err)
    //   else
    //     resolve(this._git.clone(repo,options))
    // })
  }

  commit(msg){
    this._git.commit(msg);
  }
  add(){
    this._git.add('.');
  }
  push(){
    this._git.push();
  }
}

module.exports = Git