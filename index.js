const gitControllers = require('./gitControllers')
const git=new gitControllers('codestack/')
git.clone('https://github.com/itsmanibharathi/React-Testing')
console.log('data');
// git.push();
// git.commit("simple-git init commit ");