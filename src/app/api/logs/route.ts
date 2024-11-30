import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      });
    }

    // Fetch logs ordered by timestamp
    const logs = await prisma.userLog.findMany({
      orderBy: {
        timestamp: 'desc',
      },
    });

    return NextResponse.json(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
