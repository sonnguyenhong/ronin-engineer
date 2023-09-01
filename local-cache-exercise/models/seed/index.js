const Airport = require("../airport.model");
const mongoose = require("mongoose");
const airports = [   
  new Airport({
    code: 'VNA',
    name: 'Vietnam Airlines'
  }),
  new Airport({
    code: 'VJA',
    name: 'Vietjet'
  }),
  new Airport({
    code: 'NHS',
    name: 'Nguyen Hong Son'
  }),
  new Airport({
    code: 'BBA',
    name: 'Bamboo Airways'
  }),
  new Airport({
    code: 'EMR',
    name: 'Emmirates'
  }),
  new Airport({
    code: 'QTA',
    name: 'Qatar Airways'
  }),
  new Airport({
    code: 'ASA',
    name: 'Asia Airways'
  }),
  new Airport({
    code: 'ETH',
    name: 'Etihad Airways'
  }),
  new Airport({
    code: 'BRT',
    name: 'British Airways'
  }),
  new Airport({
    code: 'TKA',
    name: 'Turkish Airlines'
  }),
  new Airport({
    code: 'APC',
    name: 'Asia Pacific'
  }),
]
//connect mongoose
mongoose
  .connect('mongodb://localhost:27017/airline-booking', { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
airports.map(async (airport, index) => {
    await airport.save();
    if (index === airports.length - 1) {
        console.log("DONE!");
        mongoose.disconnect();
    }
});
