const redis = require('./index');
const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');

const sampleFilePath = path.join(__dirname, 'sample.csv');
const data = [];

fs.createReadStream(sampleFilePath)
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => data.push(row))
    .on('end', () => {
        console.log(data);
        for(const row of data) {
            redis.set(row.domain, row.ipv4);
        }
    });
