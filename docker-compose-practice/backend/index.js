const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT;

app.get('/', (req, res, next) => {
    return res.send('Hello from server!');
})

app.get('/users', async (req, res, next) => {
    try {
        const users = await prisma.user.findMany();
        return res.json({
            users,
        })
    } catch (err) {
        return res.json({
            err,
        })
    }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
