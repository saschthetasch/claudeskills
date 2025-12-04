export interface Skill {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
  author?: string;
  content: string;
  createdAt: string;
  featured?: boolean;
}

export type Category =
  | "documents"
  | "code"
  | "research"
  | "creative"
  | "automation"
  | "other";

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: "documents", label: "Documents", icon: "FileText" },
  { id: "code", label: "Code", icon: "Code" },
  { id: "research", label: "Research", icon: "Search" },
  { id: "creative", label: "Creative", icon: "Sparkles" },
  { id: "automation", label: "Automation", icon: "Zap" },
  { id: "other", label: "Other", icon: "MoreHorizontal" },
];

export const skills: Skill[] = [
  {
    id: "1",
    slug: "pdf-analyzer",
    title: "PDF Analyzer",
    description:
      "Analyze PDF documents, extract key information, summarize content, and answer questions about the document.",
    category: "documents",
    tags: ["pdf", "analysis", "extraction", "summary"],
    author: "Claude Skills",
    content: `# PDF Analyzer Skill

## Description
This skill enables Claude to effectively analyze PDF documents, extract structured information, and provide comprehensive summaries.

## Instructions
When analyzing a PDF document:

1. **Document Overview**
   - Identify the document type (report, article, manual, etc.)
   - Note the total number of pages
   - Identify the main sections or chapters

2. **Content Extraction**
   - Extract key headings and subheadings
   - Identify main arguments or points
   - Note any tables, figures, or charts
   - Extract citations or references if present

3. **Summary Generation**
   - Provide a concise executive summary (2-3 paragraphs)
   - List key takeaways as bullet points
   - Highlight any action items or recommendations

4. **Question Answering**
   - Answer specific questions about the document content
   - Provide page references when possible
   - Quote relevant passages when appropriate

## Usage
\`\`\`
Please analyze this PDF and provide:
- A summary of the main content
- Key findings or conclusions
- Any recommendations mentioned
\`\`\``,
    createdAt: "2024-01-15",
    featured: true,
  },
  {
    id: "2",
    slug: "code-reviewer",
    title: "Code Reviewer",
    description:
      "Review code for bugs, security issues, performance problems, and suggest improvements following best practices.",
    category: "code",
    tags: ["code-review", "security", "performance", "best-practices"],
    author: "Claude Skills",
    content: `# Code Reviewer Skill

## Description
This skill enables thorough code review with focus on quality, security, and maintainability.

## Review Checklist

### 1. Code Quality
- [ ] Code follows consistent naming conventions
- [ ] Functions are small and focused (single responsibility)
- [ ] No unnecessary complexity or over-engineering
- [ ] Proper error handling implemented
- [ ] Code is DRY (Don't Repeat Yourself)

### 2. Security
- [ ] Input validation on all user inputs
- [ ] No hardcoded secrets or credentials
- [ ] Proper authentication/authorization checks
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (output encoding)

### 3. Performance
- [ ] No N+1 query problems
- [ ] Appropriate use of caching
- [ ] Efficient algorithms and data structures
- [ ] No memory leaks
- [ ] Lazy loading where appropriate

### 4. Maintainability
- [ ] Clear and meaningful comments where needed
- [ ] Consistent code formatting
- [ ] Modular architecture
- [ ] Testable code structure

## Output Format
\`\`\`
## Code Review Summary

**Overall Assessment:** [Good/Needs Improvement/Critical Issues]

### Issues Found
1. [Severity: High/Medium/Low] - Description
   - File: \`filename.ts\`
   - Line: XX
   - Suggestion: ...

### Positive Aspects
- ...

### Recommendations
- ...
\`\`\``,
    createdAt: "2024-01-20",
    featured: true,
  },
  {
    id: "3",
    slug: "research-assistant",
    title: "Research Assistant",
    description:
      "Help conduct thorough research on any topic, compile findings, and present information in a structured format.",
    category: "research",
    tags: ["research", "analysis", "compilation", "citations"],
    author: "Claude Skills",
    content: `# Research Assistant Skill

## Description
A comprehensive research assistant that helps gather, analyze, and synthesize information on any topic.

## Research Framework

### Phase 1: Topic Analysis
- Define the research question clearly
- Identify key terms and concepts
- Determine scope and boundaries
- List what is already known

### Phase 2: Information Gathering
- Search for primary sources
- Identify authoritative secondary sources
- Note conflicting viewpoints
- Track all sources for citation

### Phase 3: Analysis
- Evaluate source credibility
- Identify patterns and themes
- Note gaps in available information
- Cross-reference findings

### Phase 4: Synthesis
- Organize findings by theme
- Draw connections between sources
- Formulate conclusions
- Identify areas for further research

## Output Format
\`\`\`markdown
# Research Report: [Topic]

## Executive Summary
[2-3 paragraph overview]

## Key Findings
1. Finding 1
2. Finding 2
3. Finding 3

## Detailed Analysis
### [Subtopic 1]
...

### [Subtopic 2]
...

## Conclusions
...

## Sources
1. [Source 1]
2. [Source 2]
\`\`\``,
    createdAt: "2024-02-01",
    featured: true,
  },
  {
    id: "4",
    slug: "excel-wizard",
    title: "Excel Wizard",
    description:
      "Help create Excel formulas, analyze spreadsheet data, build pivot tables, and automate Excel workflows.",
    category: "documents",
    tags: ["excel", "spreadsheet", "formulas", "data-analysis"],
    author: "Claude Skills",
    content: `# Excel Wizard Skill

## Description
Master Excel tasks from simple formulas to complex data analysis and automation.

## Capabilities

### Formula Creation
- Basic arithmetic and logical functions
- Lookup functions (VLOOKUP, XLOOKUP, INDEX/MATCH)
- Text manipulation (CONCATENATE, LEFT, RIGHT, MID)
- Date/Time functions
- Array formulas
- Dynamic arrays (FILTER, SORT, UNIQUE)

### Data Analysis
- Pivot table creation and optimization
- Data validation setup
- Conditional formatting rules
- What-if analysis
- Statistical analysis

### Common Formula Patterns

#### VLOOKUP with Error Handling
\`\`\`excel
=IFERROR(VLOOKUP(A2,Data!$A$2:$D$100,2,FALSE),"Not Found")
\`\`\`

#### Dynamic Named Range
\`\`\`excel
=OFFSET(Sheet1!$A$1,0,0,COUNTA(Sheet1!$A:$A),1)
\`\`\`

#### Conditional Sum
\`\`\`excel
=SUMIFS(C:C,A:A,">="&DATE(2024,1,1),A:A,"<="&DATE(2024,12,31))
\`\`\`

## Usage
Describe your Excel task and I'll provide:
1. The appropriate formula or approach
2. Step-by-step implementation instructions
3. Tips for optimization
4. Common pitfalls to avoid`,
    createdAt: "2024-02-10",
    featured: false,
  },
  {
    id: "5",
    slug: "creative-writer",
    title: "Creative Writer",
    description:
      "Generate creative content including stories, poems, marketing copy, and engaging narratives.",
    category: "creative",
    tags: ["writing", "creative", "storytelling", "copywriting"],
    author: "Claude Skills",
    content: `# Creative Writer Skill

## Description
Craft compelling creative content across various formats and styles.

## Writing Modes

### Storytelling
- Short stories
- Flash fiction
- Character development
- Plot structuring
- Dialogue writing

### Poetry
- Free verse
- Haiku
- Sonnets
- Spoken word
- Lyrical poetry

### Marketing Copy
- Headlines and taglines
- Product descriptions
- Email campaigns
- Social media posts
- Landing page copy

## Style Guidelines

### Voice Options
- **Professional:** Clear, authoritative, trustworthy
- **Casual:** Friendly, approachable, conversational
- **Playful:** Fun, energetic, witty
- **Inspirational:** Uplifting, motivating, empowering
- **Dramatic:** Intense, emotional, compelling

### Structure Templates

#### Story Arc
1. Hook - Grab attention
2. Setup - Establish context
3. Conflict - Introduce tension
4. Climax - Peak moment
5. Resolution - Satisfying conclusion

#### Marketing AIDA
1. Attention - Capture interest
2. Interest - Build curiosity
3. Desire - Create want
4. Action - Drive conversion

## Usage
Specify:
- Content type
- Target audience
- Tone/voice
- Length requirements
- Key messages to include`,
    createdAt: "2024-02-15",
    featured: false,
  },
  {
    id: "6",
    slug: "api-builder",
    title: "API Builder",
    description:
      "Design and implement RESTful APIs with proper documentation, error handling, and best practices.",
    category: "code",
    tags: ["api", "rest", "backend", "documentation"],
    author: "Claude Skills",
    content: `# API Builder Skill

## Description
Design and build robust, well-documented RESTful APIs following industry best practices.

## API Design Principles

### RESTful Conventions
- Use nouns for resources (not verbs)
- HTTP methods for actions (GET, POST, PUT, DELETE)
- Proper status codes
- Consistent naming (kebab-case for URLs)
- Versioning strategy

### Endpoint Structure
\`\`\`
GET    /api/v1/users          # List users
GET    /api/v1/users/:id      # Get user
POST   /api/v1/users          # Create user
PUT    /api/v1/users/:id      # Update user
DELETE /api/v1/users/:id      # Delete user
\`\`\`

### Response Format
\`\`\`json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "John Doe"
  },
  "meta": {
    "timestamp": "2024-01-01T00:00:00Z"
  }
}
\`\`\`

### Error Format
\`\`\`json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ]
  }
}
\`\`\`

## Documentation Template
Include:
- Endpoint description
- Request parameters
- Request body schema
- Response schema
- Example requests/responses
- Error codes`,
    createdAt: "2024-02-20",
    featured: false,
  },
  {
    id: "7",
    slug: "task-automator",
    title: "Task Automator",
    description:
      "Create automation scripts and workflows to streamline repetitive tasks and improve productivity.",
    category: "automation",
    tags: ["automation", "scripts", "workflow", "productivity"],
    author: "Claude Skills",
    content: `# Task Automator Skill

## Description
Design and implement automation solutions to eliminate repetitive tasks and boost productivity.

## Automation Framework

### Task Analysis
1. Identify repetitive tasks
2. Document current process steps
3. Estimate time savings potential
4. Identify dependencies and triggers

### Solution Design
1. Choose appropriate tools/technologies
2. Design workflow architecture
3. Plan error handling
4. Define success metrics

### Implementation Patterns

#### File Processing
\`\`\`bash
#!/bin/bash
# Process all CSV files in directory
for file in *.csv; do
  echo "Processing $file"
  # Add processing logic
done
\`\`\`

#### Scheduled Tasks (Cron)
\`\`\`cron
# Run backup every day at 2 AM
0 2 * * * /path/to/backup.sh

# Run report weekly on Monday at 9 AM
0 9 * * 1 /path/to/report.sh
\`\`\`

#### API Integration
\`\`\`python
import requests

def sync_data():
    response = requests.get("https://api.example.com/data")
    # Process and sync data
    return response.json()
\`\`\`

## Common Automation Types
- File organization and backup
- Data extraction and transformation
- Report generation
- Email automation
- System monitoring
- Deployment pipelines`,
    createdAt: "2024-02-25",
    featured: false,
  },
  {
    id: "8",
    slug: "powerpoint-designer",
    title: "PowerPoint Designer",
    description:
      "Create professional presentation outlines, slide content, and speaker notes for impactful presentations.",
    category: "documents",
    tags: ["powerpoint", "presentation", "slides", "design"],
    author: "Claude Skills",
    content: `# PowerPoint Designer Skill

## Description
Create compelling presentations with well-structured content and professional design guidance.

## Presentation Framework

### Structure Template
1. **Title Slide**
   - Clear, compelling title
   - Subtitle/tagline
   - Presenter info & date

2. **Agenda/Overview**
   - 3-5 main sections
   - Set expectations

3. **Content Slides**
   - One main idea per slide
   - Supporting visuals
   - Minimal text

4. **Summary/Key Takeaways**
   - Reinforce main points
   - Call to action

5. **Q&A / Contact**
   - Discussion prompt
   - Contact information

### Design Principles
- **6x6 Rule:** Max 6 bullets, 6 words each
- **Visual Hierarchy:** Clear emphasis
- **Consistent Styling:** Same fonts, colors throughout
- **White Space:** Don't overcrowd slides
- **High-Quality Images:** Relevant, professional visuals

### Slide Types

#### Data Slide
- Clear chart type selection
- Highlighted key insight
- Source citation

#### Comparison Slide
- Side-by-side layout
- Clear differentiators
- Visual indicators

#### Process Slide
- Step-by-step flow
- Numbered sequence
- Icons for each step

## Output Format
\`\`\`
Slide [X]: [Title]
- Bullet point 1
- Bullet point 2
- Bullet point 3

Visual: [Description of recommended visual]
Speaker Notes: [What to say]
\`\`\``,
    createdAt: "2024-03-01",
    featured: false,
  },
  {
    id: "9",
    slug: "data-analyst",
    title: "Data Analyst",
    description:
      "Analyze datasets, identify trends and patterns, create visualizations, and generate actionable insights.",
    category: "research",
    tags: ["data", "analysis", "visualization", "insights"],
    author: "Claude Skills",
    content: `# Data Analyst Skill

## Description
Transform raw data into meaningful insights through systematic analysis and visualization.

## Analysis Framework

### 1. Data Understanding
- Identify data types (numerical, categorical, temporal)
- Check data quality (missing values, outliers)
- Understand data relationships
- Document data dictionary

### 2. Exploratory Analysis
- Descriptive statistics (mean, median, mode, std)
- Distribution analysis
- Correlation analysis
- Trend identification

### 3. Visualization Selection

| Data Type | Best Visualization |
|-----------|-------------------|
| Comparison | Bar chart, Column chart |
| Trend over time | Line chart, Area chart |
| Part-to-whole | Pie chart, Treemap |
| Distribution | Histogram, Box plot |
| Relationship | Scatter plot, Bubble chart |
| Geographic | Map, Choropleth |

### 4. Insight Generation
- Identify key findings
- Quantify impact
- Compare to benchmarks
- Formulate recommendations

## Analysis Report Template
\`\`\`markdown
# Data Analysis Report

## Executive Summary
[Key findings in 2-3 sentences]

## Data Overview
- Records: X
- Time Period: Y
- Key Variables: Z

## Key Findings
1. [Finding with supporting data]
2. [Finding with supporting data]

## Visualizations
[Chart descriptions and insights]

## Recommendations
1. [Action item]
2. [Action item]

## Appendix
[Detailed statistics and methodology]
\`\`\``,
    createdAt: "2024-03-05",
    featured: true,
  },
  {
    id: "10",
    slug: "git-helper",
    title: "Git Helper",
    description:
      "Navigate Git workflows, resolve merge conflicts, write commit messages, and manage branches effectively.",
    category: "code",
    tags: ["git", "version-control", "workflow", "collaboration"],
    author: "Claude Skills",
    content: `# Git Helper Skill

## Description
Master Git version control for effective code management and collaboration.

## Common Workflows

### Feature Branch Workflow
\`\`\`bash
# Create and switch to feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push -u origin feature/my-feature

# Create PR and merge
# After merge, clean up
git checkout main
git pull
git branch -d feature/my-feature
\`\`\`

### Commit Message Convention
\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

### Useful Commands
\`\`\`bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Stash changes
git stash
git stash pop

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Cherry-pick commit
git cherry-pick <commit-hash>

# View commit history graphically
git log --oneline --graph --all
\`\`\`

### Merge Conflict Resolution
1. Identify conflicting files: \`git status\`
2. Open file and find conflict markers
3. Choose correct version or combine
4. Remove conflict markers
5. Stage resolved files: \`git add <file>\`
6. Complete merge: \`git commit\``,
    createdAt: "2024-03-10",
    featured: false,
  },
];

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find((skill) => skill.slug === slug);
}

export function getSkillsByCategory(category: Category): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getFeaturedSkills(): Skill[] {
  return skills.filter((skill) => skill.featured);
}

export function searchSkills(query: string): Skill[] {
  const lowerQuery = query.toLowerCase();
  return skills.filter(
    (skill) =>
      skill.title.toLowerCase().includes(lowerQuery) ||
      skill.description.toLowerCase().includes(lowerQuery) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
