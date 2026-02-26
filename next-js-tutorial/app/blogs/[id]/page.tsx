// ルーティング: 動的ルーティングの例
export default async function Blogs({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    return (
      <h1>Blog ID: {id}</h1>
    );
}
