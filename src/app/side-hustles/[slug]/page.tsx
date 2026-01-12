import { notFound } from "next/navigation"
import { getSideHustleBySlug, getAllSideHustleSlugs } from "@/data/side-hustles"
import { ProjectDetailContent } from "./ProjectDetailContent"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const slugs = getAllSideHustleSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const project = getSideHustleBySlug(slug)

    if (!project) {
        return { title: "Project Not Found" }
    }

    return {
        title: `${project.title} | Harikrishnan S`,
        description: project.tagline,
    }
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params
    const project = getSideHustleBySlug(slug)

    if (!project) {
        notFound()
    }

    return <ProjectDetailContent project={project} />
}
