const dgram = require('dgram');

const client = dgram.createSocket('udp4');
const DNS_SERVER = 'localhost';
const DNS_PORT = 4000;

client.on('message', (message) => {
    console.log(`IP Address: ${message}`);
    client.close();
})  

const DOMAIN_NAME = 'example1.com';

client.send(DOMAIN_NAME, DNS_PORT, DNS_SERVER, (err) => {
    if (err) {
        console.error(`Error occured when sending domain name ${DOMAIN_NAME}: ${err.message}`);
        client.close();
        return;
    }
    console.log(`Sending domain name ${DOMAIN_NAME} successfully`);
})