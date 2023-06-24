import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>HELLO WORLD</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
