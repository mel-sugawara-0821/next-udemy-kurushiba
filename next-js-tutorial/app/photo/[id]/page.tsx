// ルーティング: 動的ルーティングの例
export default async function Photo({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    return (
      <h1>Photo ID: {id}</h1>
    );
}
