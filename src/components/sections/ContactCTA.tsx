"use client"

import { motion } from "framer-motion"
import { Mail, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-[#0a0a0f]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#18A5FF]/10 to-transparent rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="text-sm text-[#20E6E6] uppercase tracking-wider mb-4 block">
                        Let&apos;s Talk
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Looking for a{" "}
                        <span className="font-serif italic gradient-text">technical co-founder</span>?
                    </h2>
                    <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
                        Open to collaborations in healthcare AI, civic tech, and startups
                        that create real-world impact.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:harikrishnan6465@gmail.com"
                            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#18A5FF] to-[#20E6E6] text-black font-semibold hover:shadow-[0_0_40px_rgba(32,230,230,0.3)] transition-all flex items-center justify-center gap-2"
                        >
                            <Mail size={18} />
                            Get in Touch
                        </a>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            <Calendar size={18} />
                            Schedule a Call
                        </Link>
                    </div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex items-center justify-center gap-8 text-sm text-white/40"
                    >
                        <Link href="/projects" className="hover:text-white transition-colors">
                            View Projects →
                        </Link>
                        <a
                            href="https://linkedin.com/in/harikrishnan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            LinkedIn →
                        </a>
                        <a
                            href="https://github.com/DejaVu2364"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            GitHub →
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
