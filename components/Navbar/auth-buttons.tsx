import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default function AuthButtons() {
  const { userId } = auth();

  if (!userId) {
    return (
      <>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
      </>
    );
  } else {
    return <UserButton afterSignOutUrl="/" />;
  }
}
