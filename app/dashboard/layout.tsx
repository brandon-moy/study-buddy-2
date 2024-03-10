import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import AuthNavbar from "@/components/Navbars/AuthNavbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}
