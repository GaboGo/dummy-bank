const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const http = require("http")

function keepAwake(){
  setInterval(function() {
      var time = new Date().getHours;
      if(time <= 20){
        http.get("http://gabrielgoethe.herokuapp.com");
        http.get("http://ggoethe-bank.herokuapp.com");
        http.get("http://goethe-task-manager.herokuapp.com");
        console.log("keepAwake heroku apps")
      }
  }, 3300000); // every 55 minutes (3300000)
}

keepAwake();

express()
  .use(express.static(path.join(__dirname, 'src')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'node')
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/index.html')))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))