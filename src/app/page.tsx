import Link from "next/link";

export default function Home() {
  return (
    <main className="prose">
      <nav>
        <ul>
          <li>
            <Link href="/media-query">Media Query</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
