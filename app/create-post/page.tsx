"use client";
import { auth } from "@/auth";
import React from "react";

type PostDataType = {
  title: String;
  content: String;
  id: string;
};

async function addPost(data: PostDataType) {
  const response = await fetch("/api/add-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function page() {
  const data = {
    title: "third post",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod minima tenetur consectetur neque hic eligendi iure enim vero odio.",
    id: "clv7l3m5b0007eqceiq4xcs",
  };
  return (
    <div>
      <button onClick={() => addPost(data)}>add post</button>
    </div>
  );
}

export default page;
