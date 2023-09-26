import { NextResponse  } from 'next/server';
import phones from './data.json';

export async function GET(request) {
    return NextResponse.json(phones);
}
