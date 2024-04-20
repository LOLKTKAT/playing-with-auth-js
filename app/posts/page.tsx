import prisma from "@/lib/db";
import React from "react";

async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  return posts;
}

async function page() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <img
            src={post.author.image}
            className="rounded-full"
            alt="avatar-img"
          />
        </div>
      ))}
    </div>
  );
}

export default page;
