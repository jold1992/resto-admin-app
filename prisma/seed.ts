import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

  //borro datos de la base primero
  await prisma.user.deleteMany({})

  const john = await prisma.user.create({
    data: {
      name: 'John Lomas D.',
      email: 'jold1992@gmail.com',
      emailVerified: new Date(),      
    },
  })
  console.log({ john })
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