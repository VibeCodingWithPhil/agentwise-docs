import { Code2, Plug, Activity, Shield, AlertTriangle, Gauge, Webhook, Database } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"

const coreApis = [
  {
    name: "Project Management API",
    description: "Create, manage, and monitor projects",
    methods: ["createProject", "getProject", "listProjects", "deleteProject"],
    code: `interface ProjectManager {
  createProject(name: string, spec: ProjectSpec): Promise<Project>
  getProject(id: string): Promise<Project>
  listProjects(): Promise<Project[]>
  deleteProject(id: string): Promise<void>
}`
  },
  {
    name: "Agent Orchestration API",
    description: "Control and monitor AI agents",
    methods: ["launchAgents", "monitorProgress", "getAgentStatus", "terminateAgent"],
    code: `interface AgentOrchestrator {
  launchAgents(agents: Agent[], task: Task): Promise<void>
  monitorProgress(): Observable<Progress>
  getAgentStatus(agentId: string): AgentStatus
  terminateAgent(agentId: string): Promise<void>
}`
  },
  {
    name: "Task Distribution API",
    description: "Distribute and manage tasks across agents",
    methods: ["distributeTask", "getTaskStatus", "cancelTask", "prioritizeTask"],
    code: `interface TaskDistributor {
  distributeTask(task: Task, agents: Agent[]): Promise<void>
  getTaskStatus(taskId: string): TaskStatus
  cancelTask(taskId: string): Promise<void>
  prioritizeTask(taskId: string, priority: number): Promise<void>
}`
  }
]

const restEndpoints = [
  { method: "GET", path: "/api/status", description: "System status and health check", auth: "None" },
  { method: "GET", path: "/api/agents", description: "List all active agents", auth: "API Key" },
  { method: "GET", path: "/api/projects", description: "List all projects", auth: "API Key" },
  { method: "GET", path: "/api/metrics", description: "Performance metrics", auth: "API Key" },
  { method: "POST", path: "/api/agents/launch", description: "Launch new agents", auth: "API Key" },
  { method: "POST", path: "/api/tasks/create", description: "Create new task", auth: "API Key" },
  { method: "DELETE", path: "/api/projects/:id", description: "Delete project", auth: "API Key" },
  { method: "PATCH", path: "/api/tasks/:id", description: "Update task status", auth: "API Key" }
]

const websocketEvents = [
  { event: "agent:start", description: "Agent begins execution", payload: "{ agentId, taskId, timestamp }" },
  { event: "agent:progress", description: "Progress update from agent", payload: "{ agentId, progress, message }" },
  { event: "agent:complete", description: "Agent completes task", payload: "{ agentId, taskId, result }" },
  { event: "agent:error", description: "Error during execution", payload: "{ agentId, error, stack }" },
  { event: "task:created", description: "New task created", payload: "{ taskId, type, priority }" },
  { event: "task:completed", description: "Task fully completed", payload: "{ taskId, duration, status }" }
]

const errorCodes = [
  { code: "E001", message: "Agent initialization failed", status: 500, retry: true },
  { code: "E002", message: "Task distribution error", status: 500, retry: true },
  { code: "E003", message: "Token limit exceeded", status: 429, retry: false },
  { code: "E004", message: "Project not found", status: 404, retry: false },
  { code: "E005", message: "Invalid configuration", status: 400, retry: false },
  { code: "E006", message: "Authentication failed", status: 401, retry: false }
]

const rateLimits = [
  { endpoint: "Project creation", limit: "10 per hour", burst: "3 per minute" },
  { endpoint: "Agent launches", limit: "100 per hour", burst: "10 per minute" },
  { endpoint: "Task creation", limit: "1000 per hour", burst: "50 per minute" },
  { endpoint: "WebSocket connections", limit: "10 concurrent", burst: "N/A" }
]

export default function ApiPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Code2 className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">API Reference</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Complete API documentation for programmatic access to Agentwise's orchestration system.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle className="text-accent-700 dark:text-accent-400">
            🚀 API Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Core APIs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">8+</div>
              <div className="text-sm text-muted-foreground">REST Endpoints</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">6</div>
              <div className="text-sm text-muted-foreground">WebSocket Events</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">61+</div>
              <div className="text-sm text-muted-foreground">MCP Servers</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core APIs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔧 Core APIs</h2>
        <p className="text-muted-foreground">
          Primary interfaces for interacting with the Agentwise system.
        </p>
        
        <div className="space-y-6">
          {coreApis.map((api, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{api.name}</CardTitle>
                <CardDescription>{api.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Available Methods:</h4>
                    <div className="flex flex-wrap gap-1">
                      {api.methods.map((method, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs font-mono">
                          {method}()
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Interface Definition:</h4>
                    <CodeBlock language="typescript">{api.code}</CodeBlock>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* REST Endpoints */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🎯 REST Endpoints</h2>
        <p className="text-muted-foreground">
          HTTP endpoints for RESTful API access.
        </p>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {restEndpoints.map((endpoint, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant={endpoint.method === "GET" ? "secondary" : endpoint.method === "POST" ? "default" : "destructive"}
                      className="font-mono text-xs w-16 justify-center"
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                    <Badge variant="outline" className="text-xs">
                      {endpoint.auth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* WebSocket API */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔌 WebSocket API</h2>
        <p className="text-muted-foreground">
          Real-time event streaming for live updates.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-accent" />
                Connection Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock language="javascript">{`const ws = new WebSocket('ws://localhost:3001')

ws.on('connect', () => {
  console.log('Connected to Agentwise')
})

ws.on('message', (data) => {
  const event = JSON.parse(data)
  console.log('Event:', event.type, event.payload)
})

ws.on('error', (error) => {
  console.error('WebSocket error:', error)
})`}</CodeBlock>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5 text-accent" />
                Event Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {websocketEvents.map((event, index) => (
                  <div key={index} className="p-2 bg-muted/30 rounded">
                    <div className="flex items-start justify-between mb-1">
                      <code className="text-sm font-mono text-accent">{event.event}</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{event.description}</p>
                    <code className="text-xs bg-background px-1 py-0.5 rounded mt-1 inline-block">
                      {event.payload}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* MCP Integration */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔌 MCP Integration</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plug className="h-5 w-5 text-accent" />
              Model Context Protocol
            </CardTitle>
            <CardDescription>
              Interface for 61+ MCP servers providing extended functionality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock language="typescript">{`interface MCPServer {
  name: string
  version: string
  tools: Tool[]
  resources: Resource[]
  
  // Connection management
  connect(config: MCPConfig): Promise<void>
  disconnect(): Promise<void>
  
  // Tool execution
  execute(tool: string, params: any): Promise<any>
  
  // Resource access
  getResource(uri: string): Promise<Resource>
  listResources(): Promise<Resource[]>
}`}</CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Error Handling */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">⚠️ Error Handling</h2>
        <p className="text-muted-foreground">
          Standardized error codes and handling strategies.
        </p>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {errorCodes.map((error, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="font-mono text-xs">
                      {error.code}
                    </Badge>
                    <span className="text-sm">{error.message}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      HTTP {error.status}
                    </Badge>
                    {error.retry && (
                      <Badge variant="secondary" className="text-xs">
                        Retryable
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rate Limits */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            Rate Limits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {rateLimits.map((limit, index) => (
              <div key={index} className="p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">{limit.endpoint}</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Rate Limit:</span>
                  <Badge variant="secondary" className="text-xs">{limit.limit}</Badge>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-muted-foreground">Burst Limit:</span>
                  <Badge variant="outline" className="text-xs">{limit.burst}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}