const express = require('express')  
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('.\\models')
const config = require('.\\config\\config')
//const msgs = require('./routes/messages');  // Nas ruter (REST API)
const history = require('connect-history-api-fallback');
const path = require('path');


// Kazemo aplikaciji da za rute koje pocinju sa '/api' koristi nas ruter
//app.use('/api', msgs);

const staticMiddleware = express.static(path.join(__dirname, 'dist'));


const app = express()



app.use(morgan('combined'))
app.use(bodyParser.json())

require('.\\routes')(app)

app.use(staticMiddleware);
app.use(history());
app.use(staticMiddleware);

sequelize.sync({format:true})
    .then(() => {
    app.listen(8081)
    console.log(`Server started on port ${config.port}`)
})
