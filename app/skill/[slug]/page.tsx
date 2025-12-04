import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { skills, getSkillBySlug, getSkillsByCategory } from "@/data/skills";
import { CopyButton } from "@/components/CopyButton";
import { SkillCard } from "@/components/SkillCard";
import type { Metadata } from "next";

interface SkillPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export async function generateMetadata({
  params,
}: SkillPageProps): Promise<Metadata> {
  const skill = getSkillBySlug(params.slug);

  if (!skill) {
    return {
      title: "Skill Not Found - Claude Skills",
    };
  }

  return {
    title: `${skill.title} - Claude Skills`,
    description: skill.description,
    keywords: skill.tags,
  };
}

export default function SkillPage({ params }: SkillPageProps) {
  const skill = getSkillBySlug(params.slug);

  if (!skill) {
    notFound();
  }

  const relatedSkills = getSkillsByCategory(skill.category)
    .filter((s) => s.id !== skill.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all skills
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl font-bold">{skill.title}</h1>
              <CopyButton text={skill.content} />
            </div>
            <p className="text-lg text-muted-foreground">{skill.description}</p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            {skill.author && (
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {skill.author}
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(skill.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <Link
              href={`/category/${skill.category}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Tag className="h-4 w-4" />
              {skill.category}
            </Link>
          </div>

          {/* Content */}
          <div className="relative">
            <div className="absolute top-3 right-3">
              <CopyButton text={skill.content} variant="outline" />
            </div>
            <pre className="bg-muted rounded-lg p-6 overflow-x-auto text-sm leading-relaxed whitespace-pre-wrap">
              <code>{skill.content}</code>
            </pre>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Tags */}
          <div className="rounded-lg border border-border bg-card p-5 mb-6">
            <h3 className="font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="rounded-lg border border-border bg-card p-5 mb-6">
            <h3 className="font-semibold mb-3">How to Use</h3>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>Click the &quot;Copy&quot; button above</li>
              <li>
                Create a new file called <code className="bg-muted px-1 rounded">SKILL.md</code> in your project
              </li>
              <li>Paste the content into the file</li>
              <li>Reference the skill in your Claude conversations</li>
            </ol>
          </div>

          {/* Related Skills */}
          {relatedSkills.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Related Skills</h3>
              <div className="space-y-3">
                {relatedSkills.map((relatedSkill) => (
                  <Link
                    key={relatedSkill.id}
                    href={`/skill/${relatedSkill.slug}`}
                    className="block rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-sm mb-1">
                      {relatedSkill.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {relatedSkill.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
