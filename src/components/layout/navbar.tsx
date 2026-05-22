"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { ROUTES, APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: ROUTES.HOME },
    { name: "Jobs", href: ROUTES.JOBS },
    { name: "Applied Jobs", href: ROUTES.APPLIED },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">W</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
            {APP_NAME}
          </span>
        </Link> */}

         <div className="flex items-center">
            <Link href="/" className="flex items-end gap-2">
              <div className="block dark:hidden">
                <span className="text-black text-xl font-semibold">
                 {"{ "}Webfry<em className="italic font-semibold">Solution</em>{" }"}
                </span>
              </div>

              <div className="hidden dark:block">
                <span className="text-white text-xl font-semibold">
                  {"{ "}Webfry<em className="italic font-semibold">Solution</em>{" }"}
                </span>
              </div>


              {/* <span className="inline-block px-1.5 py-0.5 rounded-lg rounded-bl-none bg-primary-500/90 text-white text-xs font-medium mb-0.5">
                Live Now
              </span> */}
            </Link>
          </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-border/50 absolute top-16 left-0 w-full">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-3 px-4 rounded-md text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
