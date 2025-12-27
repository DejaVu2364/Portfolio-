"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Brain, Building2, Laptop, ExternalLink, Play } from "lucide-react"

const products = [
    {
        name: "MedFlow AI",
        tagline: "Hospital operations platform",
        description: "AI-powered bed management, discharge prediction, and clinical documentation. Built for 500+ bed hospitals.",
        status: "Live",
        statusColor: "bg-emerald-500",
        icon: Brain,
        gradient: "from-blue-500/20 to-cyan-500/20",
        url: "https://medflow-ai-4-15303273-59d4d.web.app/",
        metrics: "Real-time • FHIR-ready"
    },
    {
        name: "Seva AI",
        tagline: "Government scheme discovery",
        description: "Helps citizens find welfare schemes they qualify for. Voice-first, multilingual interface.",
        status: "Prototype",
        statusColor: "bg-amber-500",
        icon: Building2,
        gradient: "from-emerald-500/20 to-teal-500/20",
        url: "https://seva-ai-beryl.vercel.app/#hero",
        metrics: "Voice AI • Regional languages"
    },
    {
        name: "AstraAI",
        tagline: "Personal AI assistant",
        description: "Multi-agent AI for automating research, writing, and scheduling workflows.",
        status: "Active",
        statusColor: "bg-blue-500",
        icon: Laptop,
        gradient: "from-purple-500/20 to-pink-500/20",
        url: "https://astra-intel-nexus.lovable.app/",
        metrics: "Multi-agent • Automation"
    },
]

export default function FeaturedProjects() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#18A5FF]/5 to-transparent rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-[#20E6E6] uppercase tracking-wider mb-4 block">
                        Products I&apos;ve Shipped
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
                        Built to <span className="font-serif italic gradient-text">solve</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl mx-auto">
                        3 AI products. Each solving a real problem I witnessed firsthand.
                    </p>
                </motion.div>

                {/* Product cards */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {products.map((product, i) => (
                        <motion.a
                            key={product.name}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${product.gradient} border border-white/5 hover:border-white/15 transition-all overflow-hidden`}
                        >
                            {/* Status badge */}
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-black/30 backdrop-blur">
                                    <span className={`w-1.5 h-1.5 rounded-full ${product.statusColor}`} />
                                    {product.status}
                                </span>
                            </div>

                            <product.icon size={32} className="text-white/70 mb-4" />

                            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#20E6E6] transition-colors flex items-center gap-2">
                                {product.name}
                                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-sm text-white/60 mb-3">{product.tagline}</p>
                            <p className="text-sm text-white/40 mb-4">{product.description}</p>

                            <div className="text-xs text-[#20E6E6]/70">{product.metrics}</div>
                        </motion.a>
                    ))}
                </div>

                {/* Documentary highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-white/5"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                                <Play size={24} className="text-amber-400 ml-0.5" fill="currentColor" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">From Roots to Wings</h3>
                                <p className="text-sm text-white/50">Documentary • Director & Producer</p>
                            </div>
                        </div>
                        <a
                            href="https://youtu.be/y3Ved6H7dEg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/80"
                        >
                            Watch Documentary
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
