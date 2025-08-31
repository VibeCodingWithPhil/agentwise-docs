import Link from "next/link"
import { RefreshCw, Terminal, CheckCircle2, AlertCircle, Package, GitBranch, Shield, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UpdatingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <RefreshCw className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Updating Agentwise</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Keep your Agentwise installation up-to-date with the latest features and improvements
            </p>
          </div>
        </div>
      </div>

      {/* Current Version */}
      <Alert>
        <Package className="h-4 w-4" />
        <AlertTitle>Current Version</AlertTitle>
        <AlertDescription>
          Agentwise v2.3.1 - Enhanced Features with 15-30% Token Optimization
        </AlertDescription>
      </Alert>

      {/* Automatic Update */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700 dark:text-green-400">Automatic Update (Recommended)</CardTitle>
          </div>
          <CardDescription>
            The easiest way to update Agentwise using the built-in command
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`# Run this command in Claude Code
/update-agentwise`}
          </CodeBlock>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium">What it does:</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>✓ Checks your current version</li>
              <li>✓ Downloads latest from GitHub</li>
              <li>✓ Preserves your settings and projects</li>
              <li>✓ Rebuilds the project</li>
              <li>✓ Restarts services automatically</li>
              <li>✓ Shows changelog of new features</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Manual Update */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔧 Manual Update</h2>
        <p className="text-muted-foreground">
          If you prefer to update manually or the automatic update isn't working:
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Step-by-Step Manual Update</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock language="bash">
{`# 1. Navigate to Agentwise directory
cd ~/agentwise

# 2. Stash any local changes
git stash

# 3. Pull latest changes
git pull origin main

# 4. Install new dependencies
npm install

# 5. Rebuild the project
npm run build

# 6. Restart Agentwise
node dist/index.js

# 7. Verify the update
echo "✅ Updated to latest version!"`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Update Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">✨ Latest Features in v2.3.1</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400">NEW</Badge>
                <CardTitle className="text-lg">Self-Improving Agents</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Agents now learn from every task and improve over time with persistent knowledge storage
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400">NEW</Badge>
                <CardTitle className="text-lg">15-30% Token Optimization</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Verified token reduction through Context 3.0 + Knowledge Graph combined systems
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400">IMPROVED</Badge>
                <CardTitle className="text-lg">Agent Claim Verification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Automatic validation of all claims made by AI agents with trust scoring
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400">IMPROVED</Badge>
                <CardTitle className="text-lg">Update Command</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                New /update-agentwise command for seamless updates without manual steps
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Backup Before Update */}
      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Backup Recommendation</AlertTitle>
        <AlertDescription>
          Before updating, it's recommended to backup your workspace directory:
          <CodeBlock language="bash" className="mt-2">
            cp -r ~/agentwise/workspace ~/agentwise-workspace-backup
          </CodeBlock>
        </AlertDescription>
      </Alert>

      {/* Checking for Updates */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔍 Checking for Updates</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Check Current Version</h3>
                <CodeBlock language="bash">
{`# Check your current Agentwise version
cat ~/agentwise/package.json | grep version`}
                </CodeBlock>
              </div>
              <div>
                <h3 className="font-medium mb-2">Check Latest Version</h3>
                <CodeBlock language="bash">
{`# Check the latest version on GitHub
curl -s https://api.github.com/repos/VibeCodingWithPhil/agentwise/releases/latest | grep tag_name`}
                </CodeBlock>
              </div>
              <div>
                <h3 className="font-medium mb-2">View Changelog</h3>
                <CodeBlock language="bash">
{`# View recent changes
cat ~/agentwise/CHANGELOG.md | head -50`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rollback Instructions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">↩️ Rolling Back</h2>
        <p className="text-muted-foreground">
          If you experience issues after updating, you can rollback to a previous version:
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Rollback Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock language="bash">
{`# 1. Navigate to Agentwise
cd ~/agentwise

# 2. Check available versions
git tag -l

# 3. Checkout a specific version (example: v2.1.0)
git checkout v2.1.0

# 4. Reinstall dependencies for that version
npm install

# 5. Rebuild
npm run build

# 6. Restart
node dist/index.js`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Troubleshooting */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🛠️ Troubleshooting Updates</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Permission Errors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">If you get permission errors:</p>
              <CodeBlock language="bash">
                sudo chown -R $(whoami) ~/agentwise
              </CodeBlock>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Build Failures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">If the build fails:</p>
              <CodeBlock language="bash">
{`# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build`}
              </CodeBlock>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Git Conflicts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">If you have local changes:</p>
              <CodeBlock language="bash">
{`# Stash your changes first
git stash
git pull origin main
git stash pop  # To restore your changes`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Auto-Update Configuration */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">⚙️ Auto-Update Configuration</h2>
        <Card>
          <CardHeader>
            <CardTitle>Enable Automatic Updates</CardTitle>
            <CardDescription>
              Configure Agentwise to check for updates automatically
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Add to your <code>~/.agentwise-config.json</code>:
            </p>
            <CodeBlock language="json">
{`{
  "updates": {
    "autoCheck": true,
    "checkInterval": "daily",
    "autoInstall": false,
    "notifyOnUpdate": true
  }
}`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Support Links */}
      <div className="grid md:grid-cols-3 gap-4">
        <Button asChild variant="outline" className="h-auto p-4">
          <Link href="https://github.com/VibeCodingWithPhil/agentwise/releases" className="flex flex-col items-start gap-2">
            <GitBranch className="h-5 w-5 text-accent-600" />
            <div className="text-left">
              <div className="font-medium">Release Notes</div>
              <div className="text-xs text-muted-foreground">View all versions</div>
            </div>
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-auto p-4">
          <Link href="https://github.com/VibeCodingWithPhil/agentwise/issues" className="flex flex-col items-start gap-2">
            <AlertCircle className="h-5 w-5 text-accent-600" />
            <div className="text-left">
              <div className="font-medium">Report Issues</div>
              <div className="text-xs text-muted-foreground">Get help with updates</div>
            </div>
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-auto p-4">
          <Link href="/docs/changelog" className="flex flex-col items-start gap-2">
            <Package className="h-5 w-5 text-accent-600" />
            <div className="text-left">
              <div className="font-medium">Changelog</div>
              <div className="text-xs text-muted-foreground">See what's new</div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  )
}