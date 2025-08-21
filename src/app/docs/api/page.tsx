export default function ApiPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>API Reference</h1>
      <p className="lead">
        Complete API documentation for Agentwise's programmatic interfaces and integration points.
      </p>

      <h2>Core APIs</h2>
      
      <h3>Project Management API</h3>
      <pre className="language-typescript">
{`interface ProjectManager {
  createProject(name: string, spec: ProjectSpec): Promise<Project>
  getProject(id: string): Promise<Project>
  listProjects(): Promise<Project[]>
  deleteProject(id: string): Promise<void>
}`}
      </pre>

      <h3>Agent Orchestration API</h3>
      <pre className="language-typescript">
{`interface AgentOrchestrator {
  launchAgents(agents: Agent[], task: Task): Promise<void>
  monitorProgress(): Observable<Progress>
  getAgentStatus(agentId: string): AgentStatus
  terminateAgent(agentId: string): Promise<void>
}`}
      </pre>

      <h3>Task Distribution API</h3>
      <pre className="language-typescript">
{`interface TaskDistributor {
  distributeTask(task: Task, agents: Agent[]): Promise<void>
  getTaskStatus(taskId: string): TaskStatus
  cancelTask(taskId: string): Promise<void>
}`}
      </pre>

      <h2>WebSocket API</h2>
      
      <h3>Real-time Monitoring</h3>
      <p>Connect to the WebSocket server for real-time updates:</p>
      <pre className="language-javascript">
{`const ws = new WebSocket('ws://localhost:3001')

ws.on('message', (data) => {
  const update = JSON.parse(data)
  console.log('Agent update:', update)
})`}
      </pre>

      <h3>Event Types</h3>
      <ul>
        <li><code>agent:start</code> - Agent begins execution</li>
        <li><code>agent:progress</code> - Progress update</li>
        <li><code>agent:complete</code> - Agent finishes task</li>
        <li><code>agent:error</code> - Error occurred</li>
        <li><code>task:created</code> - New task created</li>
        <li><code>task:completed</code> - Task completed</li>
      </ul>

      <h2>REST Endpoints</h2>
      
      <h3>Monitor Dashboard API</h3>
      <pre className="language-bash">
{`GET  /api/status        # System status
GET  /api/agents        # List active agents
GET  /api/projects      # List projects
GET  /api/metrics       # Performance metrics
POST /api/agents/launch # Launch agents
POST /api/tasks/create  # Create task`}
      </pre>

      <h2>MCP Integration</h2>
      
      <h3>Model Context Protocol</h3>
      <p>
        Agentwise supports 61+ MCP servers for extended functionality:
      </p>
      <pre className="language-typescript">
{`interface MCPServer {
  name: string
  version: string
  tools: Tool[]
  resources: Resource[]
  connect(): Promise<void>
  execute(tool: string, params: any): Promise<any>
}`}
      </pre>

      <h2>Plugin API</h2>
      
      <h3>Creating Plugins</h3>
      <pre className="language-typescript">
{`export interface AgentPlugin {
  name: string
  version: string
  initialize(context: PluginContext): void
  execute(task: Task): Promise<Result>
  cleanup(): void
}`}
      </pre>

      <h2>Error Handling</h2>
      
      <h3>Error Codes</h3>
      <ul>
        <li><code>E001</code> - Agent initialization failed</li>
        <li><code>E002</code> - Task distribution error</li>
        <li><code>E003</code> - Token limit exceeded</li>
        <li><code>E004</code> - Project not found</li>
        <li><code>E005</code> - Invalid configuration</li>
      </ul>

      <h2>Rate Limits</h2>
      
      <p>API rate limits to ensure system stability:</p>
      <ul>
        <li>Project creation: 10 per hour</li>
        <li>Agent launches: 100 per hour</li>
        <li>Task creation: 1000 per hour</li>
        <li>WebSocket connections: 10 concurrent</li>
      </ul>
    </div>
  )
}