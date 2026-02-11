import Link from "next/link";

export default function Feed() {
  return (
    <div>
        <h2>Feed</h2>
        <Link href='/photo/1'>
            go to photo 1
        </Link>
    </div>
  );
}
