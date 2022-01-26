require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const route = require('./routes/index.js');
const db = require('./config/db');
const methodOverride = require('method-override');
const SortMiddleware = require('./middleware/SortMiddleware')
var cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.SESSION_SECRET || 'public'));
app.use(express.json());
app.use(SortMiddleware);
app.engine('hbs', hbs({
    extname : '.hbs',
    helpers : {
        sum : (a,b) => a+b, 
        sortable : (field,type) => {
            
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views' ,path.join(__dirname, 'resources/views'));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(methodOverride('_method'));
const {query, param ,check ,body, validationResult } = require('express-validator');
const port = process.env.PORT || 3000;
route(app);

db.connect();

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});
