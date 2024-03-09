"use client";
import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <div>Dashboard</div>
    </div>
  );
}
