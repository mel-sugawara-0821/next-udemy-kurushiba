import { resolve } from "path";
import { FormEvent, Suspense } from "react";

async function getHeavyData() {
  'use cache';
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return '重いデータの取得完了'
}

export default async function Home() {
  const data = await getHeavyData()

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}