"use client";
import { UserButton } from "@clerk/clerk-react";

export default function Dashboard({ params }: { params: { userId: string } }) {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <div>Dashboard</div>
    </div>
  );
}
