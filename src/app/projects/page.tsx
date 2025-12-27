"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Brain, Building2, Laptop, Film, Play, ExternalLink, Globe, Users } from "lucide-react"

const aiProjects = [
    {
        id: "medflow-ai",
        title: "MedFlow AI",
        tagline: "AI for hospital operations",
        description: "Helps hospitals manage beds, predict discharges, and reduce paperwork. Built because I saw the chaos firsthand.",
        status: "Live",
        icon: Brain,
        color: "from-blue-500/20 to-cyan-500/20",
        url: "https://medflow-ai-4-15303273-59d4d.web.app/",
        tags: ["React", "Firebase", "Gemini AI"]
    },
    {
        id: "seva-ai",
        title: "Seva AI",
        tagline: "Government scheme discovery",
        description: "Helps citizens find welfare schemes they qualify for. Voice support in local languages.",
        status: "Prototype",
        icon: Building2,
        color: "from-emerald-500/20 to-teal-500/20",
        url: "https://seva-ai-beryl.vercel.app/#hero",
        tags: ["NLP", "Voice AI", "Civic Tech"]
    },
    {
        id: "astra-ai",
        title: "AstraAI",
        tagline: "Personal AI assistant",
        description: "Multi-agent AI for automating workflows. Research, writing, scheduling — one interface.",
        status: "Active",
        icon: Laptop,
        color: "from-purple-500/20 to-pink-500/20",
        url: "https://astra-intel-nexus.lovable.app/",
        tags: ["Multi-Agent", "LLM", "Automation"]
    },
]

const documentaries = [
    {
        title: "From Roots to Wings",
        subtitle: "The Dr. Prabha Mallikarjun Story",
        year: "2023",
        url: "https://youtu.be/y3Ved6H7dEg",
    },
    {
        title: "SS Care Trust",
        subtitle: "Community Impact Documentary",
        year: "2023",
        url: "https://youtu.be/XvLFKq3XsKE",
    },
]

const otherWork = [
    { title: "Echelon Live", desc: "Media & PR startup • 4+ years", icon: Users },
    { title: "Political Campaigns", desc: "State & Lok Sabha elections", icon: Globe },
    { title: "TEDx Design", desc: "TEDxJJMMC + TEDx Davangere", icon: Film },
    { title: "SS Care Trust", desc: "Student Wing Co-Founder", icon: Users },
]

export default function ProjectsPage() {
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
                        Projects
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Things I&apos;ve{" "}
                        <span className="font-serif italic gradient-text">built</span>
                    </h1>
                    <p className="text-lg text-white/60">
                        Some solve problems I saw. Some tell stories I believed in.
                    </p>
                </motion.div>
            </section>

            {/* AI Products */}
            <section className="container-custom mb-24">
                <h2 className="text-xl font-medium text-white mb-10">AI Products</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {aiProjects.map((project, i) => (
                        <motion.a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group p-6 rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 hover:border-white/15 transition-all`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <project.icon size={24} className="text-white/70" />
                                <span className={`text-xs px-2 py-1 rounded-full ${project.status === "Live" ? "bg-emerald-500/20 text-emerald-300" :
                                    project.status === "Active" ? "bg-blue-500/20 text-blue-300" :
                                        "bg-amber-500/20 text-amber-300"
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#20E6E6] transition-colors flex items-center gap-2">
                                {project.title}
                                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-sm text-white/50 mb-3">{project.tagline}</p>
                            <p className="text-sm text-white/40 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-white/30 bg-white/5 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Documentaries */}
            <section className="container-custom mb-24">
                <h2 className="text-xl font-medium text-white mb-10">Documentary Films</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {documentaries.map((doc, i) => (
                        <motion.a
                            key={doc.title}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/5 hover:border-white/15 transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Film size={20} className="text-amber-400/70" />
                                <span className="text-sm text-white/40">{doc.year}</span>
                            </div>

                            <h3 className="text-lg font-medium text-white mb-1 group-hover:text-amber-300 transition-colors">
                                {doc.title}
                            </h3>
                            <p className="text-sm text-white/50 mb-4">{doc.subtitle}</p>

                            <div className="flex items-center gap-2 text-sm text-red-400/70 group-hover:text-red-400 transition-colors">
                                <Play size={14} />
                                Watch on YouTube
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Other Work */}
            <section className="container-custom">
                <h2 className="text-xl font-medium text-white mb-8">Other Work</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {otherWork.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                        >
                            <item.icon size={18} className="text-white/40 mb-2" />
                            <div className="text-white font-medium text-sm">{item.title}</div>
                            <div className="text-xs text-white/40">{item.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
