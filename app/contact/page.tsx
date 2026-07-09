"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Theme } from "@/components/Theme";

// 1. Validation Schema
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    // 2. Formik Setup
    const formik = useFormik({
        initialValues: { 
            name: "", 
            email: "", 
            subject: "", 
            message: "" 
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                // Sending data to your API route
                const response = await fetch("/api/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    setStatus("success");
                    resetForm();
                } else {
                    console.error("Server error:", response.statusText);
                    setStatus("error");
                }
            } catch (error) {
                console.error("Fetch failed:", error);
                setStatus("error");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <main className="min-h-screen bg-gray-950 text-white pt-32 pb-16 px-6 selection:bg-white/20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                
                {/* LEFT SIDE: Heading & Contact Details */}
                <div className="md:col-span-5 space-y-6">
                    <div className="space-y-3">
                        <span style={{ color: Theme.lightcolor }} className="text-xs uppercase tracking-[0.2em] font-semibold">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                            Let’s build something real.
                        </h1>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        Have a project in mind, looking for a freelancer, or just want to talk code? Drop a message and I’ll get back to you within 24 hours.
                    </p>
                </div>

                {/* RIGHT SIDE: Interactive Contact Form */}
                <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
                    {status === "success" ? (
                        <div className="text-center py-12 space-y-4 animate-fadeIn">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-xl font-bold">Message Sent!</h3>
                            <button onClick={() => setStatus("idle")} className="text-xs text-gray-400 underline hover:text-white transition-colors">Send another message</button>
                        </div>
                    ) : (
                        <form onSubmit={formik.handleSubmit} className="space-y-5">
                            {status === "error" && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* NAME FIELD */}
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className={`w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 focus:outline-none transition-all`}
                                        placeholder="Bright"
                                    />
                                    {formik.touched.name && formik.errors.name && <p className="text-red-400 text-[10px] mt-1">{formik.errors.name}</p>}
                                </div>

                                {/* EMAIL FIELD */}
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className={`w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 focus:outline-none transition-all`}
                                        placeholder="bright@example.com"
                                    />
                                    {formik.touched.email && formik.errors.email && <p className="text-red-400 text-[10px] mt-1">{formik.errors.email}</p>}
                                </div>
                            </div>

                            {/* SUBJECT FIELD */}
                            <div className="space-y-1.5">
                                <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.subject}
                                    className={`w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 focus:outline-none transition-all`}
                                    placeholder="Project Partnership"
                                />
                                {formik.touched.subject && formik.errors.subject && <p className="text-red-400 text-[10px] mt-1">{formik.errors.subject}</p>}
                            </div>

                            {/* MESSAGE FIELD */}
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    rows={5}
                                    className={`w-full text-sm px-4 py-3 rounded-xl bg-gray-900/50 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-600 focus:outline-none transition-all resize-none`}
                                    placeholder="Tell me about what you're working on..."
                                />
                                {formik.touched.message && formik.errors.message && <p className="text-red-400 text-[10px] mt-1">{formik.errors.message}</p>}
                            </div>

                            <button 
                                type="submit"
                                disabled={formik.isSubmitting}
                                style={{ backgroundColor: Theme.lightcolor }}
                                className="w-full text-black font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 mt-2"
                            >
                                {formik.isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}