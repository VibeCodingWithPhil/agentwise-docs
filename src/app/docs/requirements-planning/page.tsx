import Link from "next/link"
import { FileText, Brain, Code, Users, Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export default function RequirementsPlanningPage() {
  const requirementsFlowDiagram = `
graph LR
    subgraph Input
        A[Project Idea] --> B[AI Analysis]
    end
    
    subgraph Processing
        B --> C[Feature Extraction]
        C --> D[Tech Stack Selection]
        D --> E[Timeline Estimation]
        E --> F[Team Structure]
    end
    
    subgraph Output
        F --> G[Requirements Doc]
        G --> H[Visual Spec]
        H --> I[Task Breakdown]
    end
    
    style Input fill:#6366f1,color:#fff
    style Processing fill:#f59e0b,color:#fff
    style Output fill:#10b981,color:#fff
  `

  const specificationGenerationDiagram = `
graph TB
    Start([User Input]) --> Parse[Parse Requirements]
    Parse --> Generate{Generate Sections}
    
    Generate --> F1[Features List]
    Generate --> F2[User Stories]
    Generate --> F3[Technical Specs]
    Generate --> F4[Architecture]
    Generate --> F5[Timeline]
    
    F1 --> Combine[Combine Document]
    F2 --> Combine
    F3 --> Combine
    F4 --> Combine
    F5 --> Combine
    
    Combine --> Visual[Create Visual Spec]
    Visual --> HTML[HTML/CSS Output]
    HTML --> Preview([Live Preview])
    
    style Start fill:#6366f1,color:#fff
    style Preview fill:#10b981,color:#fff
    style Visual fill:#8b5cf6,color:#fff
  `

  const taskDistributionDiagram = `
graph TB
    Req[Requirements] --> Analyze[AI Analysis]
    Analyze --> Tasks[Generate Tasks]
    
    Tasks --> Priority{Prioritize}
    Priority -->|High| P1[Phase 1 Tasks]
    Priority -->|Medium| P2[Phase 2 Tasks]
    Priority -->|Low| P3[Phase 3 Tasks]
    
    P1 --> Agents1[Assign to Agents]
    P2 --> Agents2[Assign to Agents]
    P3 --> Agents3[Assign to Agents]
    
    Agents1 --> Execute[Parallel Execution]
    Agents2 --> Execute
    Agents3 --> Execute
    
    style Req fill:#6366f1,color:#fff
    style Execute fill:#10b981,color:#fff
    style Priority fill:#f59e0b,color:#fff
  `

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <FileText className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Requirements Planning System</h1>
            <p className="text-xl text-muted-foreground mt-2">
              AI-powered project specification and planning from a simple idea
            </p>
            <div className="flex gap-4 mt-3">
              <Badge variant="secondary">AI-Powered</Badge>
              <Badge variant="secondary">Visual Specifications</Badge>
              <Badge variant="secondary">Automatic Task Generation</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle>🚀 Quick Start</CardTitle>
          <CardDescription>
            Generate comprehensive requirements from a simple project idea
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`# Generate requirements from idea
/requirements "social media app for developers"

# Enhance existing requirements
/requirements-enhance

# Create visual HTML specification
/requirements-visualize

# Convert to actionable tasks
/requirements-to-tasks`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements Generation Flow</CardTitle>
          <CardDescription>
            From idea to comprehensive specification in seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={requirementsFlowDiagram} />
          
          <div className="grid gap-4 mt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">1. AI Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced AI analyzes your project idea and identifies key requirements
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">2. Tech Stack Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Automatically recommends optimal technologies based on requirements
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">3. Timeline & Resources</h4>
                <p className="text-sm text-muted-foreground">
                  Estimates development timeline and required team structure
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Specification */}
      <Card>
        <CardHeader>
          <CardTitle>Visual Specification Generation</CardTitle>
          <CardDescription>
            Transform requirements into interactive HTML/CSS specifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={specificationGenerationDiagram} />
          
          <Alert className="mt-6">
            <Sparkles className="h-4 w-4" />
            <AlertDescription>
              Visual specifications are served on a local web server at http://localhost:3002
              for real-time preview and collaboration.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Generated Documentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Comprehensive feature list</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>User stories and use cases</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Technical specifications</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>System architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Database schema</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>API endpoints</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Security requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Testing strategy</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Planning Capabilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Timeline estimation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Team structure recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Phase-based development plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Priority scoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Risk assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Dependency mapping</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Resource allocation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Milestone tracking</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Automatic Task Distribution</CardTitle>
          <CardDescription>
            Requirements are automatically converted into tasks and assigned to agents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={taskDistributionDiagram} />
        </CardContent>
      </Card>

      {/* Example Output */}
      <Card>
        <CardHeader>
          <CardTitle>Example Requirements Generation</CardTitle>
          <CardDescription>
            See what gets generated from a simple idea
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`$ /requirements "task management app with team collaboration"

📝 Analyzing project requirements...

✅ Generated Requirements Document
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Project: Task Management Platform
📊 Estimated Timeline: 8 weeks
👥 Recommended Team: 3-4 developers

🎯 Core Features (15 identified):
• User authentication & authorization
• Task creation and management
• Team workspaces
• Real-time collaboration
• File attachments
• Comments and activity feed
• Notifications system
• Search and filtering
• Dashboard analytics
• Mobile responsive design
• API for integrations
• Bulk operations
• Export functionality
• Audit trail
• Role-based permissions

🛠️ Recommended Tech Stack:
• Frontend: Next.js 14, TypeScript, Tailwind CSS
• Backend: Node.js, Express/Fastify
• Database: PostgreSQL with Prisma
• Real-time: Socket.io
• Authentication: NextAuth.js
• File Storage: AWS S3 or Supabase
• Deployment: Vercel + Railway

📅 Development Phases:
Phase 1 (Weeks 1-3): Core Infrastructure
• Authentication system
• Database setup
• Basic task CRUD
• User management

Phase 2 (Weeks 4-6): Collaboration Features
• Team workspaces
• Real-time updates
• Comments system
• File attachments

Phase 3 (Weeks 7-8): Polish & Deploy
• Dashboard analytics
• Mobile optimization
• Testing & QA
• Deployment setup

💡 View visual specification:
http://localhost:3002/spec`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Commands Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements Commands</CardTitle>
          <CardDescription>
            All commands for requirements planning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">/requirements &lt;idea&gt;</h4>
            <p className="text-sm text-muted-foreground">
              Generate comprehensive requirements from a project idea
            </p>
            <CodeBlock language="bash" copy>
              /requirements "e-commerce platform with AI recommendations"
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/requirements-enhance</h4>
            <p className="text-sm text-muted-foreground">
              Enhance existing requirements with AI suggestions
            </p>
            <CodeBlock language="bash" copy>
              /requirements-enhance
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/requirements-visualize</h4>
            <p className="text-sm text-muted-foreground">
              Create interactive HTML/CSS specification
            </p>
            <CodeBlock language="bash" copy>
              /requirements-visualize
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/requirements-to-tasks</h4>
            <p className="text-sm text-muted-foreground">
              Convert requirements into actionable tasks for agents
            </p>
            <CodeBlock language="bash" copy>
              /requirements-to-tasks
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/docs/project-wizard" className="block">
            <Button variant="outline" className="w-full justify-between">
              Complete Project Setup Wizard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/database-integration" className="block">
            <Button variant="outline" className="w-full justify-between">
              Database Integration
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/github-integration" className="block">
            <Button variant="outline" className="w-full justify-between">
              GitHub Integration
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}