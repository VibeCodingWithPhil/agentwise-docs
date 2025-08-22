import { Users, Code, Database, Cloud, TestTube, Palette, Search, Brain, Zap, GitBranch, Settings, Rocket } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"

const availableAgents = [
  {
    name: "Frontend Specialist",
    icon: Code,
    description: "UI/UX development expert",
    capabilities: ["React/Next.js/Vue", "Component architecture", "State management", "Responsive design"],
    tools: ["Figma", "Tailwind CSS", "Shadcn UI", "Material UI"],
    color: "blue"
  },
  {
    name: "Backend Specialist",
    icon: GitBranch,
    description: "Server-side logic and API development",
    capabilities: ["REST/GraphQL APIs", "Authentication", "Data processing", "Microservices"],
    tools: ["Node.js", "Python", "Express", "FastAPI"],
    color: "green"
  },
  {
    name: "Database Specialist",
    icon: Database,
    description: "Data architecture and optimization",
    capabilities: ["Schema design", "Query optimization", "Migrations", "Indexing strategies"],
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    color: "purple"
  },
  {
    name: "DevOps Specialist",
    icon: Cloud,
    description: "Infrastructure and deployment automation",
    capabilities: ["CI/CD pipelines", "Containerization", "Cloud deployment", "Monitoring"],
    tools: ["Docker", "Kubernetes", "GitHub Actions", "AWS/Azure"],
    color: "orange"
  },
  {
    name: "Testing Specialist",
    icon: TestTube,
    description: "Quality assurance and testing",
    capabilities: ["Unit testing", "Integration testing", "E2E testing", "Performance testing"],
    tools: ["Jest", "Playwright", "Cypress", "Storybook"],
    color: "red"
  },
  {
    name: "Designer Specialist",
    icon: Palette,
    description: "Visual design and user experience",
    capabilities: ["UI design", "Design systems", "Prototyping", "Brand identity"],
    tools: ["Figma", "Sketch", "Adobe XD", "Framer"],
    color: "pink"
  },
  {
    name: "Research Agent",
    icon: Search,
    description: "Requirements analysis and research",
    capabilities: ["Market research", "Tech evaluation", "Documentation", "Best practices"],
    tools: ["Web search", "Documentation APIs", "Analysis tools"],
    color: "indigo"
  }
]

const workflowFeatures = [
  {
    title: "Parallel Execution",
    icon: Zap,
    description: "Multiple agents work simultaneously on different project aspects",
    benefits: ["5-10x faster development", "No blocking dependencies", "Efficient resource usage"],
    metrics: "8+ agents concurrently"
  },
  {
    title: "Smart Coordination",
    icon: Brain,
    description: "Intelligent task distribution and context sharing",
    benefits: ["Consistent implementation", "No duplicate work", "Seamless integration"],
    metrics: "95% coordination accuracy"
  },
  {
    title: "Token Optimization",
    icon: Settings,
    description: "Advanced context management for cost efficiency",
    benefits: ["30-40% token reduction", "Shared context pools", "Incremental updates"],
    metrics: "$8.7k monthly savings"
  },
  {
    title: "Quality Assurance",
    icon: TestTube,
    description: "Built-in validation and testing at every step",
    benefits: ["Automated testing", "Code review", "Performance checks"],
    metrics: "98% success rate"
  }
]

const customAgentExample = `# Custom Security Specialist

## Role
You are a security specialist focused on application security and compliance.

## Capabilities
- Security vulnerability scanning
- OWASP compliance checking
- Authentication implementation
- Data encryption strategies
- Security best practices

## Tools
- Security scanners
- Dependency auditors
- Penetration testing tools

## Success Metrics
- Zero critical vulnerabilities
- OWASP Top 10 compliance
- Secure authentication flow
- Encrypted sensitive data`

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Users className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Agent System</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Specialized AI agents working in parallel to build your projects with unprecedented speed and quality.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle className="text-accent-700 dark:text-accent-400">
            🚀 Agent Ecosystem Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">7+</div>
              <div className="text-sm text-muted-foreground">Core Agents</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">Unlimited</div>
              <div className="text-sm text-muted-foreground">Custom Agents</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">61+</div>
              <div className="text-sm text-muted-foreground">MCP Tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">5-10x</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Agents */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🤖 Available Agents</h2>
        <p className="text-muted-foreground">
          Each agent is a specialist in their domain with access to specific tools and capabilities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {availableAgents.map((agent, index) => {
            const IconComponent = agent.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-accent" />
                    {agent.name}
                  </CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Capabilities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.capabilities.map((cap, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {cap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <h4 className="font-medium text-sm mb-2">Tools & Frameworks:</h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* How Agents Work */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">⚙️ How Agents Work</h2>
        <p className="text-muted-foreground">
          Advanced orchestration ensures efficient collaboration and optimal results.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {workflowFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-accent" />
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <Badge variant="default" className="text-xs">
                        {feature.metrics}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Custom Agents */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">✨ Custom Agents</h2>
        <p className="text-muted-foreground">
          Create specialized agents tailored to your specific needs.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Creating Your Own Agent</CardTitle>
            <CardDescription>
              Use the /generate-agent command or manually create agent definitions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Quick Start:</h4>
                <CodeBlock language="bash">{`# Generate a new custom agent
/generate-agent "security-specialist"

# Or manually create an agent
touch .claude/agents/security-specialist.md`}</CodeBlock>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Example Definition:</h4>
                <CodeBlock language="markdown">{customAgentExample}</CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Selection */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Intelligent Agent Selection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Automatic Selection</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Analyzes project requirements</li>
                <li>• Selects optimal agent team</li>
                <li>• Distributes tasks efficiently</li>
                <li>• Adapts to project complexity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Manual Control</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Specify agents explicitly</li>
                <li>• Override recommendations</li>
                <li>• Fine-tune agent behavior</li>
                <li>• Custom workflows</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}