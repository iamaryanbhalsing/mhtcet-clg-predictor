import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const shortlists = await prisma.shortlist.findMany({ where: { userId: userId! }, include: { college: true } });
  return NextResponse.json(shortlists);
}