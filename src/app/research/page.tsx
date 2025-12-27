"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, ExternalLink, Trophy } from "lucide-react"

export default function ResearchPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Header */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <span className="text-sm text-[#20E6E6] uppercase tracking-wider mb-4 block">
                        Research
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Academic <span className="font-serif italic gradient-text">work</span>
                    </h1>
                    <p className="text-lg text-white/60">
                        Grants, research interests, and contributions to healthcare
                        and medical education.
                    </p>
                </motion.div>
            </section>

            <div className="container-custom">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Grant */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Award size={20} className="text-[#20E6E6]" />
                                <h2 className="text-xl font-medium text-white">Grants & Recognition</h2>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                                        Awarded
                                    </span>
                                    <span className="text-sm text-white/40">2024</span>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">AMEE FORLER Research Grant</h3>
                                <p className="text-white/50 text-sm mb-3">
                                    Association for Medical Education in Europe
                                </p>
                                <p className="text-white/60">
                                    Competitive international grant for medical education research.
                                    One of few recipients from India.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 mt-4">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                                        Grand Finalist
                                    </span>
                                    <span className="text-sm text-white/40">Dec 2025</span>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Docathon™ 2025</h3>
                                <p className="text-white/50 text-sm mb-3">
                                    CellStrat × Bangalore Medical College & Research Institute
                                </p>
                                <p className="text-white/60">
                                    Healthcare AI innovation hackathon. Built AI solutions for
                                    clinical practice with cross-disciplinary teams.
                                </p>
                            </div>
                        </motion.div>

                        {/* Research Interests */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen size={20} className="text-[#20E6E6]" />
                                <h2 className="text-xl font-medium text-white">Research Interests</h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Healthcare AI",
                                    "Clinical Decision Support",
                                    "Medical Education",
                                    "Hospital Operations",
                                    "Health Informatics",
                                    "EMR Systems"
                                ].map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-white/60"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                        >
                            <h3 className="text-white font-medium mb-4">Academic Profiles</h3>
                            <div className="space-y-3">
                                {["Google Scholar", "ORCID", "ResearchGate"].map((profile) => (
                                    <div key={profile} className="flex items-center justify-between">
                                        <span className="text-white/60">{profile}</span>
                                        <span className="text-xs text-white/30">Coming soon</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-[#18A5FF]/10 to-[#20E6E6]/10 border border-white/5"
                        >
                            <Trophy size={20} className="text-[#20E6E6] mb-3" />
                            <h3 className="text-white font-medium mb-2">Focus Area</h3>
                            <p className="text-sm text-white/50">
                                Building AI systems for healthcare that are
                                clinically validated and actually useful.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
