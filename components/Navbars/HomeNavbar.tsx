import Link from "next/link";

const HomeNavbar = async () => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div className="flex items-center ml-auto space-x-4">
          <Link href="/sign-in">Sign In</Link>
          <Link href="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
