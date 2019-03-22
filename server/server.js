const app = require('express')();
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorhandler');

// set web server port according to environment
const port = 8080 || process.env.PORT;

// load configuration file
dotenv.config();

// use logger
app.use(morgan('dev'));

//parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use cross origin module
app.use(cors('*'));

app.get('/',(_req,res,next) => {
    const err = new Error();
    err.message = 'invalid email';
    err.statusCode = 401;
    return next(err);
});

// set error handler
app.use(errorHandler);

// set web server port
app.listen(port,() => {
    console.log('app started at port 3000');
});