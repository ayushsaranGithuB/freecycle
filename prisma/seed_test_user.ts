import { prisma } from '../lib/prisma';

async function main() {
    await prisma.user.create({
        data: {
            phone: '9999999999',
            name: 'Test User',
            email: 'testuser@example.com',
            pointsBalance: 100,
        },
    });
    console.log('Test user created');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
