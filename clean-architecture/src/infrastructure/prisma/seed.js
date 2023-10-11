const { parseArgs } = require('node:util');
const { PrismaClient } = require('@prisma/client');
const getSystemResources = require('./getSystemResources');

const prisma = new PrismaClient();

const options = {
    environment: { type: 'string' },
}


async function main() {
    const {
        values: { environment },
    } = parseArgs({ options })

    switch (environment) {
        case 'development':
            const resources = await getSystemResources();
            for(const resource of resources) {
                try {
                    await prisma.permission.create({
                        data: {
                            permissionName: resource,
                        }
                    });
                } catch (err) {
                    console.log('Error when adding data: ', err.message);
                }
            }
            break
        case 'test':
            /** data for your test environment */
            break
        default:
            break
    }
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })