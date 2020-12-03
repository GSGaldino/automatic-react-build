const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const insertLine = require('insert-line');
const { exec } = require('child_process');

router.get('/', async (req, res) => {
  const { hostname, courseCode, slug } = req.query;
  const pathToFrontend = path.resolve(__dirname, '..', '..', '..', hostname);
  const pagesDirectory = path.resolve(pathToFrontend, 'src', 'pages', `${courseCode.toUpperCase()}Homepage`);

  let success = false;

  if (!fs.existsSync(pagesDirectory)) {
    const fullFunctionName = `${courseCode.toUpperCase()}Homepage`;

    //PASSO 1
    //CRIA o Diretório
    fs.mkdirSync(pagesDirectory, { recursive: true })

    //Cria o arquivo JSX
    fs.writeFileSync(`${pagesDirectory}/index.jsx`, `
import React from 'react';

export default function ${fullFunctionName}(){
  return (
    <h1>Hello! You have created ${fullFunctionName} yet!</h1>
  )
}
    `)
    //PASSO 2
    //Escreve as rotas do frontend
    const srcPath = path.resolve(pagesDirectory, '..', '..');
    insertLine(`${srcPath}/routes.js`).content(`import ${fullFunctionName} from "./pages/${fullFunctionName}";`).at(6).then(function (err) {
      insertLine(`${srcPath}/routes.js`).content(`        <Route path="/${slug}" exact component={${fullFunctionName}} />`).at(113).then(function (err) {
        if(err){
          console.log(err)
        }
        return res.json({
          message: 'success'
        })
      })
      if (err) {
        console.log(err)
      }
    })
  }

  // exec(`cd ${pathToFrontend} && npm run build`, (error, stdout, stderr) => {
  //   if (error) {
  //     console.log(`error: ${error.message}`);
  //   }
  //   if (stderr) {
  //     console.log(`stderr: ${stderr}`);
  //   }
  //   console.log(`stdout: ${stdout}`);
  // });

})

module.exports = router;
