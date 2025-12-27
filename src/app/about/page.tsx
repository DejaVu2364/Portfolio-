"use client"

import { motion } from "framer-motion"
import {
    Globe,
    GraduationCap,
    Heart,
    MapPin
} from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="text-sm text-[#20E6E6] uppercase tracking-wider mb-4 block">
                        About Me
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
                        I build things that{" "}
                        <span className="font-serif italic gradient-text">matter</span>.
                    </h1>
                </motion.div>
            </section>

            {/* The Story */}
            <section className="container-custom mb-20">
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Story - takes 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                I&apos;m Harikrishnan — a doctor learning to heal systems, not just patients.
                            </p>

                            <p>
                                During my time at JJM Medical College, I noticed something: hospitals
                                had amazing doctors but terrible coordination. Patients waited hours
                                because beds weren&apos;t tracked. Paperwork piled up. Good people were
                                stuck in broken workflows.
                            </p>

                            <p>
                                So I started building. <span className="text-white">MedFlow AI</span> was
                                my answer — an AI system to help hospitals run smarter. Then came{" "}
                                <span className="text-white">Seva AI</span>, to help people discover
                                government schemes they never knew existed.
                            </p>

                            <p>
                                But I&apos;ve never been just about code. I spent years in political PR,
                                running digital campaigns for elections, building teams at{" "}
                                <span className="text-white">SS Care Trust</span>, and directing a{" "}
                                <span className="text-white">documentary</span> that told a story
                                I believed needed telling.
                            </p>

                            <p className="text-white/90 border-l-2 border-[#20E6E6] pl-6 italic">
                                I believe technology should serve people who are usually forgotten.
                                That&apos;s the thread connecting everything I do.
                            </p>
                        </div>
                    </motion.div>

                    {/* Quick Facts - takes 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <GraduationCap size={20} className="text-[#20E6E6] mb-3" />
                            <div className="text-white font-medium mb-1">Education</div>
                            <div className="text-sm text-white/50">
                                MBBS Intern<br />
                                JJM Medical College, Davangere
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <MapPin size={20} className="text-[#20E6E6] mb-3" />
                            <div className="text-white font-medium mb-1">Based in</div>
                            <div className="text-sm text-white/50">
                                Karnataka, India
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <Globe size={20} className="text-[#20E6E6] mb-3" />
                            <div className="text-white font-medium mb-1">Languages</div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["English", "Kannada", "Hindi", "Malayalam"].map((lang) => (
                                    <span key={lang} className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <Heart size={20} className="text-[#20E6E6] mb-3" />
                            <div className="text-white font-medium mb-3">What drives me</div>
                            <div className="space-y-2 text-sm text-white/50">
                                <div>→ Building for the underserved</div>
                                <div>→ Stories that create change</div>
                                <div>→ Systems that just work</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline - Simplified */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <h2 className="text-2xl font-semibold text-white mb-8">The journey</h2>

                    <div className="space-y-6">
                        {[
                            { year: "2019", event: "Started medical school" },
                            { year: "2020", event: "Founded Echelon Live — media & PR startup" },
                            { year: "2022", event: "Led TEDxJJMMC design • Co-founded SS Care Trust Student Wing" },
                            { year: "2023", event: "Directed documentary • Led election campaigns" },
                            { year: "2024", event: "Built MedFlow AI & Seva AI • Received AMEE research grant" },
                            { year: "2025", event: "MBBS Intern • Scaling impact" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="flex gap-6 items-baseline"
                            >
                                <span className="text-[#20E6E6] font-medium w-12 shrink-0">{item.year}</span>
                                <span className="text-white/60">{item.event}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
