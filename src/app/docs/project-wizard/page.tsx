import Link from "next/link"
import { Wand2, Database, Github, Shield, Rocket, Settings, CheckCircle2, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export default function ProjectWizardPage() {
  const wizardFlowDiagram = `
graph TB
    Start([Start Wizard]) --> Input[Enter Project Idea]
    Input --> Req[Generate Requirements]
    Req --> Visual[Create Visual Spec]
    Visual --> Choice{Select Features}
    
    Choice -->|Optional| DB[(Database Setup)]
    Choice -->|Optional| GH[GitHub Integration]
    Choice -->|Optional| Prot[Protection System]
    Choice --> Core[Core Setup]
    
    DB --> Core
    GH --> Core
    Prot --> Core
    
    Core --> Agents[Select Agents]
    Agents --> Tasks[Distribute Tasks]
    Tasks --> Execute[Execute in Parallel]
    Execute --> Complete([Project Ready])
    
    style Start fill:#6366f1,color:#fff
    style Complete fill:#10b981,color:#fff
    style Choice fill:#f59e0b,color:#fff
  `

  const featureComparisonDiagram = `
graph LR
    subgraph Traditional[Traditional Setup]
        T1[Manual Config] --> T2[Database Setup]
        T2 --> T3[GitHub Setup]
        T3 --> T4[Security Config]
        T4 --> T5[Deploy]
    end
    
    subgraph Agentwise[Agentwise Wizard]
        A1[One Command] --> A2[All Features]
        A2 --> A3[Auto Config]
        A3 --> A4[Ready to Deploy]
    end
    
    style Traditional fill:#ef4444,color:#fff
    style Agentwise fill:#10b981,color:#fff
  `

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Wand2 className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Complete Project Setup Wizard</h1>
            <p className="text-xl text-muted-foreground mt-2">
              One command to set up everything: requirements, database, GitHub, and protection
            </p>
            <div className="flex gap-4 mt-3">
              <Badge variant="secondary">Zero Configuration</Badge>
              <Badge variant="secondary">All Features Integrated</Badge>
              <Badge variant="secondary">5-Minute Setup</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle>🚀 Quick Start</CardTitle>
          <CardDescription>
            Set up a complete project with all features in one command
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`# Complete project setup with interactive wizard
/create-project "an e-commerce platform with Next.js"

# The wizard will guide you through:
# 1. Requirements generation
# 2. Visual specification
# 3. Database setup (optional)
# 4. GitHub integration (optional)
# 5. Protection system (optional)
# 6. Agent selection
# 7. Task distribution`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Wizard Flow */}
      <Card>
        <CardHeader>
          <CardTitle>How the Wizard Works</CardTitle>
          <CardDescription>
            Interactive step-by-step project configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <MermaidDiagram chart={wizardFlowDiagram} />
          
          <div className="grid gap-4 mt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">1. Project Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  AI analyzes your idea and generates comprehensive requirements
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Database className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">2. Optional Features</h4>
                <p className="text-sm text-muted-foreground">
                  Choose which features to enable: database, GitHub, protection
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Rocket className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">3. Automatic Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Everything configured automatically with best practices
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Integrated Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Requirements Planning System</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Visual Specification Generator</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Database Integration (Supabase/Neon)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>GitHub Repository Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>CI/CD Pipeline Configuration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automated Protection System</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Security Scanning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Backup Management</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wizard Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Work Modes</h4>
              <div className="space-y-2">
                <Badge variant="outline">Full Integration Mode</Badge>
                <Badge variant="outline">Local-Only Mode</Badge>
                <Badge variant="outline">Custom Configuration</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Database Providers</h4>
              <div className="space-y-2">
                <Badge variant="outline">Supabase</Badge>
                <Badge variant="outline">Neon</Badge>
                <Badge variant="outline">PlanetScale</Badge>
                <Badge variant="outline">Local PostgreSQL</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Protection Levels</h4>
              <div className="space-y-2">
                <Badge variant="outline">Basic (Backup only)</Badge>
                <Badge variant="outline">Standard (+ Security)</Badge>
                <Badge variant="outline">Advanced (+ Auto-commit)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Traditional vs Agentwise Setup</CardTitle>
          <CardDescription>
            See the difference in project setup time and complexity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={featureComparisonDiagram} />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Traditional Setup</h4>
              <ul className="space-y-2 text-sm">
                <li>• 2-3 hours manual configuration</li>
                <li>• Multiple tools and services</li>
                <li>• Error-prone manual steps</li>
                <li>• Inconsistent configurations</li>
                <li>• Security often overlooked</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Agentwise Wizard</h4>
              <ul className="space-y-2 text-sm">
                <li>• 5 minutes total setup</li>
                <li>• Single unified command</li>
                <li>• Automated best practices</li>
                <li>• Consistent every time</li>
                <li>• Security built-in</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example Output */}
      <Card>
        <CardHeader>
          <CardTitle>Example Wizard Session</CardTitle>
          <CardDescription>
            What you'll see when running the wizard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`$ /create-project "task management app with real-time updates"

🚀 Agentwise Project Setup Wizard
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Step 1: Analyzing Requirements...
✅ Generated 15 features
✅ Identified tech stack: Next.js, Socket.io, PostgreSQL
✅ Estimated timeline: 6 weeks

📊 Step 2: Creating Visual Specification...
✅ HTML specification generated
🌐 View at: http://localhost:3002/spec

🗄️ Step 3: Database Setup
? Select database provider: (Use arrow keys)
❯ Supabase (Recommended)
  Neon
  PlanetScale
  Skip database setup

✅ Supabase configured successfully
📝 Connection string saved to .env.local

🔐 Step 4: GitHub Integration
? Enable GitHub integration? (Y/n) Y
✅ Repository created: task-management-app
✅ CI/CD pipeline configured
✅ Branch protection enabled

🛡️ Step 5: Protection System
? Enable automated protection? (Y/n) Y
✅ Auto-backup enabled
✅ Security scanning active
✅ Code review automation configured

🤖 Step 6: Agent Selection
✅ Selected agents:
  • Frontend Specialist
  • Backend Specialist
  • Database Specialist
  • Testing Specialist

🎯 Step 7: Task Distribution
✅ Created 47 tasks across 3 phases
✅ Agents starting work in parallel...

✨ Project setup complete!
📁 Location: workspace/task-management-app
🚀 Run: cd workspace/task-management-app && npm start
📊 Monitor: /monitor`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/docs/requirements-planning" className="block">
            <Button variant="outline" className="w-full justify-between">
              Requirements Planning System
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
          <Link href="/docs/protection-system" className="block">
            <Button variant="outline" className="w-full justify-between">
              Protection System
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}