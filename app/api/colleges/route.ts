import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const colleges = await prisma.college.findMany({ include: { cutoffs: true } });
  return NextResponse.json(colleges);
}