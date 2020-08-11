const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const sass = require('node-sass');
const app = express();
const port = 3000;

const router = require('./routers/index');

app.use(express.static(path.join(__dirname, 'public')));
// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
// HTTP Logger
//app.use(morgan('combined'));

router(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
