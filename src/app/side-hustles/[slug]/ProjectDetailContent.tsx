"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react"
import { SideHustle, iconMap } from "@/data/side-hustles"

interface ProjectDetailContentProps {
    project: SideHustle
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
    const IconComponent = iconMap[project.iconName]

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container-custom max-w-4xl">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/side-hustles"
                        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Side Hustles
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        {IconComponent && <IconComponent size={32} className="text-[#20E6E6]" />}
                        <h1 className="text-4xl md:text-5xl font-semibold text-white">
                            {project.title}
                        </h1>
                    </div>
                    <p className="text-lg text-white/60 max-w-2xl">
                        {project.tagline}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#18A5FF] to-[#20E6E6] text-black font-medium hover:shadow-[0_0_30px_rgba(32,230,230,0.3)] transition-all"
                            >
                                Try it Live
                                <ExternalLink size={16} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <Github size={16} />
                                View on GitHub
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* About Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-medium text-white mb-6">About</h2>
                    <div className="space-y-4">
                        {project.description.map((paragraph, i) => (
                            <p key={i} className="text-white/60 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </motion.section>

                {/* Features Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-medium text-white mb-6">Features</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                            >
                                <Check size={18} className="text-[#20E6E6] mt-0.5 shrink-0" />
                                <span className="text-white/70 text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Special Features Section */}
                {project.specialFeatures && project.specialFeatures.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mb-12"
                    >
                        {project.specialFeatures.map((feature, i) => {
                            const FeatureIcon = iconMap[feature.iconName]
                            return (
                                <div
                                    key={i}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/5"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {FeatureIcon && <FeatureIcon size={24} className="text-amber-400" />}
                                        <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                                    </div>
                                    <p className="text-white/60 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </motion.section>
                )}

                {/* Tech Stack Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <h2 className="text-xl font-medium text-white mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}
