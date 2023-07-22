import { NextResponse } from "next/server";
import { getAllRounds } from "@/lib/getAllRounds";

export async function GET(request: Request) {
  const results = await getAllRounds()
  
  return NextResponse.json(results)
}