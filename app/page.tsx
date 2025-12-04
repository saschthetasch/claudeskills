"use client";

import { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryNav } from "@/components/CategoryNav";
import { SkillGrid } from "@/components/SkillGrid";
import { skills, getFeaturedSkills, searchSkills } from "@/data/skills";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredSkills = useMemo(() => getFeaturedSkills(), []);

  const filteredSkills = useMemo(() => {
    if (!searchQuery) return skills;
    return searchSkills(searchQuery);
  }, [searchQuery]);

  const isSearching = searchQuery.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          Open Source Skill Directory
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Find the perfect{" "}
          <span className="text-primary">Claude Skill</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Browse, search, and copy SKILL.md files for your Claude workflows.
          A community-driven directory of ready-to-use skills.
        </p>
        <div className="max-w-xl mx-auto">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search skills by name, description, or tags..."
            size="large"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8">
        <CategoryNav />
      </section>

      {/* Skills Display */}
      {isSearching ? (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Search Results
              <span className="ml-2 text-muted-foreground font-normal">
                ({filteredSkills.length} {filteredSkills.length === 1 ? "skill" : "skills"})
              </span>
            </h2>
          </div>
          <SkillGrid
            skills={filteredSkills}
            emptyMessage="No skills found matching your search. Try different keywords."
          />
        </section>
      ) : (
        <>
          {/* Featured Skills */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Featured Skills</h2>
            </div>
            <SkillGrid skills={featuredSkills} />
          </section>

          {/* All Skills */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">All Skills</h2>
              <span className="text-sm text-muted-foreground">
                {skills.length} skills available
              </span>
            </div>
            <SkillGrid skills={skills} />
          </section>
        </>
      )}
    </div>
  );
}
