# Installation Guide

This guide will walk you through installing and setting up Agentwise on your system.

## Prerequisites

Before installing Agentwise, ensure you have:

- **Node.js 18+** installed
- **Git** for version control
- **Claude API Key** from Anthropic
- **5GB free disk space** for projects and dependencies
- **macOS, Linux, or Windows** with WSL2

## Installation Methods

### Method 1: Quick Install (Recommended)

```bash
# Clone the repository
git clone https://github.com/VibeCodingWithPhil/agentwise.git
cd agentwise

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY

# Initialize Agentwise
npm run setup
```

### Method 2: Manual Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VibeCodingWithPhil/agentwise.git
   cd agentwise
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   ```bash
   # Create .env file
   touch .env
   
   # Add your API key
   echo "ANTHROPIC_API_KEY=your-key-here" >> .env
   ```

4. **Build the System**
   ```bash
   npm run build
   ```

5. **Verify Installation**
   ```bash
   npm run test
   ```

## Configuration

### Essential Configuration

Edit `.env` file with your settings:

```env
# Required
ANTHROPIC_API_KEY=sk-ant-xxx

# Optional
OPENAI_API_KEY=sk-xxx
LOCAL_MODEL_ENDPOINT=http://localhost:11434
MAX_CONCURRENT_AGENTS=3
TOKEN_OPTIMIZATION=true
```

### Advanced Configuration

Create `config/agentwise.json`:

```json
{
  "agents": {
    "maxConcurrent": 3,
    "timeout": 300000,
    "retryAttempts": 3
  },
  "tokenOptimization": {
    "enabled": true,
    "targetReduction": 0.35,
    "contextSharing": true
  },
  "monitoring": {
    "enabled": true,
    "port": 3001,
    "dashboardUrl": "http://localhost:3000"
  }
}
```

## Setting Up Agents

### Default Agents

Agentwise comes with pre-configured agents:
- Frontend Specialist
- Backend Specialist
- Database Specialist
- DevOps Specialist
- Testing Specialist
- Designer Specialist
- Research Agent

### Custom Agents Directory

Create custom agents in `.claude/agents/`:

```bash
mkdir -p .claude/agents
touch .claude/agents/my-specialist.md
```

## MCP Server Setup

### Enable MCP Servers

1. **Install MCP CLI**
   ```bash
   npm install -g @modelcontextprotocol/cli
   ```

2. **Configure MCP Servers**
   ```bash
   # List available servers
   mcp list
   
   # Install specific servers
   mcp install figma
   mcp install postgresql
   ```

3. **Verify MCP Integration**
   ```bash
   npm run mcp:test
   ```

## Verification

### Run System Check

```bash
npm run doctor
```

Expected output:
```
✅ Node.js version: 20.11.0
✅ NPM version: 10.2.4
✅ Git version: 2.39.3
✅ API Key configured
✅ Agents loaded: 7
✅ MCP servers: 61
✅ System ready!
```

### Test Installation

Create a test project:

```bash
# Using Agentwise
npm run agentwise

# Or using commands
/create "test-todo-app"
```

## Platform-Specific Instructions

### macOS

```bash
# Install via Homebrew
brew install node git

# Clone and setup
git clone https://github.com/VibeCodingWithPhil/agentwise.git
cd agentwise && npm install
```

### Linux (Ubuntu/Debian)

```bash
# Install prerequisites
sudo apt update
sudo apt install nodejs npm git

# Clone and setup
git clone https://github.com/VibeCodingWithPhil/agentwise.git
cd agentwise && npm install
```

### Windows (WSL2)

```powershell
# Install WSL2
wsl --install

# Inside WSL2
sudo apt update
sudo apt install nodejs npm git

# Clone and setup
git clone https://github.com/VibeCodingWithPhil/agentwise.git
cd agentwise && npm install
```

## Docker Installation

```dockerfile
# Pull official image
docker pull agentwise/agentwise:latest

# Run with API key
docker run -it \
  -e ANTHROPIC_API_KEY=your-key \
  -v $(pwd)/workspace:/workspace \
  -p 3000:3000 \
  -p 3001:3001 \
  agentwise/agentwise
```

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| API key not working | Verify key starts with `sk-ant-` |
| Agents not loading | Check `.claude/agents/` directory |
| MCP connection failed | Restart MCP servers |
| Token limit exceeded | Enable token optimization |
| Build errors | Run `npm run clean && npm install` |

### Getting Help

- **Documentation**: https://agentwise-docs.vercel.app
- **GitHub Issues**: https://github.com/VibeCodingWithPhil/agentwise/issues
- **Discord**: @vibecodingwithphil

## Next Steps

- Read the [Quick Start Tutorial](Quick-Start)
- Explore [Available Commands](Commands)
- Learn about [Custom Agents](Creating-Custom-Agents)
- Configure [MCP Servers](MCP-Integration)

---

*Need help? Join our [Discord](https://discord.gg/agentwise) or open an [issue](https://github.com/VibeCodingWithPhil/agentwise/issues).*