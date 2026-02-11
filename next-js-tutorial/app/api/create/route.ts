import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log('data--------')
  console.log(data)

  return NextResponse.json({message: '成功しました'})
}