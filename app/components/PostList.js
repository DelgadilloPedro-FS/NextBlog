import Link from "next/link";


export default function PostList({ posts }) {
  const mockData = [
    {
      id: 1,
      slug: "Blog1",
      title: "A Blog",
      content:""
    },
  ];
  return (
    <ul>
      {mockData.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
