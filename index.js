const express = require('express');
const app = express();

app.set('src', path.join(__dirname, 'src'));
app.set('view engine', 'ejs');

app.use(express.static('./src'));

app.set('port', process.env.PORT || 3000 );

app.listen(app.get('port'), () => {
    console.log("running server...")
});

const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'src')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('src/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))