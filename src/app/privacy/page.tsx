import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, Globe, Cookie } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const dataCategories = [
  {
    category: "Project Data",
    icon: Database,
    description: "Information about your development projects",
    dataTypes: [
      "Project names and descriptions",
      "Code and file contents",
      "Task specifications",
      "Configuration settings"
    ],
    storage: "Local filesystem",
    retention: "Until manually deleted"
  },
  {
    category: "Usage Analytics",
    icon: Eye,
    description: "Anonymous usage statistics for improvement",
    dataTypes: [
      "Feature usage patterns",
      "Performance metrics",
      "Error logs (sanitized)",
      "Command frequency"
    ],
    storage: "Local only",
    retention: "30 days"
  },
  {
    category: "API Interactions",
    icon: Globe,
    description: "Communication with AI providers",
    dataTypes: [
      "Prompts and responses",
      "Token usage",
      "Model selections",
      "API keys (encrypted)"
    ],
    storage: "Memory only",
    retention: "Session duration"
  }
]

const privacyPrinciples = [
  {
    principle: "Local-First Architecture",
    description: "All your data stays on your machine by default",
    icon: Lock,
    details: "Agentwise operates entirely on your local system. No data is sent to our servers."
  },
  {
    principle: "No Telemetry",
    description: "We don't collect usage data or analytics",
    icon: Shield,
    details: "Unlike many tools, Agentwise doesn't phone home. Your usage is completely private."
  },
  {
    principle: "Transparent AI Usage",
    description: "Clear about when and how AI services are used",
    icon: UserCheck,
    details: "You control which AI providers to use and when to send data to them."
  },
  {
    principle: "Secure Storage",
    description: "Sensitive data is encrypted at rest",
    icon: Database,
    details: "API keys and credentials are encrypted using industry-standard encryption."
  }
]

const dataRights = [
  {
    right: "Access",
    description: "View all data stored by Agentwise",
    how: "Browse the workspace/ and .claude/ directories"
  },
  {
    right: "Deletion",
    description: "Remove your data at any time",
    how: "Delete project folders or run cleanup commands"
  },
  {
    right: "Portability",
    description: "Export and move your data",
    how: "Copy project folders to any location"
  },
  {
    right: "Control",
    description: "Choose what data to share",
    how: "Configure API providers and model routing"
  }
]

const thirdPartyServices = [
  {
    service: "Claude API (Anthropic)",
    purpose: "AI model for code generation",
    dataShared: "Code context and prompts",
    privacy: "https://www.anthropic.com/privacy"
  },
  {
    service: "OpenAI API (Optional)",
    purpose: "Alternative AI model",
    dataShared: "Code context and prompts",
    privacy: "https://openai.com/privacy"
  },
  {
    service: "Local Models (Optional)",
    purpose: "On-device AI processing",
    dataShared: "None - runs locally",
    privacy: "N/A - No external data sharing"
  },
  {
    service: "GitHub (Optional)",
    purpose: "Version control integration",
    dataShared: "Repository data",
    privacy: "https://docs.github.com/privacy"
  }
]

export default function PrivacyPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Your privacy is fundamental. Agentwise is designed to keep your data local and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-2xl font-bold text-accent">January 1, 2024</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Version 1.0
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Principles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🛡️ Privacy Principles</h2>
        <p className="text-muted-foreground">
          Core principles that guide how Agentwise handles your data.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {privacyPrinciples.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-accent" />
                    {principle.principle}
                  </CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{principle.details}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Data Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">📊 Data We Handle</h2>
        <p className="text-muted-foreground">
          Types of data processed by Agentwise and how it's managed.
        </p>
        
        <div className="space-y-6">
          {dataCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-accent" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Data Types:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {category.dataTypes.map((type, idx) => (
                          <li key={idx}>• {type}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm mb-1">Storage Location:</h4>
                          <Badge variant="secondary" className="text-xs">
                            {category.storage}
                          </Badge>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-1">Retention Period:</h4>
                          <Badge variant="outline" className="text-xs">
                            {category.retention}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Your Rights */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">✅ Your Rights</h2>
        <p className="text-muted-foreground">
          You have complete control over your data in Agentwise.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {dataRights.map((right, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">{right.right}</h3>
                <p className="text-sm text-muted-foreground mb-3">{right.description}</p>
                <div className="p-2 bg-muted/30 rounded">
                  <p className="text-xs"><strong>How:</strong> {right.how}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Third-Party Services */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔗 Third-Party Services</h2>
        <p className="text-muted-foreground">
          External services that Agentwise may interact with based on your configuration.
        </p>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{service.service}</h4>
                    {service.privacy !== "N/A - No external data sharing" && (
                      <a 
                        href={service.privacy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline"
                      >
                        Privacy Policy →
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    <strong>Purpose:</strong> {service.purpose}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Data Shared:</strong> {service.dataShared}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Measures */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-green-700 dark:text-green-400 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security Measures
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Data Protection</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Encrypted storage for sensitive data</li>
                <li>• Secure API key management</li>
                <li>• No plain-text credential storage</li>
                <li>• Regular security updates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Access Control</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Local-only data access</li>
                <li>• No remote access capabilities</li>
                <li>• User-controlled permissions</li>
                <li>• Audit logging available</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cookies Notice */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-accent" />
            Cookies & Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The Agentwise CLI tool does not use cookies or any form of tracking. The documentation
            website uses only essential cookies for functionality (theme preference, session management).
            No analytics or tracking cookies are used.
          </p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-400 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Privacy Questions?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            If you have any questions about this privacy policy or how Agentwise handles your data,
            please don't hesitate to reach out.
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>GitHub Issues:</strong>{" "}
              <a 
                href="https://github.com/yourusername/agentwise/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Open an Issue
              </a>
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@agentwise.dev" className="text-accent hover:underline">
                privacy@agentwise.dev
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}