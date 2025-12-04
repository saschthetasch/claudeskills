import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  categories,
  getSkillsByCategory,
  type Category,
} from "@/data/skills";
import { CategoryNav } from "@/components/CategoryNav";
import { SkillGrid } from "@/components/SkillGrid";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = categories.find((c) => c.id === params.category);

  if (!category) {
    return {
      title: "Category Not Found - Claude Skills",
    };
  }

  return {
    title: `${category.label} Skills - Claude Skills`,
    description: `Browse Claude Skills in the ${category.label} category. Find and copy SKILL.md files for your workflows.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = params.category as Category;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  const categorySkills = getSkillsByCategory(categoryId);

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

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.label} Skills</h1>
        <p className="text-muted-foreground">
          Browse all skills in the {category.label.toLowerCase()} category.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="mb-8">
        <CategoryNav currentCategory={categoryId} />
      </div>

      {/* Skills Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground">
            {categorySkills.length}{" "}
            {categorySkills.length === 1 ? "skill" : "skills"} in this category
          </span>
        </div>
        <SkillGrid
          skills={categorySkills}
          emptyMessage={`No skills found in the ${category.label} category yet.`}
        />
      </section>
    </div>
  );
}
