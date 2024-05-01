const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const seed = async () => {
  await prisma.chimichanga.create({
    data: {
      name: "Gordo's Chimi",
    },
  });
  await prisma.chimichanga.create({
    data: {
      name: "Tyler's Chimi",
    },
  });
};

seed();
