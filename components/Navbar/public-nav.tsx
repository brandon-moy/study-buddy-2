"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PublicNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const routes = [
    {
      href: "/",
      label: "Study Buddy 2",
      active: pathname === "/",
    },
    {
      href: `/dashboard`,
      label: "Create Flashcards",
      active: pathname === `/dashboard`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <button
          onClick={() => setShow(!show)}
          type="button"
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${show ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="absolute flex flex-col z-50 gap-y-4 h-[310px] sm:h-auto p-4 mt-4 font-medium bg-white border rounded-lg sm:relative md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 sm:bg-transparent sm:dark:bg-transparent">
            {routes.map((route) => (
              <Link
                onClick={() => setShow(false)}
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
