import Link from "next/link";
import { Theme } from "./Theme";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const exploreLinks = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Projects", url: "/projects" },
        // { name: "Services", url: "/service" },
        { name: "Contact", url: "/contact" },
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/Bright-dev-fullstack" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/bright-iboyi-a9297b222?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
        { name: "Twitter / X", url: "https://twitter.com" },
    ];

    return (
        <footer className="w-full bg-gray-950 text-white border-t border-white/5 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand / Left Side */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <div className="font-bold text-base tracking-wide">
                        <span style={{ color: Theme.lightcolor }}>Bright</span> Iboyi
                    </div>
                    <p className="text-xs text-gray-500">
                        &copy; {currentYear} All rights reserved.
                    </p>
                </div>

                {/* Center / Internal Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    {exploreLinks.map((item, idx) => (
                        <Link 
                            key={idx} 
                            href={item.url} 
                            className="hover:text-white transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side / Social Profiles */}
                <div className="flex gap-5 text-sm text-gray-400">
                    {socialLinks.map((item, idx) => (
                        <a 
                            key={idx}
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-white transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}