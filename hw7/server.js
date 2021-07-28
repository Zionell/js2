const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const moment = require('moment');
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/catalog', (req, res) => {
   fs.readFile('./json/catalogData.json', 'utf8', (err, data) => {
      res.send(data);
   });
})

app.get('/cart', (req, res) => {
   fs.readFile('./json/cart.json', 'utf8', (err, data) => {
      res.send(data);
   });
})

app.post('/cart', bodyParser.json(), (req, res) => {
   fs.readFile('./json/cart.json', 'utf8', (err, data) => {
      const cart = JSON.parse(data);
      cart.push(req.body)
      fs.writeFile('./json/cart.json', JSON.stringify(cart), () => {
         res.end();
      })
   });
})

app.delete('/cart', bodyParser.json(), (req, res) => {
   fs.readFile('./json/cart.json', 'utf8', (err, data) => {
      const cart = JSON.parse(data);
      cart.forEach(el => {
         if (el.id_product == req.body.id_product) {
            cart.splice(cart.indexOf(el), 1)
         }
      });
      fs.writeFile('./json/cart.json', JSON.stringify(cart), () => {
         res.end();
      })
   });
})

app.post('/stats', bodyParser.json(), (req, res) => {
   fs.readFile('./json/stats.json', 'utf8', (err, data) => {
      const info = JSON.parse(data);
      const statsInfo = {
         action: req.body.act,
         title: req.body.product.title,
         time: moment().format('LLL')
      }
      info.push(statsInfo)
      fs.writeFile('./json/stats.json', JSON.stringify(info), () => {
         res.end();
      })
   });
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})

