const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// console.log(adminRoutes);

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);


const errorController = require('./controllers/error');

// app.use(errorController.get404);
app.use(errorController.get404);

app.listen(3000);
