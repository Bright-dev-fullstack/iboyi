"use client"; // Required for handling the mobile menu state

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Theme } from "./Theme";

interface NavItem {
    name: string;
    url: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Projects", url: "/projects" },
        // { name: "Services", url: "/service" },
        { name: "Contact", url: "/contact" }, // Fixed typo: 'cantact' to 'contact'
    ];

    return (
        <header className="fixed inset-x-4 top-6 z-50 mx-auto max-w-6xl">
            {/* Desktop and Main Navbar Shell */}
            <nav className="flex items-center justify-between border border-white/10 bg-gray-900/60 px-6 py-3 text-white shadow-xl backdrop-blur-md rounded-full md:px-10">
                
                {/* Logo Section */}
                <div>
                    <Link className="flex items-center gap-2" href="/">
                        <Image 
                            src="/star.png"
                            alt="my logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 animate-pulse"
                        />
                        <p className="font-bold tracking-wide">
                            <span style={{ color: Theme.lightcolor }}>Bright</span> Iboyi
                        </p>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item, index) => (
                        <div key={index} className="group relative py-1">
                            <Link 
                                href={item.url} 
                                className="text-sm font-medium transition-colors duration-300 hover:text-white/80"
                            >
                                {item.name}
                            </Link>
                            {/* Animated Underline */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1.5 p-2 md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`absolute left-0 right-0 top-16 mt-2 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gray-900/95 p-6 shadow-xl backdrop-blur-lg">
                    {navItems.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.url} 
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium border-b border-white/5 pb-2 last:border-none last:pb-0 transition-colors hover:text-gray-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}