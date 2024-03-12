import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full pt-12 grid place-items-center">
      <SignUp />
    </div>
  );
}
