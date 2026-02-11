import { resolve } from "path";
import { FormEvent, Suspense } from "react";

async function getHeavyData() {
  await new Promise((resolve) => setTimeout(() => resolve, 3000))
  return '重いデータの取得完了'

}

export default  function Home() {
  const createAction = async (formData: FormData) => {
    'use server'

    const name = formData.get('name');
    console.log('name----------------')
    console.log(name)
  };
  return (
    <form action={createAction}>
      <input type="text" name='name'/>
      <button type="submit">送信</button>
    </form>
  )
}