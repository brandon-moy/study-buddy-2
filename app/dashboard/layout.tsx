import AuthNavbar from "@/components/Navbars/AuthNavbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}
