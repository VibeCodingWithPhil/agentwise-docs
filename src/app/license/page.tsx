import { Scale, Shield, FileText, CheckCircle, AlertTriangle, Info } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const licenseTerms = [
  {
    section: "Permissions",
    icon: CheckCircle,
    color: "green",
    items: [
      "Commercial use",
      "Modification",
      "Distribution",
      "Private use"
    ]
  },
  {
    section: "Conditions",
    icon: Info,
    color: "blue",
    items: [
      "License and copyright notice",
      "State changes",
      "Disclose source",
      "Same license"
    ]
  },
  {
    section: "Limitations",
    icon: AlertTriangle,
    color: "orange",
    items: [
      "Liability",
      "Warranty"
    ]
  }
]

const usageGuidelines = [
  {
    title: "Commercial Projects",
    description: "You can use Agentwise in commercial projects",
    allowed: true,
    details: "Feel free to use Agentwise to build applications for your clients or your own business."
  },
  {
    title: "Modifications",
    description: "You can modify the source code",
    allowed: true,
    details: "Customize Agentwise to fit your specific needs. We encourage improvements and contributions."
  },
  {
    title: "Distribution",
    description: "You can distribute your modified versions",
    allowed: true,
    details: "Share your improvements with the community, but maintain the same license terms."
  },
  {
    title: "Attribution",
    description: "You must provide attribution",
    allowed: true,
    details: "Include the original copyright notice and license in any distribution."
  }
]

export default function LicensePage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Scale className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">License</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Agentwise is open source and available under the MIT License.
            </p>
          </div>
        </div>
      </div>

      {/* License Type */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle className="text-accent-700 dark:text-accent-400 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            MIT License
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Copyright (c) 2024 Agentwise Contributors
            </p>
            <p className="text-sm mt-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="text-sm mt-4">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p className="text-sm mt-4 uppercase">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* License Terms */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">📋 License Terms</h2>
        <p className="text-muted-foreground">
          What you can and cannot do with Agentwise under the MIT License.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {licenseTerms.map((term, index) => {
            const IconComponent = term.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent 
                      className={`h-5 w-5 ${
                        term.color === 'green' ? 'text-green-600' :
                        term.color === 'blue' ? 'text-blue-600' :
                        'text-orange-600'
                      }`} 
                    />
                    {term.section}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {term.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-muted-foreground text-sm">• {item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">✅ Usage Guidelines</h2>
        <p className="text-muted-foreground">
          Clear guidelines on how you can use Agentwise in your projects.
        </p>
        
        <div className="space-y-3">
          {usageGuidelines.map((guideline, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{guideline.title}</h3>
                      <Badge variant={guideline.allowed ? "default" : "destructive"} className="text-xs">
                        {guideline.allowed ? "Allowed" : "Not Allowed"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{guideline.description}</p>
                    <p className="text-xs text-muted-foreground">{guideline.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Third-Party Licenses */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-400 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Third-Party Licenses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Agentwise uses various open-source libraries and tools. Each maintains its own license:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Core Dependencies</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Next.js - MIT License</li>
                <li>• React - MIT License</li>
                <li>• TypeScript - Apache-2.0 License</li>
                <li>• Tailwind CSS - MIT License</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2">Claude & AI Tools</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Claude API - Anthropic Terms</li>
                <li>• MCP Servers - Various Licenses</li>
                <li>• Model Context Protocol - MIT License</li>
                <li>• Local Model Support - Model-specific</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Questions About Licensing?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If you have questions about the license or need clarification on usage rights,
            please open an issue on our GitHub repository or contact the maintainers.
          </p>
          <div className="mt-4">
            <a 
              href="https://github.com/yourusername/agentwise/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              Open an Issue on GitHub →
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}