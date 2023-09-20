const dgram = require('dgram');
const redis = require('./redis');

const server = dgram.createSocket('udp4');

const SERVER_ADDRESS = 'localhost';
const PORT = 4000;

redis.set('foo', 'bar');
redis.get('foo').then(value => console.log(value));

server.on("message", async (message, clientInfo)=>{
    console.log(`Receive: ${message} from ${clientInfo.address}:${clientInfo.port}`);
    const ipv4 = await redis.get(message);
    console.log('IP Address: ', ipv4);
    server.send(ipv4, clientInfo.port, clientInfo.address, (err) => {
        if (err) {
            console.log('Error occured when sending message to client');
            return;
        }
        console.log('Sending message to client successfully');
    })
});

server.bind(PORT, SERVER_ADDRESS, () => {
    console.log('UDP Server started!');
});