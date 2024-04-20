import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

type PostDataType = {
  title: string;
  content: string;
  id: string;
};

async function addPost(data: PostDataType) {
  await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: data.id,
    },
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    addPost(data);
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json(data);
}
