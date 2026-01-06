import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
    { href: "https://github.com/DejaVu2364", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/harikrishnan", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/hurrryyyyy", icon: Twitter, label: "Twitter" },
    { href: "mailto:harikrishnan6465@gmail.com", icon: Mail, label: "Email" },
]

const footerLinks = [
    {
        title: "Navigate",
        links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/experience", label: "Experience" },
        ],
    },
    {
        title: "Connect",
        links: [
            { href: "/contact", label: "Contact" },
            { href: "/research", label: "Research" },
            { href: "#", label: "Resume" },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#0a0a0f]">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002A5C]/5 to-transparent pointer-events-none" />

            <div className="container-custom relative py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-semibold">
                                <span className="font-serif italic text-white">Dr. Harikrishnan</span>
                                <span className="gradient-text ml-1">S</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
                            Medical Innovator | AI Builder | Political PR Strategist.
                            Building systems that serve the underserved — in hospitals,
                            governance, and public service.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/5 border border-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wider">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Harikrishnan S. All rights reserved.
                    </p>
                    <p className="text-white/30 text-xs flex items-center gap-1">
                        Built with <Heart size={12} className="text-red-400" /> for impact.
                    </p>
                </div>
            </div>
        </footer>
    )
}
