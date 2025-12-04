import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">
              Claude Skills - A directory of SKILL.md files
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/category/documents"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Built for the Claude community. Not affiliated with Anthropic.
        </div>
      </div>
    </footer>
  );
}
