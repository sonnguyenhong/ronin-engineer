require('dotenv').config();
const app = require('./infrastructure/app');
const { PORT } = require('./config');

const DEFAULT_PORT = 8080;

app.listen(PORT || DEFAULT_PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});