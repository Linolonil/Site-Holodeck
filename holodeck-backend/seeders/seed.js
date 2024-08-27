const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Criar um usuário
  const user = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin123',
    },
  });

  // Criar um artigo
  await prisma.article.create({
    data: {
      title: 'Sample Article',
      content: 'This is a sample article content.',
      theme: 'General',
      userId: user.id,
    },
  });

  console.log('Database seeded!');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
