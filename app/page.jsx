import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
