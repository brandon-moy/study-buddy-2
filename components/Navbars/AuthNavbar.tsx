import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AuthNavbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
