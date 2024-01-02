const { parseArgs } = require('node:util')
const { PrismaClient } = require('@prisma/client');

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
      /** data for your development */
      await prisma.user.create({
        data: {
            email: 'admin@admin.com',
            name: 'Son Nguyen Hong',
        }
      })
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