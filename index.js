const express = require('express');
const app = express();

app.set('view engine', 'js');

app.use(express.static('./src'));

app.listen(process.env.PORT || 3000, () => {
    console.log("running server...")
})
