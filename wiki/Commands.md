# Commands Reference

Complete list of all Agentwise commands and their usage.

## Core Commands

### Project Management

#### `/create <project description>`
Creates a new project with intelligent agent selection.

**Example:**
```
/create "e-commerce platform with React frontend, Node.js backend, and PostgreSQL database"
```

**Options:**
- Automatically selects appropriate agents
- Generates comprehensive project specification
- Creates project structure in `workspace/`

#### `/projects`
Lists all existing projects and allows selection.

**Example:**
```
/projects
# Output:
1. todo-app (Active)
2. e-commerce-platform
3. social-media-app

Select project number: 2
```

#### `/task <feature description>`
Adds a feature to the currently active project.

**Example:**
```
/task "add user authentication with JWT tokens"
```

### Agent Commands

#### `/generate-agent <specialization>`
Creates a new custom agent with specified expertise.

**Example:**
```
/generate-agent "aws-deployment-specialist"
```

#### `/agents`
Lists all available agents and their status.

**Output:**
```
Available Agents:
✅ Frontend Specialist - Ready
✅ Backend Specialist - Ready
✅ Database Specialist - Ready
✅ DevOps Specialist - Ready
✅ Testing Specialist - Ready
✅ Designer Specialist - Ready
✅ Research Agent - Ready
✅ Custom: AWS Specialist - Ready
```

### Import/Export Commands

#### `/init-import <path>`
Imports an existing project into Agentwise.

**Example:**
```
/init-import /Users/username/my-existing-project
```

#### `/task-import <source> <destination>`
Copies and integrates code from one project to another.

**Example:**
```
/task-import ../old-project/auth ./current-project
```

### Integration Commands

#### `/figma <figma-url>`
Imports designs from Figma for implementation.

**Example:**
```
/figma https://www.figma.com/file/abc123/my-design
```

#### `/upload <file-path>`
Uploads documents or files for processing.

**Example:**
```
/upload requirements.pdf
```

#### `/clone-website <url>`
Clones and customizes an existing website.

**Example:**
```
/clone-website https://example.com
```

### Monitoring Commands

#### `/monitor`
Opens the real-time monitoring dashboard.

**Features:**
- Agent status tracking
- Token usage graphs
- Task progress
- Error monitoring

#### `/status`
Shows current system status.

**Output:**
```
System Status:
- Agents: 7/7 operational
- Active Tasks: 3
- Token Usage: 45,230 (35% optimized)
- Projects: 5
- Uptime: 2h 34m
```

### Configuration Commands

#### `/setup-ollama`
Configures Ollama for local model support.

#### `/setup-lmstudio`
Configures LM Studio integration.

#### `/local-models`
Lists available local models.

#### `/configure-routing`
Sets up smart model routing for optimization.

### Documentation Commands

#### `/docs`
Opens the local documentation hub.

#### `/help [command]`
Shows help for a specific command.

**Example:**
```
/help create
# Shows detailed help for the /create command
```

### Security Commands

#### `/security-review`
Performs security analysis on the current project.

**Output:**
```
Security Review:
✅ No hardcoded secrets found
✅ Dependencies up to date
⚠️ 2 medium vulnerabilities in dependencies
✅ Authentication properly implemented
✅ Input validation in place
```

## Command Shortcuts

| Shortcut | Full Command | Description |
|----------|-------------|-------------|
| `/c` | `/create` | Create new project |
| `/t` | `/task` | Add task to project |
| `/p` | `/projects` | List projects |
| `/m` | `/monitor` | Open monitoring |
| `/s` | `/status` | Show status |

## Command Modifiers

### Flags

#### `--verbose`
Provides detailed output for commands.

```
/create "todo app" --verbose
```

#### `--dry-run`
Shows what would happen without executing.

```
/task "add feature" --dry-run
```

#### `--force`
Forces execution even with warnings.

```
/init-import ./project --force
```

### Parameters

#### `--agents=<list>`
Specifies which agents to use.

```
/create "app" --agents=frontend,backend
```

#### `--timeout=<seconds>`
Sets custom timeout for operations.

```
/task "complex feature" --timeout=600
```

#### `--priority=<level>`
Sets task priority (low, medium, high, critical).

```
/task "bug fix" --priority=critical
```

## Command Chaining

You can chain multiple commands using `&&`:

```
/create "new app" && /task "add auth" && /monitor
```

## Command History

Access command history with arrow keys or:

```
/history
# Shows last 20 commands

/history 50
# Shows last 50 commands

/repeat 3
# Repeats command #3 from history
```

## Custom Commands

Create custom commands in `.claude/commands/`:

```javascript
// .claude/commands/deploy.js
module.exports = {
  name: 'deploy',
  description: 'Deploy to production',
  execute: async (args) => {
    // Custom deployment logic
  }
}
```

## Environment-Specific Commands

### Development
```
/dev:start    # Start development environment
/dev:test     # Run tests
/dev:lint     # Run linting
```

### Production
```
/prod:deploy  # Deploy to production
/prod:backup  # Create backup
/prod:rollback # Rollback deployment
```

## Troubleshooting Commands

```
/doctor       # Run system diagnostics
/clean        # Clean temporary files
/reset        # Reset system state
/repair       # Attempt auto-repair
```

## Getting Help

- Use `/help` for general help
- Use `/help <command>` for specific command help
- Check documentation at https://agentwise-docs.vercel.app
- Ask in [Discussions](https://github.com/VibeCodingWithPhil/agentwise-docs/discussions)

---

*Last updated: January 2025*