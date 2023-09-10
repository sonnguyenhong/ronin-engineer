const express = require('express');
const cors = require('cors');
const unzipper = require('unzipper');
const decompress = require('decompress');
const fs = require('fs');
const { uuid } = require('uuidv4');

const app = express();
app.use(cors());
app.use(express.json());

const jobStorage = {};

app.get('/export-large-file', async (req, res, next) => {
    const jobId = uuid();
    jobStorage[jobId] = { status: 'pending' }

    setTimeout(() => {
        jobStorage[jobId] = { status: 'success' } 
    }, 5000);
    
    return res.json({
        jobId: jobId
    })
})

app.get('/check-job-status/:jobId', async (req, res, next) => {
    return res.json({
        status: jobStorage[req.params.jobId]
    })
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})