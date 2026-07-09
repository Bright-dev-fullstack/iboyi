"use client";

import { useState, FormEvent } from "react";
import { Theme } from "@/components/Theme";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        // 1. Grab all the data from the form inputs
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            // 2. Send the data to our secure API route
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Failed to send message:", error);
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-gray-950 text-white pt-32 pb-16 px-6 selection:bg-white/20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                
                {/* LEFT SIDE: Heading & Contact Details */}
                <div className="md:col-span-5 space-y-6">
                    <div className="space-y-3">
                        <span 
                            style={{ color: Theme.lightcolor }} 
                            className="text-xs uppercase tracking-[0.2em] font-semibold"
                        >
                            Get In Touch
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                            Let’s build something real.
                        </h1>
                    </div>
                    
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        Have a project in mind, looking for a freelancer, or just want to talk code? Drop a message and I’ll get back to you within 24 hours.
                    </p>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <div>
                            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Email Directly</h4>
                            <a href="mailto:bright@example.com" className="text-sm hover:underline transition-all block mt-1 hover:text-gray-300">
                                bright@example.com
                            </a>
                        </div>
                        <div>
                            <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Current Location</h4>
                            <p className="text-sm text-gray-300 mt-1">Abuja, Nigeria</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Interactive Contact Form */}
                <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
                    {status === "success" ? (
                        <div className="text-center py-12 space-y-4 animate-fadeIn">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Message Sent!</h3>
                            <p className="text-sm text-gray-400 max-w-sm mx-auto">
                                Thanks for reaching out. I've received your email and will get back to you shortly.
                            </p>
                            <button 
                                onClick={() => setStatus("idle")} 
                                className="text-xs text-gray-400 underline hover:text-white transition-colors pt-2"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {status === "error" && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                                    {/* Added name="name" */}
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name" 
                                        required 
                                        placeholder="Bright"
                                        className="w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                                    {/* Added name="email" */}
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        required 
                                        placeholder="bright@example.com"
                                        className="w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                                {/* Added name="subject" */}
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject"
                                    required 
                                    placeholder="Project Partnership"
                                    className="w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                                {/* Added name="message" */}
                                <textarea 
                                    id="message"
                                    name="message"
                                    required 
                                    rows={5}
                                    placeholder="Tell me about what you're working on..."
                                    className="w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all resize-none"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={status === "submitting"}
                                style={{ backgroundColor: Theme.lightcolor }}
                                className="w-full text-black font-bold text-sm py-3.5 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none mt-2 shadow-lg shadow-white/5"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}