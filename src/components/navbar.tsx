"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CircleUserIcon } from "lucide-react";
import { cn } from "cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/my-bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 flex h-14 shrink-0 items-center bg-white px-4 sm:px-6">
      <nav className="hidden items-center gap-6 text-sm md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={cn(
              "transition-colors hover:text-cyan-600",
              pathname === link.href ? "text-cyan-600" : "text-foreground",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        aria-label="Wanderlast home"
        className="absolute left-1/2 flex -translate-x-1/2 items-center"
      >
        <Image
          src="/images/Wanderlast.png"
          alt="Wanderlast"
          width={162}
          height={24}
          priority
          className="h-6 w-auto"
        />
      </Link>

      <div className="ml-auto hidden items-center gap-5 text-sm md:flex">
        <Link
          href="/profile"
          className="flex items-center gap-1.5 text-foreground transition-colors hover:text-cyan-600"
        >
          <CircleUserIcon className="size-4" />
          Profile
        </Link>
        <Link
          href="/login"
          className="text-foreground transition-colors hover:text-cyan-600"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-foreground transition-colors hover:text-cyan-600"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
