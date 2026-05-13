"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavItem = {
    label: string;
    href: string;
};

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems: NavItem[] = useMemo(
        () => [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
        [],
    );

    useEffect(() => {
        const onScroll = () => {
            const threshold = window.innerHeight * 0.9; // 90% of viewport height
            setIsSticky(window.scrollY >= threshold);
        };
        onScroll(); // Check on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!isSticky) setMobileOpen(false); // Close mobile menu when not sticky
    }, [isSticky]);

    return (
        <>
            {isSticky && <div aria-hidden className="h-16" />}

            <header
                className={cn(
                    "z-50 h-16 w-full text-white transition-all duration-300",
                    isSticky
                        ? "fixed top-0 left-0 shadow-lg shadow-black/20"
                        : "absolute top-0 left-0",
                    !isSticky && "bg-transparent",
                    isSticky &&
                    "bg-slate-900/70 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10",
                )}
            >
                <div className="mx-auto flex h-full max-w-5/6 items-center justify-between px-4 ">
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
                    >
                        Logo
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                {item.label}
                            </Link>
                        ))}

                        <Button variant="secondary" className="rounded-xl">
                            Login
                        </Button>
                        </nav>

                        {/* Mobile Nav */}
                        <div className="md:hidden">
                            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" className="rounded-xl text-white hover:bg-white/10">
                                        Menu
                                    </Button>
                                </SheetTrigger>

                                <SheetContent side="right" className="w-72">
                                    <div className="mt-6 flex flex-col gap-2">

                                        {navItems.map((item) => (
                                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                                                {item.label}
                                            </Link>
                                        ))}

                                        <Button className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
                                            Login
                                        </Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                </div>
            </header>
        </>
    );
}
