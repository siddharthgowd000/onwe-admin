import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1>Welcome to OnwE</h1>
      <ul>
        <li>
          <Link href="/users">Users Dashboard</Link>
        </li>
        <li>
          <Link href="/posts">Posts Dashboard</Link>
        </li>
        <li>
          <Link href="/clubs">Clubs Dashboard</Link>
        </li>
        <li>
          <Link href="/events">Events Dashboard</Link>
        </li>
        <li>
          <Link href="/magazines">Magazines Dashboard</Link>
        </li>
      </ul>
    </main>
  );
}
