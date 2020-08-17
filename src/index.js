const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const sass = require('node-sass');
const app = express();
const port = 3000;
const database = require('./config/db/');

// Connect to db
database.connect();

const router = require('./routers/index');

app.use(express.static(path.join(__dirname, 'public')));
// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(methodOverride('_method'));

app.use(express.json());

// Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// HTTP Logger
//app.use(morgan('combined'));

router(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
