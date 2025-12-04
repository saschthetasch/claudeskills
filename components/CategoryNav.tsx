"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Code,
  Search,
  Sparkles,
  Zap,
  MoreHorizontal,
  LayoutGrid,
} from "lucide-react";
import { categories, type Category } from "@/data/skills";
import { cn } from "@/lib/utils";

const iconComponents: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-4 w-4" />,
  Code: <Code className="h-4 w-4" />,
  Search: <Search className="h-4 w-4" />,
  Sparkles: <Sparkles className="h-4 w-4" />,
  Zap: <Zap className="h-4 w-4" />,
  MoreHorizontal: <MoreHorizontal className="h-4 w-4" />,
};

interface CategoryNavProps {
  currentCategory?: Category | "all";
  layout?: "horizontal" | "vertical";
}

export function CategoryNav({
  currentCategory = "all",
  layout = "horizontal",
}: CategoryNavProps) {
  const pathname = usePathname();

  const allCategories = [
    { id: "all" as const, label: "All Skills", icon: "LayoutGrid" },
    ...categories,
  ];

  return (
    <nav
      className={cn(
        "flex gap-2",
        layout === "horizontal"
          ? "flex-wrap"
          : "flex-col"
      )}
    >
      {allCategories.map((category) => {
        const isActive =
          category.id === "all"
            ? pathname === "/"
            : pathname === `/category/${category.id}`;
        const href =
          category.id === "all" ? "/" : `/category/${category.id}`;

        return (
          <Link
            key={category.id}
            href={href}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {category.icon === "LayoutGrid" ? (
              <LayoutGrid className="h-4 w-4" />
            ) : (
              iconComponents[category.icon]
            )}
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}
