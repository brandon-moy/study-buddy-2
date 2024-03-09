"use client";
import { UserButton } from "@clerk/clerk-react";

export default function Dashboard({ params }: { params: { userId: string } }) {
  return (
    <div>
      <UserButton />
      <div>Dashboard</div>
    </div>
  );
}
