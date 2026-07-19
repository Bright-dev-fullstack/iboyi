"use client";

import { useState } from "react";
import { Theme } from "@/components/Theme";

interface Project {
    title: string;
    description: string;
    category: "Fullstack" | "Backend" | "Frontend";
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    tagline: string;
}

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<"All" | "Fullstack" | "Backend" | "Frontend">("All");

    const portfolioProjects: Project[] = [
        // {
        //     title: "Taskerr",
        //     tagline: "A smarter way to find jobs.",
        //     description: "A fast and responsive job search application built with advanced filtering and an easy-to-use interface to help users land their next role.",
        //     category: "Fullstack",
        //     tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"],
        //     liveUrl: "#",
        //     githubUrl: "#"
        // },
        {
            title: "API Connect",
            tagline: "The universal bridge for your data.",
            description: "A reliable platform that makes it easy for developers to manage their APIs and connect different data sources in one place.",
            category: "Backend",
            tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/Tochukwu-001/apiconnect"
        },
        {
            title: "Sereno",
            tagline: "Where your potential meets your next passion.",
            description: "A beautifully designed, premium job search website that helps connect talented people with the perfect career path.",
            category: "Frontend",
            tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/Bright-dev-fullstack/Senero"
        },
        {
            title: "Jaybliz Studio & Spa",
            tagline: "A clean booking experience.",
            description: "A custom website built for a local hair studio and spa, complete with a smooth and simple online booking system.",
            category: "Fullstack",
            tags: ["React", "Next.js", "Tailwind CSS", "Calendly API", "Firebase"],
            liveUrl: "#",
            githubUrl: "https://github.com/Bright-dev-fullstack/jaybliz"
        }
    ];

    const filteredProjects = portfolioProjects.filter(project => {
        if (activeFilter === "All") return true;
        return project.category === activeFilter;
    });

    return (
        <main className="min-h-screen bg-gray-950 text-white pt-32 pb-24 px-6 selection:bg-white/20">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* Header Section */}
                <div className="space-y-4 max-w-2xl">
                    <span 
                        style={{ color: Theme.lightcolor }} 
                        className="text-xs uppercase tracking-[0.25em] font-bold"
                    >
                        My Projects
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                        Things I've Built.
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        A look at the websites, applications, and tools I have built from the ground up.
                    </p>
                </div>

                {/* Filter Navigation Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
                    {(["All", "Fullstack", "Backend", "Frontend"] as const).map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all border ${
                                activeFilter === filter
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Dynamic Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm hover:border-white/20 transition-all duration-300 shadow-xl"
                        >
                            <div className="space-y-4">
                                {/* Top Badging & Meta */}
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                                        {project.category}
                                    </span>
                                    
                                    {/* Project Source/Live Links */}
                                    <div className="flex gap-4 text-gray-400">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="hover:text-white transition-colors" target="_blank" rel="noreferrer" title="View Source">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} className="hover:text-white transition-colors" target="_blank" rel="noreferrer" title="Live Preview">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Title Block */}
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold group-hover:text-gray-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p style={{ color: Theme.lightcolor }} className="text-xs font-medium tracking-wide">
                                        {project.tagline}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed pt-2">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Pills Footer */}
                            <div className="flex flex-wrap gap-2 pt-6">
                                {project.tags.map((tag, tagIdx) => (
                                    <span 
                                        key={tagIdx} 
                                        className="text-[11px] font-mono text-gray-400 bg-white/[0.03] border border-white/5 px-2.5 py-0.5 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}