import { Suspense } from "react";
import SlowComponent from "./SlowComponents";
type Post = {
  id: number,
  title: string
}

export default async function Home() {
  // Note: fetchのキャッシュ機能？
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts: Post[] = await res.json();

  return (
    <>
      <h1>メインコンテンツ（すぐ表示）</h1>
      {/* <Suspense fallback={<div>重いコンポーネントを読み込み中。。。</div>}> */}
        <SlowComponent />
      {/* </Suspense> */}
      {/* <ul>{
        posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
}
