import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/mode-toggle";
import React from "react";
import Link from "next/link";
import { navbarItems } from "../../lib/data";
import { cn } from "@/lib/utils";

const Navbar: React.FC<{}> = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <span>
          <li className="text-xl font-semibold leading-none tracking-tight">
            <Link href={navbarItems.home.href} legacyBehavior passHref>
              <a className="text-xl">{navbarItems.home.label}</a>
            </Link>
          </li>
        </span>
        <span className="md:flex gap-4 bg-background outline outline-border rounded-full p-1 hidden">
          {Object.entries(navbarItems.middleNavbarItems).map(([key, value]) => (
            <li key={key} className="hover:bg-muted rounded-full transition">
              <Link href={value.href} passHref legacyBehavior>
                <a className="px-4 py-2 block">{value.label}</a>
              </Link>
            </li>
          ))}
        </span>
        <span className="flex gap-4">
          <ModeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
