# Claude Skills Directory

A searchable, categorized directory of Claude Skills (SKILL.md files). Built with Next.js 14, Tailwind CSS, and TypeScript.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
/app
  /page.tsx                    # Homepage
  /skill/[slug]/page.tsx       # Skill detail page
  /category/[category]/page.tsx # Category page
  /layout.tsx                  # Root layout
  /globals.css                 # Global styles
/components
  /Header.tsx
  /Footer.tsx
  /SkillCard.tsx
  /SkillGrid.tsx
  /SearchBar.tsx
  /CategoryNav.tsx
  /CopyButton.tsx
/data
  /skills.ts                   # Static skill data
/lib
  /utils.ts                    # Utility functions
```

## Features

- Dark mode by default
- Client-side search filtering
- Copy-to-clipboard functionality
- Responsive mobile-first design
- SEO optimized with proper meta tags
- Category-based navigation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript

## Adding New Skills

Edit `/data/skills.ts` to add new skills:

```typescript
{
  id: "unique-id",
  slug: "url-friendly-slug",
  title: "Skill Title",
  description: "Short description",
  category: "documents" | "code" | "research" | "creative" | "automation" | "other",
  tags: ["tag1", "tag2"],
  author: "Author Name",
  content: `# Full SKILL.md content here`,
  createdAt: "2024-01-01",
  featured: false,
}
```

## License

MIT
