"use client";

import Link from "next/link";
import { FileText, Code, Search, Sparkles, Zap, MoreHorizontal } from "lucide-react";
import type { Skill, Category } from "@/data/skills";
import { CopyButton } from "./CopyButton";

const categoryIcons: Record<Category, React.ReactNode> = {
  documents: <FileText className="h-4 w-4" />,
  code: <Code className="h-4 w-4" />,
  research: <Search className="h-4 w-4" />,
  creative: <Sparkles className="h-4 w-4" />,
  automation: <Zap className="h-4 w-4" />,
  other: <MoreHorizontal className="h-4 w-4" />,
};

const categoryColors: Record<Category, string> = {
  documents: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  code: "bg-green-500/10 text-green-500 border-green-500/20",
  research: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  creative: "bg-pink-500/10 text-pink-500 border-pink-500/20",
  automation: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  other: "bg-gray-500/10 text-gray-500 border-gray-500/20",
};

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Link
      href={`/skill/${skill.slug}`}
      className="group block rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                categoryColors[skill.category]
              }`}
            >
              {categoryIcons[skill.category]}
              {skill.category}
            </span>
            {skill.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {skill.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {skill.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {skill.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {skill.tags.length > 3 && (
              <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{skill.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0">
          <CopyButton
            text={skill.content}
            variant="outline"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </Link>
  );
}
