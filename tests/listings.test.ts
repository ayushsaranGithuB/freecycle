import { NextRequest } from 'next/server';
import { GET } from '@/app/api/listings/route';

describe('GET /api/listings', () => {
    it('should return a list of items', async () => {
        const request = new NextRequest('http://localhost/api/listings');
        const response = await GET(request);
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);
        // Add more assertions based on the expected structure of the items
    });

    it('should handle server errors gracefully', async () => {
        jest.spyOn(prisma.item, 'findMany').mockImplementationOnce(() => {
            throw new Error('Database error');
        });

        const request = new NextRequest('http://localhost/api/listings');
        const response = await GET(request);
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data).toHaveProperty('error');
    });
});