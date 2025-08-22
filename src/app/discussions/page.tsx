import { MessageSquare, Users, Lightbulb, Bug, HelpCircle, Sparkles, BookOpen, Code2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const discussionCategories = [
  {
    name: "💡 Ideas & Feature Requests",
    description: "Share your ideas for new features and improvements",
    icon: Lightbulb,
    topics: ["New agent types", "Integration ideas", "Workflow improvements", "UI/UX suggestions"],
    color: "yellow",
    exampleTopics: [
      "Support for Vue.js projects",
      "Integration with Jira",
      "Voice command support",
      "Mobile app development"
    ]
  },
  {
    name: "🐛 Bug Reports",
    description: "Report issues and help us improve Agentwise",
    icon: Bug,
    topics: ["Error reports", "Unexpected behavior", "Performance issues", "Compatibility problems"],
    color: "red",
    exampleTopics: [
      "Agent coordination failures",
      "Token optimization not working",
      "Build errors in specific environments",
      "MCP connection issues"
    ]
  },
  {
    name: "❓ Q&A",
    description: "Get help from the community and maintainers",
    icon: HelpCircle,
    topics: ["How-to questions", "Best practices", "Troubleshooting", "Configuration help"],
    color: "blue",
    exampleTopics: [
      "How to create custom agents?",
      "Best practices for large projects",
      "Debugging agent workflows",
      "Optimizing token usage"
    ]
  },
  {
    name: "🎉 Show and Tell",
    description: "Share your projects built with Agentwise",
    icon: Sparkles,
    topics: ["Project showcases", "Success stories", "Tips and tricks", "Custom agents"],
    color: "purple",
    exampleTopics: [
      "Built a SaaS in 2 hours",
      "Custom agent for code reviews",
      "E-commerce platform showcase",
      "Performance optimization tips"
    ]
  },
  {
    name: "📚 Documentation",
    description: "Suggest improvements to documentation",
    icon: BookOpen,
    topics: ["Doc improvements", "Tutorial requests", "Example code", "Video guides"],
    color: "green",
    exampleTopics: [
      "Add more examples",
      "Video tutorial requests",
      "API documentation gaps",
      "Beginner guide improvements"
    ]
  },
  {
    name: "🔧 Development",
    description: "Technical discussions about Agentwise development",
    icon: Code2,
    topics: ["Architecture", "Contributing", "Testing", "Performance"],
    color: "indigo",
    exampleTopics: [
      "Improving parallel execution",
      "New MCP integrations",
      "Testing strategies",
      "Performance benchmarks"
    ]
  }
]

const communityGuidelines = [
  {
    title: "Be Respectful",
    description: "Treat everyone with respect. No harassment, discrimination, or personal attacks.",
    icon: Users
  },
  {
    title: "Stay On Topic",
    description: "Keep discussions relevant to Agentwise and software development.",
    icon: MessageSquare
  },
  {
    title: "Search First",
    description: "Check if your question has been asked before posting a duplicate.",
    icon: HelpCircle
  },
  {
    title: "Provide Context",
    description: "Include relevant details, error messages, and environment information.",
    icon: BookOpen
  }
]

const popularDiscussions = [
  {
    title: "Welcome to Agentwise Discussions!",
    category: "Announcements",
    author: "VibeCodingWithPhil",
    replies: 42,
    views: 1250,
    pinned: true
  },
  {
    title: "Agentwise Roadmap 2025",
    category: "Announcements",
    author: "VibeCodingWithPhil",
    replies: 28,
    views: 890,
    pinned: true
  },
  {
    title: "How I built a full-stack app in 10 minutes",
    category: "Show and Tell",
    author: "community-member",
    replies: 15,
    views: 567,
    pinned: false
  },
  {
    title: "Custom agent for AWS deployment",
    category: "Show and Tell",
    author: "devops-pro",
    replies: 12,
    views: 432,
    pinned: false
  }
]

export default function DiscussionsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <MessageSquare className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Community Discussions</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Join the conversation, share ideas, get help, and showcase your projects.
            </p>
          </div>
        </div>
      </div>

      {/* CTA to GitHub Discussions */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle className="text-accent-700 dark:text-accent-400">
            🚀 Join the Discussion on GitHub
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Our community discussions are hosted on GitHub Discussions for better integration with development workflow.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a 
                href="https://github.com/VibeCodingWithPhil/agentwise/discussions" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open GitHub Discussions →
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="https://github.com/VibeCodingWithPhil/agentwise/discussions/new/choose" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start New Discussion
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Discussion Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">💬 Discussion Categories</h2>
        <p className="text-muted-foreground">
          Find the right place for your question or contribution.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {discussionCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.topics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Example Discussions:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {category.exampleTopics.slice(0, 3).map((topic, idx) => (
                          <li key={idx}>• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Popular Discussions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🔥 Popular Discussions</h2>
        <p className="text-muted-foreground">
          Trending topics and important announcements.
        </p>
        
        <div className="space-y-3">
          {popularDiscussions.map((discussion, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {discussion.pinned && (
                        <Badge variant="default" className="text-xs">
                          📌 Pinned
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {discussion.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{discussion.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      by @{discussion.author} • {discussion.replies} replies • {discussion.views} views
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">📋 Community Guidelines</h2>
        <p className="text-muted-foreground">
          Help us maintain a welcoming and productive community.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {communityGuidelines.map((guideline, index) => {
            const IconComponent = guideline.icon
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{guideline.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{guideline.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-400">
            🎯 Getting Started with Discussions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Before Posting</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Search existing discussions</li>
                <li>• Read the documentation</li>
                <li>• Check closed issues</li>
                <li>• Review community guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">When Posting</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Choose the right category</li>
                <li>• Use a clear, descriptive title</li>
                <li>• Provide relevant context</li>
                <li>• Be patient and respectful</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Other Community Channels */}
      <Card>
        <CardHeader>
          <CardTitle>🌐 Other Community Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm mb-1">Discord Server</h4>
              <p className="text-sm text-muted-foreground">
                Join our Discord for real-time chat: @vibecodingwithphil
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">GitHub Issues</h4>
              <p className="text-sm text-muted-foreground">
                For bug reports and feature requests: 
                <a 
                  href="https://github.com/VibeCodingWithPhil/agentwise/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline ml-1"
                >
                  GitHub Issues
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">Twitter/X</h4>
              <p className="text-sm text-muted-foreground">
                Follow for updates: @VibeCodingWithPhil
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}