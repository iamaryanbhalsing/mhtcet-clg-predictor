import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { main as seedDatabase } from '../../../prisma/seed';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("🚀 Initializing Database...");

    // Run seed
    await seedDatabase();

    return NextResponse.json({
      success: true,
      message: "Database initialized successfully with 15 colleges!"
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: "Failed to initialize database"
    }, { status: 500 });
  }
}