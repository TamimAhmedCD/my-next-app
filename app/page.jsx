import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);

  return (
    <div className="mt-10">
      <h4 className="text-lg text-center mb-4">--- Our Latest Blogs ---</h4>
      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 9).map((post) => (
          <div key={post.id}>
            {/* Card */}
            <div className="border flex flex-col p-5 h-full bg-white shadow-lg rounded-md">
              <h1 className="text-xl font-bold mb-2">Title: {post.title}</h1>
              <p className="mt-3 text-gray-700 flex-grow">
                {post.body.length > 100
                  ? `${post.body.substring(0, 100)}...`
                  : post.body}
              </p>
              <div className="mt-5">
                <Link href={`/blog/${post.id}`}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
