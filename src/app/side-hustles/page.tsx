"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { sideHustles, iconMap } from "@/data/side-hustles"

export default function SideHustlesPage() {
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
                        Side Hustles
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Weekend{" "}
                        <span className="font-serif italic gradient-text">builds</span>
                    </h1>
                    <p className="text-lg text-white/60">
                        Smaller projects, experiments, and things I built for fun or curiosity.
                    </p>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sideHustles.map((project, i) => {
                        const IconComponent = iconMap[project.iconName]
                        return (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <Link
                                    href={`/side-hustles/${project.slug}`}
                                    className={`group block p-6 rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200`}
                                >
                                    {IconComponent && <IconComponent size={24} className="text-[#20E6E6] mb-4" />}

                                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#20E6E6] transition-colors duration-200 flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                                        {project.tagline}
                                    </p>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
