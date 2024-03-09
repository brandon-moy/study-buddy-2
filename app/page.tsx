import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/sign-in">Sign In</Link>
      <Link href="/sign-up">Sign Up</Link>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Home Page
      </div>
    </main>
  );
}
