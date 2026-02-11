import { resolve } from "path"

type Post = {
  id: number,
  title: string
}

export default async function SlowComponent() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
  // Note: fetchのキャッシュ機能？
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts: Post[] = await res.json();

  return (
    <>
      <h1>SlowComponent</h1>
    </>
  );


}
