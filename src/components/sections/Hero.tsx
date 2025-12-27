"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Award, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[#050508]" />

            {/* Animated gradient orbs */}
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[#18A5FF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#20E6E6]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-[#6366F1]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Main Content */}
            <div className="container-custom relative z-10 text-center flex-1 flex flex-col justify-center">
                <div className="max-w-5xl mx-auto">

                    {/* Achievement badges - Social proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-3 mb-8 flex-wrap"
                    >
                        <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                            <Award size={12} />
                            Docathon 2025 Grand Finalist
                        </span>
                        <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                            <Sparkles size={12} />
                            AMEE Research Grant
                        </span>
                    </motion.div>

                    {/* The name - BIG and BOLD */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6"
                    >
                        <span className="font-serif italic bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                            Dr. Harikrishnan
                        </span>
                    </motion.h1>

                    {/* Subtitle - Startup language */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/50 mb-4"
                    >
                        Building the future of{" "}
                        <span className="text-[#20E6E6]">healthcare AI</span>
                    </motion.p>

                    {/* MedFlow callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-6"
                    >
                        <a
                            href="https://medflow-ai-4-15303273-59d4d.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#18A5FF]/10 to-[#20E6E6]/10 border border-[#20E6E6]/20 hover:border-[#20E6E6]/40 transition-all group"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white/80 group-hover:text-white transition-colors">
                                <span className="font-semibold text-white">MedFlow AI</span> — Hospital operations platform, live now
                            </span>
                            <ExternalLink size={14} className="text-white/40 group-hover:text-[#20E6E6] transition-colors" />
                        </a>
                    </motion.div>

                    {/* Value prop */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base md:text-lg text-white/40 mb-8 max-w-2xl mx-auto"
                    >
                        Doctor-founder building AI tools for hospitals. Shipped 3 products.
                        Directed documentaries. Led 50+ volunteers on political campaigns.
                    </motion.p>

                    {/* CTAs - Investor focused */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center gap-4 flex-wrap"
                    >
                        <a
                            href="https://medflow-ai-4-15303273-59d4d.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#18A5FF] to-[#20E6E6] text-black font-semibold hover:shadow-[0_0_40px_rgba(32,230,230,0.3)] transition-all flex items-center gap-2"
                        >
                            See MedFlow AI Live
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link
                            href="/projects"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            All Projects
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom stats - now in flow, not absolute */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative z-10 mt-16"
            >
                <div className="flex items-center justify-center gap-8 md:gap-12">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#18A5FF] to-[#20E6E6] bg-clip-text text-transparent">3</div>
                        <div className="text-xs text-white/40 uppercase tracking-wider">AI Products</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">2</div>
                        <div className="text-xs text-white/40 uppercase tracking-wider">Documentaries</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">50+</div>
                        <div className="text-xs text-white/40 uppercase tracking-wider">Team Led</div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
