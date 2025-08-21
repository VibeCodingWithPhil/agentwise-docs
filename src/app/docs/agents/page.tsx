export default function AgentsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Agent System</h1>
      <p className="lead">
        Learn about Agentwise's specialized AI agents and how they work together to build your projects.
      </p>

      <h2>Available Agents</h2>
      
      <h3>Frontend Specialist</h3>
      <p>
        Handles all UI/UX development, React components, styling, and user interactions.
        Specializes in modern frameworks like Next.js, React, and Vue.
      </p>

      <h3>Backend Specialist</h3>
      <p>
        Manages server-side logic, APIs, databases, and authentication.
        Expert in Node.js, Python, and various backend frameworks.
      </p>

      <h3>Database Specialist</h3>
      <p>
        Designs schemas, optimizes queries, and handles data migrations.
        Works with PostgreSQL, MongoDB, MySQL, and more.
      </p>

      <h3>DevOps Specialist</h3>
      <p>
        Configures CI/CD pipelines, deployment, and infrastructure.
        Handles Docker, Kubernetes, and cloud platforms.
      </p>

      <h3>Testing Specialist</h3>
      <p>
        Writes comprehensive tests, ensures quality, and maintains coverage.
        Implements unit, integration, and end-to-end testing.
      </p>

      <h3>Designer Specialist</h3>
      <p>
        Creates UI designs, style systems, and visual components.
        Works with Figma integration for design-to-code workflows.
      </p>

      <h3>Research Agent</h3>
      <p>
        Conducts research, analyzes requirements, and gathers information.
        Provides context and recommendations for implementation.
      </p>

      <h2>How Agents Work</h2>
      
      <h3>Parallel Execution</h3>
      <p>
        Multiple agents work simultaneously on different aspects of your project,
        dramatically reducing development time while maintaining quality.
      </p>

      <h3>Smart Coordination</h3>
      <p>
        Agents communicate through a shared context system, ensuring consistent
        implementation across all components.
      </p>

      <h3>Token Optimization</h3>
      <p>
        Advanced context sharing reduces token usage by 30-40%, making multi-agent
        orchestration cost-effective.
      </p>

      <h2>Custom Agents</h2>
      <p>
        You can create specialized agents for your specific needs using the
        <code>/generate-agent</code> command. Custom agents integrate seamlessly
        with the existing system.
      </p>

      <h2>Agent Selection</h2>
      <p>
        Agentwise automatically selects the appropriate agents based on your project
        requirements. You can also manually specify agents when needed.
      </p>
    </div>
  )
}