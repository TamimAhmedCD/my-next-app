import Link from "next/link";

export default async function BlogDetails({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>

      <div className="mt-6 flex items-center gap-4">
        <Link href="/">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Go Back
          </button>
        </Link>
        <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300">
          Share
        </button>
      </div>
    </div>
  );
}
