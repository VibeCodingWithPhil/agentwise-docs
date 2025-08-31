import Link from "next/link"
import { Shield, HardDrive, GitBranch, AlertTriangle, RotateCcw, CheckCircle2, ArrowRight, Lock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export default function ProtectionSystemPage() {
  const protectionFlowDiagram = `
graph LR
    Start([Enable Protection]) --> Config[Configuration]
    Config --> Components{Protection Components}
    
    Components --> Backup[Auto Backup]
    Components --> Security[Security Scan]
    Components --> Review[Code Review]
    Components --> Monitor[Monitoring]
    
    Backup --> Schedule[Schedule Setup]
    Security --> Scan[Continuous Scan]
    Review --> Auto[Auto Review]
    Monitor --> Alert[Alert System]
    
    Schedule --> Active([Protection Active])
    Scan --> Active
    Auto --> Active
    Alert --> Active
    
    style Start fill:#6366f1,color:#fff
    style Active fill:#10b981,color:#fff
    style Components fill:#f59e0b,color:#fff
  `

  const backupStrategyDiagram = `
graph TB
    Project[Project Files] --> Trigger{Backup Trigger}
    
    Trigger -->|Scheduled| Time[Every 30 min]
    Trigger -->|On Change| Watch[File Watcher]
    Trigger -->|Manual| Command[/backup]
    
    Time --> Process[Backup Process]
    Watch --> Process
    Command --> Process
    
    Process --> Hash[SHA-256 Hash]
    Hash --> Compress[Compression]
    Compress --> Store{Storage}
    
    Store --> Local[Local Backup]
    Store --> Cloud[Cloud Backup]
    Store --> Git[Git History]
    
    Local --> Rotate[Rotation Policy]
    Cloud --> Rotate
    Git --> Rotate
    
    Rotate --> Keep[Keep Last 10]
    
    style Project fill:#6366f1,color:#fff
    style Keep fill:#10b981,color:#fff
    style Trigger fill:#f59e0b,color:#fff
  `

  const securityScanDiagram = `
graph LR
    Code[Code Changes] --> Scan{Security Scan}
    
    Scan --> Vuln[Vulnerability Check]
    Scan --> Secrets[Secret Detection]
    Scan --> Deps[Dependency Audit]
    Scan --> SAST[Static Analysis]
    
    Vuln --> Report{Security Report}
    Secrets --> Report
    Deps --> Report
    SAST --> Report
    
    Report -->|Issues Found| Alert[Alert & Block]
    Report -->|All Clear| Pass[Allow Changes]
    
    Alert --> Fix[Auto-fix Available?]
    Fix -->|Yes| AutoFix[Apply Fix]
    Fix -->|No| Manual[Manual Review]
    
    AutoFix --> Pass
    Manual --> Dev[Developer Action]
    
    style Code fill:#6366f1,color:#fff
    style Pass fill:#10b981,color:#fff
    style Alert fill:#ef4444,color:#fff
  `

  const recoveryProcessDiagram = `
graph TB
    Issue([Issue Detected]) --> Type{Issue Type}
    
    Type -->|Corruption| Backup[Find Last Good Backup]
    Type -->|Security| Quarantine[Quarantine Files]
    Type -->|Crash| State[Restore State]
    
    Backup --> Verify[Verify Integrity]
    Quarantine --> Scan[Deep Scan]
    State --> Check[Check Dependencies]
    
    Verify --> Restore{Restore?}
    Scan --> Restore
    Check --> Restore
    
    Restore -->|Yes| Execute[Execute Recovery]
    Restore -->|No| Manual[Manual Intervention]
    
    Execute --> Test[Run Tests]
    Test -->|Pass| Success([Recovery Complete])
    Test -->|Fail| Rollback[Rollback Again]
    
    style Issue fill:#ef4444,color:#fff
    style Success fill:#10b981,color:#fff
    style Type fill:#f59e0b,color:#fff
  `

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Automated Protection System</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Continuous backup, security scanning, and automated recovery
            </p>
            <div className="flex gap-4 mt-3">
              <Badge variant="secondary">Auto Backup</Badge>
              <Badge variant="secondary">Security Scanning</Badge>
              <Badge variant="secondary">Code Review</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle>🚀 Quick Start</CardTitle>
          <CardDescription>
            Enable comprehensive protection for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`# Enable all protection features
/enable-protection

# Check protection status
/protection-status

# Manual backup
/backup

# Security review
/security-review

# Rollback to safe state
/rollback`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Protection Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Protection System Architecture</CardTitle>
          <CardDescription>
            Multi-layered protection for your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={protectionFlowDiagram} />
          
          <div className="grid gap-4 mt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HardDrive className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">1. Automatic Backups</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous backups every 30 minutes with integrity verification
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">2. Security Scanning</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time vulnerability detection and secret scanning
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GitBranch className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">3. Code Review</h4>
                <p className="text-sm text-muted-foreground">
                  Automated code review with best practice enforcement
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Backup Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>Backup Strategy</CardTitle>
          <CardDescription>
            Multi-destination backup with automatic rotation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={backupStrategyDiagram} />
          
          <Alert className="mt-6">
            <HardDrive className="h-4 w-4" />
            <AlertDescription>
              Backups are compressed and encrypted with SHA-256 integrity verification.
              The system maintains the last 10 backups with automatic rotation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Backup Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automatic 30-minute backups</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>On-change backups</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>SHA-256 integrity checks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Compression & encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Multi-destination storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automatic rotation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>One-click restore</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Differential backups</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Vulnerability scanning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Secret detection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Dependency auditing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>SAST analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>License compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Code quality checks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Auto-remediation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Security reports</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Scanning */}
      <Card>
        <CardHeader>
          <CardTitle>Security Scanning Pipeline</CardTitle>
          <CardDescription>
            Continuous security analysis with automatic remediation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={securityScanDiagram} />
        </CardContent>
      </Card>

      {/* Recovery Process */}
      <Card>
        <CardHeader>
          <CardTitle>Automated Recovery Process</CardTitle>
          <CardDescription>
            Intelligent recovery from various failure scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={recoveryProcessDiagram} />
        </CardContent>
      </Card>

      {/* Protection Levels */}
      <Card>
        <CardHeader>
          <CardTitle>Protection Levels</CardTitle>
          <CardDescription>
            Choose the right protection level for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Basic Protection</h4>
                <Badge variant="outline">Free</Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Manual backups</li>
                <li>• Basic security scanning</li>
                <li>• Local storage only</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg border-primary">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Standard Protection</h4>
                <Badge>Recommended</Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automatic 30-min backups</li>
                <li>• Full security scanning</li>
                <li>• Cloud backup storage</li>
                <li>• Auto-recovery</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Advanced Protection</h4>
                <Badge variant="outline">Enterprise</Badge>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Real-time continuous backup</li>
                <li>• Advanced threat detection</li>
                <li>• Multi-region storage</li>
                <li>• Instant recovery</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Example */}
      <Card>
        <CardHeader>
          <CardTitle>Example Protection Status</CardTitle>
          <CardDescription>
            Real-time protection monitoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`$ /protection-status

🛡️ Protection System Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Project: task-management-app
🔒 Protection Level: Standard
✅ Status: Active

📊 Backup Status
• Last Backup: 2 minutes ago
• Next Scheduled: in 28 minutes
• Total Backups: 47
• Storage Used: 234 MB
• Integrity: ✅ All verified

🔐 Security Status
• Last Scan: 5 minutes ago
• Vulnerabilities: 0 found
• Secrets Detected: 0
• Dependencies: All secure
• License Issues: None

📝 Code Review
• Auto-Review: Enabled
• Last Review: 10 minutes ago
• Issues Found: 2 (auto-fixed)
• Code Quality: 95/100

⚡ Recent Activity
[14:32] ✅ Automatic backup completed
[14:30] ✅ Security scan passed
[14:28] ⚠️ Fixed: Missing error handling in api.ts
[14:25] ✅ Code review completed
[14:20] ✅ Dependency update: react 18.2.0 → 18.3.0

🔄 Recovery Points
1. 2 minutes ago - Latest backup
2. 32 minutes ago - Before dependency update
3. 1 hour ago - Stable checkpoint
4. 2 hours ago - After feature merge
5. 4 hours ago - Morning checkpoint

💡 Recommendations
• Consider enabling real-time backup for critical changes
• 2 optional dependency updates available
• Code coverage could be improved (currently 78%)

✨ Protection system is functioning normally`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Commands Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Protection Commands</CardTitle>
          <CardDescription>
            All commands for managing protection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">/enable-protection</h4>
            <p className="text-sm text-muted-foreground">
              Enable automated protection for current project
            </p>
            <CodeBlock language="bash" copy>
              /enable-protection
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/protection-status</h4>
            <p className="text-sm text-muted-foreground">
              View real-time protection status and metrics
            </p>
            <CodeBlock language="bash" copy>
              /protection-status
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/security-review</h4>
            <p className="text-sm text-muted-foreground">
              Run comprehensive security analysis
            </p>
            <CodeBlock language="bash" copy>
              /security-review
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/security-report</h4>
            <p className="text-sm text-muted-foreground">
              Generate detailed security report
            </p>
            <CodeBlock language="bash" copy>
              /security-report
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">/rollback</h4>
            <p className="text-sm text-muted-foreground">
              Rollback to previous safe state
            </p>
            <CodeBlock language="bash" copy>
              /rollback
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
              Complete Project Setup
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/github-integration" className="block">
            <Button variant="outline" className="w-full justify-between">
              GitHub Integration
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/monitoring" className="block">
            <Button variant="outline" className="w-full justify-between">
              Monitoring Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}