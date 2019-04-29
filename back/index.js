const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet');
const fs = require('fs')
const hash = require('object-hash');
const app = express()
app.use(helmet());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/articles', function (req, res) {
  let articles = []
  fs.readdir('./data/articles', (err, files) => {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        let data = fs.readFileSync(`./data/articles/${files[i]}`)
        articles.push(JSON.parse(data))
      }
      return res.send(JSON.stringify(articles))
    } else {
      return res.send(JSON.stringify(null))
    }
  });
})

app.get('/articles/:articleId', function (req, res) {
  let id = req.params.articleId
  fs.readdir('./data/articles', (err, files) => {
    if (files && files.indexOf(id + '.json') >= 0) {
      let data = JSON.parse(fs.readFileSync(`./data/articles/${id}.json`))
      return res.send(JSON.stringify(data))
    } else {
      return res.send(JSON.stringify(null))
    }
  });
})

app.post('/articles', (req, res) => {
  let article = {}
  let data = JSON.parse(req.body)
  article.data = data
  article.postDate = new Date()
  article.edithDate = new Date()
  article.id = hash({date: article.postDate, title: article.data.title})
  fs.writeFileSync(`data/articles/${article.id}.json`, JSON.stringify(article))
  return res.send(article);
});

app.post('/articles/:articleId', (req, res) => {
  let id = req.params.articleId
  let article = JSON.parse(req.body);
  article.edithDate = new Date()
  fs.writeFileSync(`data/articles/${id}.json`, article); 
  return res.send(JSON.stringify({response: 'ok'}));
});

app.delete('/articles/:articleId', (req, res) => {
  let id = req.params.articleId
  fs.unlink(`data/articles/${id}.json`); 
  return res.send(JSON.stringify({response: 'ok'}));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})