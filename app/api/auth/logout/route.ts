import { NextResponse } from 'next/server';

export async function POST() {
  // Since we're using JWT (stateless), logout is handled client-side by removing token
  return NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  });
}