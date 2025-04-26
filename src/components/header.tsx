import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/themeToggler";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2 md:px-4">
      <div className="container flex h-16 items-center justify-between mx-auto ">
        <div className="flex items-center gap-2 p-4">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={128} height={16} />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#venues"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            For Venues
          </Link>
          <Link
            href={"https://admin.netwok.app/admin/login"}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Admin
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="hidden md:flex" variant="ghost" size="sm" asChild>
            <Link href="https://admin.netwok.app/venue/login">Log In</Link>
          </Button>
          <Button
            size="sm"
            className="hidden md:flex rounded-full px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
            asChild
          >
            <Link href="https://admin.netwok.app/venue/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
