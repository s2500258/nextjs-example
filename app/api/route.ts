import { NextResponse } from "next/server"; 

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
  headers: {
    "apikey": supabaseAnonKey,
    "Authorization": `Bearer ${supabaseAnonKey}`,
    "Content-Type": "application/json",
  }
});

const data = await response.json();

export async function GET() {
  return NextResponse.json(data);
}
