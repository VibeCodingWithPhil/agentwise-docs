# Quick Start Tutorial

Build your first project with Agentwise in under 10 minutes!

## 🎯 What We'll Build

A complete task management application with:
- React frontend with Tailwind CSS
- Node.js/Express backend
- PostgreSQL database
- User authentication
- Real-time updates
- Deployment ready

## Step 1: Start Agentwise

```bash
# Navigate to Agentwise directory
cd agentwise

# Start the system
npm run agentwise
```

## Step 2: Create Your Project

Use the `/create` command to initiate your project:

```
/create "task management app with React frontend, Node.js backend, PostgreSQL database, user authentication, and real-time updates"
```

### What Happens Next

Agentwise will:
1. **Analyze Requirements** - Understand your project needs
2. **Select Agents** - Choose appropriate specialists
3. **Generate Specification** - Create detailed project plan
4. **Launch Agents** - Start parallel development
5. **Build Project** - Create all components simultaneously

## Step 3: Watch the Magic

### Agent Coordination

You'll see multiple agents working in parallel:

```
🚀 Launching agents...
✅ Frontend Specialist: Creating React components
✅ Backend Specialist: Building API endpoints
✅ Database Specialist: Setting up PostgreSQL schema
✅ DevOps Specialist: Configuring deployment
✅ Testing Specialist: Writing test suites
```

### Real-time Progress

Monitor progress in the dashboard:
```bash
# Open monitoring dashboard
npm run monitor
# Navigate to http://localhost:3000
```

## Step 4: Project Structure

Your project will be created in `workspace/task-management-app/`:

```
task-management-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── services/
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   ├── package.json
│   └── server.js
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
├── docker-compose.yml
├── README.md
└── .env.example
```

## Step 5: Run Your Application

### Start the Development Environment

```bash
# Navigate to project
cd workspace/task-management-app

# Install dependencies
npm run install:all

# Start all services
npm run dev
```

### Access Your App

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Database**: localhost:5432

## Step 6: Add Features

Use the `/task` command to add features:

```
/task "add drag and drop functionality to reorder tasks"
```

Agentwise will:
- Understand the current codebase
- Implement the feature across all layers
- Update tests
- Maintain consistency

## Advanced Commands

### Working with Existing Projects

```bash
# Import existing project
/init-import /path/to/your/project

# Add features to imported project
/task "add payment integration with Stripe"
```

### Custom Agent Creation

```bash
# Generate specialized agent
/generate-agent "aws-deployment-specialist"
```

### Project Management

```bash
# List all projects
/projects

# Select active project
Select project #3

# Continue work on project
/task "improve performance"
```

## Example Projects

### 1. E-commerce Platform

```
/create "e-commerce platform with product catalog, shopping cart, payment processing, admin dashboard, and order tracking"
```

**Result**: Full e-commerce site in ~10 minutes

### 2. Social Media App

```
/create "social media app with user profiles, posts, comments, likes, real-time chat, and notifications"
```

**Result**: Complete social platform in ~12 minutes

### 3. SaaS Dashboard

```
/create "SaaS analytics dashboard with data visualization, user management, billing, and API access"
```

**Result**: Enterprise dashboard in ~8 minutes

## Best Practices

### 1. Clear Requirements
Be specific about what you want:
- ❌ "create a website"
- ✅ "create a portfolio website with project gallery, contact form, and blog"

### 2. Iterative Development
Start simple, then add features:
```bash
/create "basic blog"
/task "add comment system"
/task "add search functionality"
/task "add RSS feed"
```

### 3. Use Monitoring
Keep the dashboard open to track:
- Agent progress
- Token usage
- Error detection
- Performance metrics

### 4. Leverage MCP Tools
Agentwise has 61+ integrations:
```bash
# Use Figma designs
/figma import-design https://figma.com/file/xxx

# Connect to databases
/task "integrate with existing PostgreSQL database"
```

## Troubleshooting

### Issue: Agents Not Starting
```bash
# Check agent status
npm run status

# Restart agents
npm run restart
```

### Issue: Token Limit Exceeded
```bash
# Enable aggressive optimization
echo "TOKEN_OPTIMIZATION_LEVEL=maximum" >> .env
npm run restart
```

### Issue: Build Errors
```bash
# Run validation
npm run validate

# Auto-fix issues
npm run fix
```

## Tips for Success

1. **Start Small**: Begin with core features, add complexity later
2. **Trust the Agents**: Let them work without interruption
3. **Review Output**: Check generated code meets your standards
4. **Use Templates**: Save successful patterns for reuse
5. **Monitor Tokens**: Watch usage to optimize costs

## What's Next?

- **Learn Commands**: See [Commands Reference](Commands)
- **Create Custom Agents**: Read [Creating Custom Agents](Creating-Custom-Agents)
- **Optimize Performance**: Check [Performance Tuning](Performance-Tuning)
- **Deploy Projects**: Follow [Deployment Guide](Deployment)

## Get Help

- **Documentation**: https://agentwise-docs.vercel.app
- **Discord**: @vibecodingwithphil
- **GitHub Issues**: https://github.com/VibeCodingWithPhil/agentwise/issues

---

**🎉 Congratulations!** You've built your first project with Agentwise. The future of development is here!