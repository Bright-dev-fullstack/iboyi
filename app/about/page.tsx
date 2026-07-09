// import { Theme } from "@/components/Theme";

import { Theme } from "@/components/Theme";

export default function About() {
    return(
        <main className="min-h-screen bg-gray-950 text-white pt-32 pb-24 px-6 selection:bg-white/20">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* Header Section */}
                <div className="space-y-4 max-w-2xl">
                     <span 
                      style={{ color: Theme.lightcolor }} 
                      className="text-xs uppercase tracking-[0.25em] font-bold"
                     >
                      Learn more about the developer
                     </span>
                     <h1 className="text-4xl sm:text-5xl font-black tracking-tight">About Me</h1>
                </div>
                
                {/* Content Section - Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-800">
                    
                    {/* Bio Section */}
                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                        <p>
                            Hi, I'm Bright Iboyi. I'm a full-stack developer who loves turning good ideas into real, working websites. 
                        </p>
                        <p>
                            For me, building a website is all about balance. I like figuring out the behind-the-scenes logic that makes a site fast and reliable, but I also care a lot about how it looks and feels for the people using it. That is exactly what I mean when I say I work where logic meets imagination.
                        </p>
                        <p>
                            I enjoy building things from the ground up. Whether it is a job board, an API tool, or a local business site, I take pride in writing clean code that gets the job done without making things overly complicated. I just want to build cool things that work well.
                        </p>
                    </div>

                    {/* Skills & Services Box */}
                    <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 space-y-8">
                        
                        {/* Stack */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-white">My Go-To Tools</h2>
                            <p className="text-sm text-gray-400 mb-6">
                                The tech I use every day to bring projects to life.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-md text-sm text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-white">What I Do</h2>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span style={{ color: Theme.lightcolor }}>▹</span> Building websites from scratch
                                </li>
                                <li className="flex items-center gap-3">
                                    <span style={{ color: Theme.lightcolor }}>▹</span> Setting up databases and APIs
                                </li>
                                <li className="flex items-center gap-3">
                                    <span style={{ color: Theme.lightcolor }}>▹</span> Creating clean, easy-to-use designs
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                
            </div>
        </main>
    )
}