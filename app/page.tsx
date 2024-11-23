import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>notFound() with 'use cache'</h1>
      <ul>
        <li>
          <Link href="/example-without-cache">
            ✅ Example without 'use cache'
          </Link>
        </li>
        <li>
          <Link href="/example-with-cache">💥 Example with 'use cache'</Link>
        </li>
      </ul>
    </div>
  );
}
