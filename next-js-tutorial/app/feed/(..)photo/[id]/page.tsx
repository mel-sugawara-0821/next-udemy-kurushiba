// ルーティング: 動的ルーティングの例
export default async function InterceptPhoto({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    return (
        <div>
            <h2>InterceptPhoto: {id}</h2>
            <p>これはインターセプトされたページです</p>
        </div>
    );
}
