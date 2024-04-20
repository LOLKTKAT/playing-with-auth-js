import { auth } from "@/auth";
import prisma from "@/lib/db";
import { error } from "console";
import Image from "next/image";
import ShowUser from "./components/ShowUser";
// import { SignIn } from "./components/signinButton";

async function getUserByEmail(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
    include: {
      accounts: true,
    },
  });
  return user;
}

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    return <>Please sign in</>;
  }

  const user = await getUserByEmail(session?.user?.email);

  return (
    <main className="">
      <img src={session?.user?.image} alt="avatar image" />
      <div>{session?.user?.email}</div>
      <div>{session?.user?.id}</div>
      <div>{session?.user?.name}</div>
      <pre>{JSON.stringify(user?.accounts[0].providerAccountId)}</pre>
      <pre>{JSON.stringify(user?.accounts[0].provider)}</pre>

      <ShowUser user={user} />
    </main>
  );
}
