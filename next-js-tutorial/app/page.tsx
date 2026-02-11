'use client'

import { FormEvent, Suspense } from "react";
import SlowComponent from "./SlowComponents";
type Post = {
  id: number,
  title: string
}

// export default async function Home() {
//   // Note: fetchのキャッシュ機能？
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const posts: Post[] = await res.json();

//   return (
//     <>
//       <h1>メインコンテンツ（すぐ表示）</h1>
//       {/* <Suspense fallback={<div>重いコンポーネントを読み込み中。。。</div>}> */}
//         <SlowComponent />
//       {/* </Suspense> */}
//       {/* <ul>{
//         posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul> */}
//     </>
//   );
// }

export default  function Home() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    
    await fetch('/api/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })

  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name'/>
      <button type="submit">送信</button>
    </form>
  )
}