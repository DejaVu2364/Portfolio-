"use client"

import { motion } from "framer-motion"
import {
    Stethoscope,
    Building2,
    Users,
    Calendar,
    MapPin,
    Film,
} from "lucide-react"

const experience = [
    {
        section: "Governance & Digital",
        icon: Building2,
        items: [
            {
                role: "Digital Marketing Lead",
                org: "SS Care Trust",
                period: "2023 – 2024",
                description: "Led digital strategy for election campaigns and built the social media operations from scratch.",
                highlights: ["State Assembly & Lok Sabha campaigns", "Co-architected Student Wing", "Built 50+ volunteer team"]
            },
            {
                role: "Director",
                org: "\"From Roots to Wings\" Documentary",
                period: "2024",
                description: "Directed and produced a documentary chronicling Dr. Prabha Mallikarjun's journey.",
                highlights: ["Full creative direction", "Script to screen", "Recognized for storytelling"]
            },
        ]
    },
    {
        section: "Creative & Media",
        icon: Film,
        items: [
            {
                role: "Design & Curation Lead",
                org: "TEDxJJMMC + TEDx Davangere",
                period: "2022 – 2023",
                description: "Led design for TEDx at medical college and contributed to city-wide TEDx Davangere event.",
                highlights: ["Brand design", "Speaker curation", "Media collaboration"]
            },
            {
                role: "Founder",
                org: "Echelon Live",
                period: "2026 – Present",
                description: "Establishing an Artist Management Company for talent representation and creative partnerships.",
                highlights: ["Artist management", "Brand partnerships", "Creative direction"]
            },
        ]
    },
    {
        section: "Medical",
        icon: Stethoscope,
        items: [
            {
                role: "MBBS Intern",
                org: "JJM Medical College",
                period: "2024 – Present",
                description: "Clinical rotations across departments. This is where I saw the gaps that led to MedFlow AI.",
                highlights: ["Patient care", "Clinical documentation", "Hospital operations observation"]
            },
            {
                role: "Grand Finalist",
                org: "Docathon™ 2025 — CellStrat × BMC&RI",
                period: "Dec 2025",
                description: "Healthcare innovation hackathon at Bangalore Medical College. Built AI solutions for clinical practice.",
                highlights: ["Medical informatics", "Predictive modeling", "Human-centered UX"]
            },
            {
                role: "AMEE Research Grant",
                org: "Association for Medical Education in Europe",
                period: "2020",
                description: "Awarded competitive international grant for medical education research.",
                highlights: ["International recognition", "Research methodology"]
            },
        ]
    },
]

export default function ExperiencePage() {
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
                        Experience
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Where I&apos;ve{" "}
                        <span className="font-serif italic gradient-text">grown</span>
                    </h1>
                    <p className="text-lg text-white/60">
                        From hospital wards to documentary sets to election campaigns —
                        each role taught me something new about building for people.
                    </p>
                </motion.div>
            </section>

            {/* Experience Grid */}
            <section className="container-custom">
                <div className="space-y-20">
                    {experience.map((section, sectionIndex) => (
                        <motion.div
                            key={section.section}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Section Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <section.icon size={20} className="text-[#20E6E6]" />
                                <h2 className="text-xl font-medium text-white">{section.section}</h2>
                            </div>

                            {/* Items */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {section.items.map((item, i) => (
                                    <motion.div
                                        key={item.role}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h3 className="text-lg font-medium text-white">{item.role}</h3>
                                                <div className="text-[#20E6E6] text-sm">{item.org}</div>
                                            </div>
                                            <span className="text-sm text-white/40 shrink-0">{item.period}</span>
                                        </div>

                                        <p className="text-white/50 text-sm mb-4">{item.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.highlights.map((h) => (
                                                <span key={h} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
