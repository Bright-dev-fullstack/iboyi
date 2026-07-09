import Image from "next/image";
import Link from "next/link";
import { Theme } from "@/components/Theme";

interface Project {
  title: string;
  desc: string;
  tag: string;
  image: string;
}

export default function Home() {
    // Your actual project data
    const featuredProjects: Project[] = [
        {
            title: "Taskerr",
            desc: "A fast, premium job search app with smart filtering and an easy-to-use interface.",
            tag: "Full-Stack",
            image: "/star.png" // Replace with actual project screenshot path
        },
        {
            title: "API Connect",
            desc: "A reliable platform to easily manage, route, and connect your API data.",
            tag: "Backend / API",
            image: "/star.png"
        }
    ];

    return (
        <div className="bg-gray-950 text-white min-h-screen font-sans selection:bg-white/20">
            {/* 1. NAVIGATION */}
            

            {/* 2. HERO SECTION */}
            <main className="h-dvh relative overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <video 
                    src="/mybg.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="absolute inset-0 h-full w-full object-cover z-0"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 h-auto bg-gradient-to-b from-black/40 via-black/60 to-gray-950 z-10" />

                {/* Hero Content */}
                <div className="relative z-20 text-center px-4 w-full max-w-3xl mx-auto flex flex-col items-center gap-6 max-md:pt-30 max-md:pb-10">
                    <span 
                        style={{ color: Theme.lightcolor }} 
                        className="text-xs uppercase tracking-[0.3em] font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm"
                    >
                        Available for work
                    </span>
                    
                    <h1 className="text-2xl md:text-6xl font-black tracking-tight leading-[1.1]">
                        Where logic meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">imagination.</span>
                    </h1>
                    
                    <p className="text-sm md:text-lg text-gray-300 max-w-2xl leading-relaxed">
                        I build fast, reliable websites that look great and work perfectly. From the database to the front design, I handle it all.
                    </p>
                    
                    {/* Hero Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 w-full sm:w-auto">
                        <Link 
                            href="/projects" 
                            style={{ backgroundColor: Theme.lightcolor }} 
                            className="w-full sm:w-auto text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 hover:scale-[1.02] transition-all text-center shadow-lg shadow-white/5"
                        >
                            View Projects
                        </Link>
                        <Link 
                            href="/contact" 
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium px-8 py-3 rounded-full hover:scale-[1.02] transition-all text-center backdrop-blur-md"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Decorative bottom fade out arrow indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50 hidden sm:block">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </main>

            {/* 3. ABOUT / CAPABILITIES SECTION */}
            <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Building Things That Work</h2>
                    <p className="text-gray-400 leading-relaxed">
                        I bridge the gap between clean designs and strong backends. Using modern tools, I write code that is fast, easy to maintain, and looks great on any screen.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <h4 className="font-bold text-xl" style={{ color: Theme.lightcolor }}>Frontend</h4>
                            <p className="text-xs text-gray-500 mt-1">Next.js, React, Tailwind CSS, TypeScript</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <h4 className="font-bold text-xl" style={{ color: Theme.lightcolor }}>Backend</h4>
                            <p className="text-xs text-gray-500 mt-1">Node.js, Postgres, REST APIs</p>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-video md:aspect-square bg-gradient-to-tr from-gray-900 to-gray-800 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden group">
                    {/* Subtle mesh background element */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0,transparent_60%)] group-hover:scale-120 transition-transform duration-700" />
                    <Image 
                        src="/star.png" 
                        alt="Core Graphics" 
                        width={180} 
                        height={180} 
                        className="opacity-70 group-hover:rotate-12 transition-transform duration-500"
                    />
                </div>
            </section>

            {/* 4. FEATURED PROJECTS QUICK GRID */}
            <section className="py-20 bg-gray-900/40 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Selected Works</p>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                        </div>
                        <Link href="/projects" className="text-sm font-medium hover:underline flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                            All Projects <span>&rarr;</span>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((proj, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative aspect-[16/10] bg-gray-900 rounded-2xl border border-white/10 overflow-hidden mb-4 flex items-center justify-center">
                                    <Image 
                                        src={proj.image} 
                                        alt={proj.title} 
                                        width={60} 
                                        height={60} 
                                        className="opacity-40 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500"
                                    />
                                </div>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">{proj.tag}</span>
                                <h3 className="text-xl font-bold mt-3 group-hover:text-gray-300 transition-colors">{proj.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">{proj.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION (FOOTER ELEMENT) */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <div className="p-12 rounded-3xl bg-gradient-to-b from-gray-900 to-transparent border border-white/10 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <h2 className="text-3xl font-bold">Have an idea?</h2>
                    <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
                        Let's chat about your project and build something awesome together.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact" 
                            style={{ backgroundColor: Theme.lightcolor }}
                            className="text-black font-semibold px-8 py-3 rounded-full hover:opacity-95 transition-opacity inline-block"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}