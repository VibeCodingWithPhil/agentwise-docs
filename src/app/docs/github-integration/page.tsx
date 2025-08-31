import Link from "next/link"
import { Github, GitBranch, Lock, Rocket, Shield, CheckCircle2, ArrowRight, GitPullRequest } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export default function GitHubIntegrationPage() {
  const githubFlowDiagram = `
graph LR
    Start([GitHub Setup]) --> Auth[Authentication]
    Auth --> Repo{Repository}
    
    Repo -->|New| Create[Create Repo]
    Repo -->|Existing| Connect[Connect Repo]
    
    Create --> Config[Configuration]
    Connect --> Config
    
    Config --> Branch[Branch Protection]
    Branch --> CICD[CI/CD Pipeline]
    CICD --> Secrets[Secrets Sync]
    Secrets --> Hooks[Webhooks]
    Hooks --> Ready([Integration Complete])
    
    style Start fill:#6366f1,color:#fff
    style Ready fill:#10b981,color:#fff
    style Repo fill:#f59e0b,color:#fff
  `

  const cicdPipelineDiagram = `
graph TB
    Push([Code Push]) --> Trigger[GitHub Actions]
    
    Trigger --> Build{Build Pipeline}
    Build --> Test[Run Tests]
    Build --> Lint[Lint Code]
    Build --> Type[TypeCheck]
    
    Test --> Check{All Pass?}
    Lint --> Check
    Type --> Check
    
    Check -->|Yes| Deploy[Deploy]
    Check -->|No| Notify[Notify Developer]
    
    Deploy --> Staging[Staging Environment]
    Staging --> Review[Review App]
    Review --> Prod[Production]
    
    Notify --> Fix[Fix Issues]
    Fix --> Push
    
    style Push fill:#6366f1,color:#fff
    style Prod fill:#10b981,color:#fff
    style Check fill:#f59e0b,color:#fff
    style Notify fill:#ef4444,color:#fff
  `

  const branchProtectionDiagram = `
graph TB
    Main[main branch] --> Protected{Protection Rules}
    
    Protected --> PR[Require PR]
    Protected --> Review[Code Review]
    Protected --> Status[Status Checks]
    Protected --> Update[Up-to-date]
    
    PR --> Merge{Can Merge?}
    Review --> Merge
    Status --> Merge
    Update --> Merge
    
    Merge -->|All Pass| Success[Merge to Main]
    Merge -->|Any Fail| Block[Blocked]
    
    Block --> Fix[Fix Issues]
    Fix --> PR
    
    style Main fill:#6366f1,color:#fff
    style Success fill:#10b981,color:#fff
    style Block fill:#ef4444,color:#fff
  `

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Github className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">GitHub Integration</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Complete repository management with CI/CD and security
            </p>
            <div className="flex gap-4 mt-3">
              <Badge variant="secondary">Repository Management</Badge>
              <Badge variant="secondary">CI/CD Automation</Badge>
              <Badge variant="secondary">Branch Protection</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle>🚀 Quick Start</CardTitle>
          <CardDescription>
            Set up complete GitHub integration with one command
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`# Complete GitHub setup
/github-setup

# Within project creation
/create-project "app with github"

# Enable for existing project
/github-integrate

# Sync secrets to GitHub
/github-secrets-sync`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Integration Flow */}
      <Card>
        <CardHeader>
          <CardTitle>GitHub Integration Flow</CardTitle>
          <CardDescription>
            Automated repository setup with best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={githubFlowDiagram} />
          
          <div className="grid gap-4 mt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Github className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">1. Repository Creation</h4>
                <p className="text-sm text-muted-foreground">
                  Create new repo or connect to existing with proper settings
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">2. Security Configuration</h4>
                <p className="text-sm text-muted-foreground">
                  Branch protection, security scanning, and access controls
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Rocket className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">3. CI/CD Pipeline</h4>
                <p className="text-sm text-muted-foreground">
                  Automated testing, building, and deployment workflows
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CI/CD Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle>Automated CI/CD Pipeline</CardTitle>
          <CardDescription>
            Complete DevOps automation with GitHub Actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={cicdPipelineDiagram} />
          
          <Alert className="mt-6">
            <Rocket className="h-4 w-4" />
            <AlertDescription>
              CI/CD pipelines are automatically configured based on your project's tech stack,
              including test runners, linters, and deployment targets.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Repository Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automatic repository creation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>README generation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>License selection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>.gitignore templates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Issue templates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>PR templates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Code of conduct</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Contributing guidelines</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CI/CD Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>GitHub Actions workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automated testing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Code quality checks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Security scanning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Dependency updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Auto-deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Review apps</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Release automation</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Branch Protection */}
      <Card>
        <CardHeader>
          <CardTitle>Branch Protection Rules</CardTitle>
          <CardDescription>
            Enforce code quality and security standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={branchProtectionDiagram} />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold mb-3">Protection Rules</h4>
              <ul className="space-y-2 text-sm">
                <li>• Require pull request reviews</li>
                <li>• Dismiss stale reviews</li>
                <li>• Require status checks</li>
                <li>• Require branches up to date</li>
                <li>• Include administrators</li>
                <li>• Restrict push access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Status Checks</h4>
              <ul className="space-y-2 text-sm">
                <li>• Build must pass</li>
                <li>• Tests must pass</li>
                <li>• Linting must pass</li>
                <li>• Type checking must pass</li>
                <li>• Security scan must pass</li>
                <li>• Code coverage threshold</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Secrets Management */}
      <Card>
        <CardHeader>
          <CardTitle>Secrets Management</CardTitle>
          <CardDescription>
            Secure handling of sensitive configuration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Automatic Secrets Sync</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Environment variables from .env are automatically synced to GitHub Secrets
                </p>
                <CodeBlock language="bash" copy className="mt-2">
{`# Sync local .env to GitHub Secrets
/github-secrets-sync

# Secrets synced:
✅ DATABASE_URL
✅ OPENAI_API_KEY
✅ SUPABASE_ANON_KEY
✅ VERCEL_TOKEN`}
                </CodeBlock>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Environment-Specific Secrets</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Different secrets for development, staging, and production
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example Workflow */}
      <Card>
        <CardHeader>
          <CardTitle>Example GitHub Actions Workflow</CardTitle>
          <CardDescription>
            Automatically generated CI/CD pipeline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="yaml" copy>
{`name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Type check
        run: npm run typecheck
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run security scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
      
      - name: Check for secrets
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./

  deploy:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Example Session */}
      <Card>
        <CardHeader>
          <CardTitle>Example GitHub Setup Session</CardTitle>
          <CardDescription>
            Complete GitHub integration setup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`$ /github-setup

🔗 GitHub Integration Setup
━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Checking GitHub authentication...
✅ Authenticated as @VibeCodingWithPhil

? Repository setup: (Use arrow keys)
❯ Create new repository
  Connect to existing repository
  
? Repository name: task-management-app
? Description: A modern task management platform
? Visibility: 
❯ Public
  Private
  
? Initialize with: (Press space to select)
◉ README
◉ .gitignore (Node)
◉ MIT License
◯ Code of Conduct

📦 Creating repository...
✅ Repository created: VibeCodingWithPhil/task-management-app
✅ Default branch: main
✅ Added .gitignore for Node.js
✅ Added MIT license
✅ Generated README.md

🔐 Configuring branch protection...
✅ Protected main branch
✅ Required pull request reviews: 1
✅ Dismiss stale reviews: enabled
✅ Required status checks: build, test, lint
✅ Enforce for administrators: enabled

🚀 Setting up CI/CD...
✅ Created .github/workflows/ci.yml
✅ Created .github/workflows/deploy.yml
✅ Created .github/workflows/security.yml

🔑 Syncing secrets...
✅ DATABASE_URL → GitHub Secrets
✅ OPENAI_API_KEY → GitHub Secrets
✅ SUPABASE_ANON_KEY → GitHub Secrets
✅ VERCEL_TOKEN → GitHub Secrets

🪝 Configuring webhooks...
✅ Deployment webhook configured
✅ Issue tracking webhook configured

📊 Enabling features...
✅ Issues enabled
✅ Projects enabled
✅ Wiki enabled
✅ Discussions enabled
✅ Security advisories enabled

✨ GitHub integration complete!

🔗 Repository: https://github.com/VibeCodingWithPhil/task-management-app
📋 Clone: git clone git@github.com:VibeCodingWithPhil/task-management-app.git
🚀 First push: git push -u origin main`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/docs/protection-system" className="block">
            <Button variant="outline" className="w-full justify-between">
              Automated Protection System
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/project-wizard" className="block">
            <Button variant="outline" className="w-full justify-between">
              Complete Project Setup
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/database-integration" className="block">
            <Button variant="outline" className="w-full justify-between">
              Database Integration
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}