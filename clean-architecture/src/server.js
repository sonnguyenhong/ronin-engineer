require('dotenv').config();
const app = require('./infrastructure/app');
const { PORT, DEFAULT_PORT } = require('./config');

app.listen(PORT || DEFAULT_PORT, () => {
    console.log(`Server is listening on PORT ${PORT || DEFAULT_PORT}`);
});