import Link from "next/link"
import { ArrowRight, Rocket, Terminal, CheckCircle2, Copy, Package, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Rocket className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Getting Started</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Get Agentwise up and running in under 30 seconds with our one-click setup
            </p>
            <div className="flex gap-4 mt-3">
              <Badge variant="secondary">335,998+ Lines of Code</Badge>
              <Badge variant="secondary">11 AI Agents</Badge>
              <Badge variant="secondary">99.3% Token Reduction</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Install */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            <CardTitle>⚡ One-Click Setup for Claude Code</CardTitle>
          </div>
          <CardDescription>
            Copy this entire block and paste it into Claude Code for automatic setup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="text" showCopy>
{`Please set up Agentwise by:
1. Clone: git clone https://github.com/VibeCodingWithPhil/agentwise.git ~/agentwise
2. Install: cd ~/agentwise && npm install && npm run build
3. Configure: Create workspace directory and set up global monitor
4. Start: node dist/index.js
5. Enable sandboxed execution (no --dangerously-skip-permissions needed)

Full setup instructions: https://github.com/VibeCodingWithPhil/agentwise/blob/main/CLAUDE_CODE_SETUP_PROMPT.md`}
          </CodeBlock>
          <p className="text-sm text-muted-foreground mt-4">
            That's it! Claude Code will handle the entire setup automatically.
          </p>
        </CardContent>
      </Card>

      {/* What Gets Installed */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">✅ What Gets Installed</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">8+ Specialized Agents</h3>
                  <p className="text-sm text-muted-foreground">Working in parallel for faster development</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Global /monitor Command</h3>
                  <p className="text-sm text-muted-foreground">Accessible from anywhere in your system</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Token Optimization</h3>
                  <p className="text-sm text-muted-foreground">99.3% reduction with Context 3.0 + Knowledge Graph</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Real-time Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Monitor all agents at http://localhost:3001</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Manual Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔧 Manual Installation</h2>
        <p className="text-muted-foreground">
          For advanced users who prefer manual setup:
        </p>
        <Card>
          <CardContent className="pt-6">
            <CodeBlock language="bash">
{`# 1. Clone the repository
git clone https://github.com/VibeCodingWithPhil/agentwise.git
cd ~/agentwise

# 2. Install dependencies
npm install

# 3. Build the project
npm run build

# 4. Create workspace directory
mkdir -p workspace

# 5. Install global monitor command
npm run monitor:install

# 6. Start Agentwise
node dist/index.js

# 7. In a new terminal, test without any flags!
claude /create "your first project"`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Prerequisites */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">📋 Prerequisites</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">System Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Node.js 18.0 or higher</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Claude Code CLI installed</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Git for version control</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">macOS/Linux or Windows with WSL</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommended Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">8GB+ RAM for optimal performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">SSD for faster file operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Stable internet connection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">VS Code or preferred editor</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* First Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🎮 After Installation</h2>
        <Card>
          <CardHeader>
            <CardTitle>Your First Commands</CardTitle>
            <CardDescription>
              Try these commands to get started with Agentwise
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <code className="text-sm">/create "a todo app with React"</code>
                <p className="text-xs text-muted-foreground mt-1">Create your first project with intelligent agent selection</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <code className="text-sm">/monitor start</code>
                <p className="text-xs text-muted-foreground mt-1">Open the real-time monitoring dashboard</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <code className="text-sm">/configure-agentwise</code>
                <p className="text-xs text-muted-foreground mt-1">Configure your Agentwise settings</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <code className="text-sm">/update-agentwise</code>
                <p className="text-xs text-muted-foreground mt-1">Update to the latest version</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Verification */}
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertDescription>
          <strong>Verification:</strong> After installation, run <code>/monitor status</code> to verify everything is working correctly.
          You should see all agents operational and the monitoring dashboard accessible.
        </AlertDescription>
      </Alert>

      {/* Next Steps */}
      <div className="grid md:grid-cols-3 gap-4">
        <Button asChild variant="outline" className="h-auto p-4">
          <Link href="/docs/first-project" className="flex flex-col items-start gap-2">
            <Rocket className="h-5 w-5 text-accent-600" />
            <div className="text-left">
              <div className="font-medium">First Project</div>
              <div className="text-xs text-muted-foreground">Build your first app</div>
            </div>
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-auto p-4">
          <Link href="/docs/commands" className="flex flex-col items-start gap-2">
            <Terminal className="h-5 w-5 text-accent-600" />
            <div className="text-left">
              <div className="font-medium">Commands</div>
              <div className="text-xs text-muted-foreground">Learn all commands</div>
            </div>
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-auto p-4">
          <Link href="/docs/updating" className="flex flex-col items-start gap-2">
            <Package className="h-5 w-5 text-accent-600" />
            <div className="text-left">
              <div className="font-medium">Updating</div>
              <div className="text-xs text-muted-foreground">Keep Agentwise current</div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  )
}