export default function ParallelLayout({
    children,
    team,
    analytics

}: {
    children: React.ReactNode,
    team: React.ReactNode,
    analytics: React.ReactNode,
}) 
{
  return (
    <h2>
        <h2>ParallelLayout</h2>
        <div>{children}</div>
        <div>
            <div>{team}</div>
            <div>{analytics}</div>
        </div>
    </h2>
  );
}
