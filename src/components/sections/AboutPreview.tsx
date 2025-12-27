"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

const highlights = [
    {
        icon: GraduationCap,
        title: "Doctor-Founder",
        description: "MBBS Intern building from clinical observation",
    },
    {
        icon: Briefcase,
        title: "3 Products Shipped",
        description: "MedFlow AI, Seva AI, AstraAI",
    },
    {
        icon: Users,
        title: "50+ Team Built",
        description: "Political campaigns & volunteer mobilization",
    },
]

export default function AboutPreview() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a1020] to-[#0a0a0f]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Founder story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm text-[#20E6E6] uppercase tracking-wider mb-4 block">
                            The Founder
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                            From hospital wards to{" "}
                            <span className="font-serif italic gradient-text">shipping products</span>
                        </h2>

                        <div className="space-y-4 text-lg text-white/60 leading-relaxed mb-8">
                            <p>
                                I saw hospitals drowning in inefficiency — doctors doing paperwork instead of
                                patient care. Beds untracked. Discharges delayed. The system was broken.
                            </p>
                            <p>
                                So I built MedFlow AI. Then Seva AI to help citizens find government schemes.
                                I&apos;ve also directed documentaries and run political campaigns.
                            </p>
                            <p className="text-white/80 font-medium">
                                I ship products. That&apos;s what I do.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-[#20E6E6] hover:text-white transition-colors group"
                        >
                            Read full story
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#18A5FF]/20 to-[#20E6E6]/20 flex items-center justify-center shrink-0">
                                    <item.icon size={22} className="text-[#20E6E6]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                                    <p className="text-sm text-white/50">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
