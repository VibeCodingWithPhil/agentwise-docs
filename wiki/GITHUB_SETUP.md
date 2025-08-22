# GitHub Repository Setup Instructions

This guide will help you enable and configure GitHub Discussions and Wiki for the Agentwise repository.

## 📣 Enabling GitHub Discussions

### Step 1: Navigate to Repository Settings
1. Go to https://github.com/VibeCodingWithPhil/agentwise
2. Click on "Settings" tab
3. Scroll down to "Features" section

### Step 2: Enable Discussions
1. Check the box next to "Discussions"
2. Click "Set up discussions"
3. GitHub will create a welcome discussion

### Step 3: Configure Discussion Categories

Create these categories for better organization:

1. **📢 Announcements**
   - Description: "Official announcements and updates"
   - Format: Announcement
   - Enable "Announcements" format

2. **💡 Ideas**
   - Description: "Share ideas for new features and improvements"
   - Format: General

3. **❓ Q&A**
   - Description: "Ask the community for help"
   - Format: Question/Answer
   - Enable "Mark as answered" feature

4. **🎉 Show and Tell**
   - Description: "Show off something you've built with Agentwise"
   - Format: General

5. **🐛 Bug Reports**
   - Description: "Report issues and bugs"
   - Format: General

6. **📚 Documentation**
   - Description: "Suggest documentation improvements"
   - Format: General

### Step 4: Create Welcome Discussion

Create a pinned welcome post:

```markdown
# Welcome to Agentwise Discussions! 🚀

Welcome to the official discussion forum for Agentwise!

## What is this space for?

This is a place for:
- 💡 Sharing ideas and feature requests
- ❓ Getting help from the community
- 🎉 Showcasing projects built with Agentwise
- 🐛 Discussing bugs and issues
- 📚 Suggesting documentation improvements

## Community Guidelines

1. **Be respectful** - Treat everyone with respect
2. **Stay on topic** - Keep discussions relevant
3. **Search first** - Check if your question has been asked
4. **Provide context** - Include relevant details

## Quick Links

- [Documentation](https://agentwise-docs.vercel.app)
- [GitHub Issues](https://github.com/VibeCodingWithPhil/agentwise/issues)
- [Wiki](https://github.com/VibeCodingWithPhil/agentwise/wiki)

Happy coding! 🎉
```

## 📚 Enabling GitHub Wiki

### Step 1: Enable Wiki Feature
1. Go to repository Settings
2. Under "Features" section
3. Check the box next to "Wikis"

### Step 2: Initialize Wiki
1. Click on "Wiki" tab in repository
2. Click "Create the first page"
3. Use "Home" as the page name

### Step 3: Add Wiki Pages

Copy the content from the `wiki/` directory to GitHub Wiki:

#### Required Pages:
1. **Home** - Main landing page (use wiki/Home.md)
2. **Installation** - Setup instructions (use wiki/Installation.md)
3. **Quick-Start** - Getting started guide (use wiki/Quick-Start.md)
4. **_Sidebar** - Navigation sidebar

### Step 4: Create Wiki Sidebar

Create `_Sidebar.md` for navigation:

```markdown
# Navigation

## Getting Started
- [Home](Home)
- [Installation](Installation)
- [Quick Start](Quick-Start)
- [Configuration](Configuration)

## Documentation
- [Commands](Commands)
- [Agent System](Agent-System)
- [API Reference](API-Reference)
- [Architecture](Architecture)

## Development
- [Creating Custom Agents](Creating-Custom-Agents)
- [Contributing](Contributing)
- [Testing](Testing)

## Advanced
- [Performance Tuning](Performance-Tuning)
- [Troubleshooting](Troubleshooting)
- [Security](Security)

## Resources
- [Case Studies](Case-Studies)
- [Video Tutorials](Video-Tutorials)
- [FAQ](FAQ)

## Legal
- [License](License)
- [Privacy Policy](Privacy)
```

### Step 5: Set Wiki Permissions

1. Go to Settings → Manage access
2. Configure wiki editing permissions:
   - **Restrict editing to collaborators** (recommended)
   - Or allow community edits with moderation

## 🔄 Syncing Wiki Content

### Automated Sync (Optional)

Create `.github/workflows/wiki-sync.yml`:

```yaml
name: Sync Wiki

on:
  push:
    paths:
      - 'docs-site/wiki/**'
    branches:
      - main

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Sync Wiki
        uses: SwiftDocOrg/github-wiki-publish-action@v1
        with:
          path: docs-site/wiki
        env:
          GH_PERSONAL_ACCESS_TOKEN: ${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}
```

### Manual Sync

```bash
# Clone wiki repository
git clone https://github.com/VibeCodingWithPhil/agentwise.wiki.git

# Copy wiki files
cp docs-site/wiki/*.md agentwise.wiki/

# Commit and push
cd agentwise.wiki
git add .
git commit -m "Update wiki content"
git push
```

## 📋 Discussion Templates

### Create Issue/Discussion Templates

Create `.github/DISCUSSION_TEMPLATE/`:

#### ideas.yml
```yaml
title: "[IDEA] "
labels: ["enhancement", "discussion"]
body:
  - type: textarea
    id: description
    attributes:
      label: Idea Description
      description: Describe your idea
    validations:
      required: true
  - type: textarea
    id: use-case
    attributes:
      label: Use Case
      description: How would this be used?
  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considered
      description: What alternatives have you considered?
```

## 🎯 Best Practices

### For Discussions:
1. Pin important announcements
2. Mark helpful answers in Q&A
3. Use labels for categorization
4. Regularly moderate and respond
5. Create discussion templates

### For Wiki:
1. Keep Home page updated
2. Use consistent formatting
3. Include code examples
4. Add images and diagrams
5. Regular content reviews

## 🔗 Integration with Documentation Site

Add links to documentation site:

```typescript
// In navigation component
const communityLinks = [
  {
    title: "GitHub Discussions",
    href: "https://github.com/VibeCodingWithPhil/agentwise/discussions",
    icon: MessageSquare
  },
  {
    title: "Wiki",
    href: "https://github.com/VibeCodingWithPhil/agentwise/wiki",
    icon: BookOpen
  }
]
```

## ✅ Verification Checklist

- [ ] Discussions enabled
- [ ] Categories created
- [ ] Welcome post pinned
- [ ] Wiki enabled
- [ ] Home page created
- [ ] Sidebar added
- [ ] Core pages uploaded
- [ ] Permissions configured
- [ ] Templates created
- [ ] Links added to docs

## 📞 Support

Need help with setup?
- Discord: @vibecodingwithphil
- GitHub: @VibeCodingWithPhil

---

*Last updated: January 2025*