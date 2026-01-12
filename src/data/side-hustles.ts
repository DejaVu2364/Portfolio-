import { Flame, Brain, Bot, Settings, Palette, Wallet, Cloud, Zap, Lightbulb, Gamepad2, BarChart3, Stethoscope } from "lucide-react"
import { LucideIcon } from "lucide-react"

// Icon name to component mapping
export const iconMap: Record<string, LucideIcon> = {
    Flame,
    Brain,
    Bot,
    Settings,
    Palette,
    Wallet,
    Cloud,
    Zap,
    Lightbulb,
    Gamepad2,
    BarChart3,
    Stethoscope
}

export interface SideHustle {
    slug: string
    title: string
    tagline: string
    description: string[]
    features: string[]
    techStack: string[]
    liveUrl?: string
    githubUrl?: string
    specialFeatures?: {
        title: string
        description: string
        iconName: string
    }[]
    iconName: string
    color: string
}

export const sideHustles: SideHustle[] = [
    {
        slug: "yeet",
        title: "Yeet 💀",
        tagline: "Because apparently I need an app to roast me into studying. Tracks scores, runs pomodoro sessions, and judges you with 50+ comments your disappointed parents wish they'd written.",
        description: [
            "A study tracker built by a medical student, for students who need a little roasting to stay motivated.",
            "The app gamifies studying through score tracking with visual trend lines, a pomodoro timer with 50+ rotating Gen Z-style comments (ranging from \"you're cooking fr 🍳\" to existential disappointment), streak counters, and weekly comparison indicators.",
            "Built with a \"shame-motivated\" design philosophy — because positive reinforcement is overrated."
        ],
        features: [
            "📊 Score trend visualization with SVG line charts",
            "🍅 Pomodoro timer with session tracking",
            "💬 50 rotating motivational/roasting comments",
            "🔥 Day streak counter (22-day habit milestone)",
            "📈 Weekly comparison indicator (+/-% vs last week)",
            "🎨 Gen Z aesthetic (dark mode, emoji-heavy, quirky copy)"
        ],
        techStack: ["Flask", "Python", "JavaScript", "CSS", "Railway"],
        liveUrl: "https://yeet.study",
        githubUrl: "https://github.com/DejaVu2364/yeet",
        specialFeatures: [
            {
                title: "💡 Smart Light Integration",
                description: "Yeet is linked to the smart bulb in my room. When my scores are bad, the light turns red — a constant, glowing reminder that I'm slacking. As scores improve, it shifts through amber to green. It's physical accountability meets digital tracking. You can ignore an app notification. You can't ignore your entire room turning red.",
                iconName: "Lightbulb"
            }
        ],
        iconName: "Flame",
        color: "from-blue-500/15 to-cyan-500/15"
    }
]

export function getSideHustleBySlug(slug: string): SideHustle | undefined {
    return sideHustles.find(project => project.slug === slug)
}

export function getAllSideHustleSlugs(): string[] {
    return sideHustles.map(project => project.slug)
}
