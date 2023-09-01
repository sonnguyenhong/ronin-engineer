const express = require("express");
const { default: mongoose } = require("mongoose");
const route = require("./routes");
const app = express();
app.use(express.json());

route(app);

app.use((err, req, res, next) => {
    return res.json({
        status: err.status,
        message: err.message
    })
})

mongoose.connect('mongodb://localhost:27017/airline-booking', { useNewUrlParser: true })
    .then(result => {
        console.log('Connect to database successfully');
        app.listen(4000, () => {
            console.log('Server is running on PORT 4000');
        })
    })  
    .catch(err => {
        console.log('Error when connect to database');
    })  
