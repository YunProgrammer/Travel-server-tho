const express = require(`express`);   
const cors = require(`cors`);      
const allroutes = require('./routes/allroutes');
const morganMonitor = require('morgan');

const bodyParser = require('body-parser'); 

const API_PORT = process.env.PORT || 5000;  
const app = express();   

app.use(cors());                         


app.use(morganMonitor('tiny'));

app.use(bodyParser.urlencoded({ extended: true,}) ); 
app.use(bodyParser.json());

app.use(allroutes);

app.listen(API_PORT, ()=> { console.log(`LISTENING on port ${API_PORT}`) });
