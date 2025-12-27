"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin, Download } from "lucide-react"

const socials = [
    { icon: Mail, label: "Email", value: "hello@harikrishnan.me", href: "mailto:hello@harikrishnan.me" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect", href: "https://linkedin.com/in/harikrishnan" },
    { icon: Github, label: "GitHub", value: "Code", href: "https://github.com/harikrishnan" },
    { icon: Twitter, label: "Twitter", value: "Updates", href: "https://twitter.com/harikrishnan" },
]

export default function ContactPage() {
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
                        Contact
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Let&apos;s <span className="font-serif italic gradient-text">connect</span>
                    </h1>
                    <p className="text-lg text-white/60">
                        Open to collaborations in healthcare AI, PR consulting,
                        or just a conversation about building things that matter.
                    </p>
                </motion.div>
            </section>

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-medium text-white">Get in touch</h2>

                        <div className="grid grid-cols-2 gap-4">
                            {socials.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                                >
                                    <item.icon size={20} className="text-[#20E6E6] mb-3" />
                                    <div className="text-white font-medium group-hover:text-[#20E6E6] transition-colors">
                                        {item.label}
                                    </div>
                                    <div className="text-sm text-white/40">{item.value}</div>
                                </a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                            <div className="flex items-center gap-3 mb-2">
                                <MapPin size={18} className="text-[#20E6E6]" />
                                <span className="text-white font-medium">Location</span>
                            </div>
                            <p className="text-white/50 text-sm">
                                Karnataka, India • Open to remote work worldwide
                            </p>
                        </div>

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-5 rounded-xl bg-gradient-to-r from-[#18A5FF]/10 to-[#20E6E6]/10 border border-white/5 hover:border-white/15 transition-colors"
                        >
                            <Download size={20} className="text-[#20E6E6]" />
                            <div>
                                <div className="text-white font-medium">Download Resume</div>
                                <div className="text-sm text-white/40">PDF format</div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Right: What I can help with */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-medium text-white">What I can help with</h2>

                        <div className="space-y-4">
                            {[
                                { title: "Healthcare AI Consulting", desc: "EMR systems, hospital operations, clinical AI" },
                                { title: "Technical Co-founding", desc: "Building healthcare and civic tech products" },
                                { title: "Political PR & Strategy", desc: "Campaigns, digital media, communication" },
                                { title: "Documentary & Storytelling", desc: "Creative direction, narrative strategy" },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-5 rounded-xl bg-white/[0.02] border border-white/5"
                                >
                                    <div className="text-white font-medium mb-1">{item.title}</div>
                                    <div className="text-sm text-white/50">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-white/40 italic">
                            Or just reach out to say hi — I love meeting people who care
                            about building things that matter.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
