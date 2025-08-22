import { Scale, Shield, FileText, CheckCircle, XCircle, AlertTriangle, DollarSign, Lock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const permittedUses = [
  {
    title: "Development Tool Usage",
    description: "Use Agentwise to create end-user applications",
    icon: CheckCircle,
    details: "Build commercial applications using Agentwise's output (not embedding Agentwise itself)",
    feeRequired: false
  },
  {
    title: "Internal Development",
    description: "Use within your organization for development",
    icon: CheckCircle,
    details: "Internal use for creating applications and development purposes",
    feeRequired: false
  },
  {
    title: "Personal/Educational Use",
    description: "Personal, educational, or research use",
    icon: CheckCircle,
    details: "Non-commercial personal projects and academic research",
    feeRequired: false
  }
]

const prohibitedUses = [
  {
    title: "Competing Products",
    description: "Creating multi-agent orchestration systems",
    icon: XCircle,
    details: "Cannot use source code to build competing products or similar AI coordination systems",
    penalty: "$100,000 per violation"
  },
  {
    title: "Source Code Analysis",
    description: "Studying code to create similar systems",
    icon: XCircle,
    details: "Cannot view, analyze, or reference source code for competitive products",
    penalty: "Immediate termination + legal action"
  },
  {
    title: "Redistribution",
    description: "Distributing or reselling the Software",
    icon: XCircle,
    details: "Cannot redistribute, sublicense, sell, or transfer Agentwise",
    penalty: "$100,000 per violation"
  },
  {
    title: "Service Offering",
    description: "Offering Agentwise as a service",
    icon: XCircle,
    details: "Cannot provide SaaS, PaaS, or managed service without commercial license",
    penalty: "Commercial license required"
  }
]

const commercialLicenses = [
  {
    type: "One-Time Perpetual",
    price: "$25,000 USD",
    description: "Permanent license for your organization",
    features: ["Unlimited internal use", "Embed in products", "Redistribution rights", "Priority support"]
  },
  {
    type: "Annual License",
    price: "$10,000 USD/year",
    description: "Yearly subscription for commercial use",
    features: ["Annual renewal", "All commercial rights", "Regular updates", "Standard support"]
  },
  {
    type: "Enterprise License",
    price: "Contact for pricing",
    description: "Custom terms for large organizations",
    features: ["Custom terms", "Multiple entities", "White-label options", "Dedicated support"]
  }
]

export default function LicensePage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <Lock className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Agentwise Proprietary License</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Version 1.0 - Proprietary software with controlled usage rights
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            IMPORTANT NOTICE
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="font-semibold">
              Copyright (c) 2024-2025 Philip Ritmeester (@VibeCodingWithPhil)
            </p>
            <p className="text-sm text-muted-foreground">
              This software is proprietary and confidential property of Philip Ritmeester. 
              The Software is protected by copyright law and international treaties. 
              Unauthorized use, reproduction, or distribution may result in severe civil 
              and criminal penalties.
            </p>
            <Badge variant="destructive" className="text-sm">
              All Rights Reserved
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Permitted Uses */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">✅ Permitted Uses (No Fee Required)</h2>
        <p className="text-muted-foreground">
          These uses are allowed without purchasing a commercial license.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {permittedUses.map((use, index) => {
            const IconComponent = use.icon
            return (
              <Card key={index} className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-green-600" />
                    {use.title}
                  </CardTitle>
                  <CardDescription>{use.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{use.details}</p>
                  {!use.feeRequired && (
                    <Badge variant="secondary" className="mt-3 text-xs">
                      Free for this use
                    </Badge>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Prohibited Uses */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🚫 Strictly Prohibited</h2>
        <p className="text-muted-foreground">
          These uses are strictly forbidden without a commercial license.
        </p>
        
        <div className="space-y-4">
          {prohibitedUses.map((use, index) => {
            const IconComponent = use.icon
            return (
              <Card key={index} className="border-red-200 dark:border-red-800">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="h-5 w-5 text-red-600" />
                        <h3 className="font-semibold text-foreground">{use.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{use.description}</p>
                      <p className="text-xs text-muted-foreground">{use.details}</p>
                    </div>
                    <Badge variant="destructive" className="ml-4 text-xs">
                      {use.penalty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Commercial Licenses */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">💳 Commercial License Options</h2>
        <p className="text-muted-foreground">
          Required for embedding, competing products, or service offerings.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {commercialLicenses.map((license, index) => (
            <Card key={index} className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  {license.type}
                </CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold text-accent">{license.price}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{license.description}</p>
                <ul className="space-y-1">
                  {license.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">To Obtain Commercial License:</h4>
            <div className="space-y-2 text-sm">
              <p>Contact Philip Ritmeester:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Discord: @vibecodingwithphil</li>
                <li>• GitHub: @VibeCodingWithPhil</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enforcement */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Enforcement and Penalties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Automatic Termination</h4>
              <p className="text-sm text-muted-foreground">
                License automatically terminates upon any breach of terms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Damages</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Actual damages suffered</li>
                <li>• Statutory damages of $100,000 per violation</li>
                <li>• All legal fees and costs of enforcement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technical Protection</h4>
              <p className="text-sm text-muted-foreground">
                Software includes measures to track usage, detect violations, and disable functionality upon breach.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">❓ Frequently Asked Questions</h2>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Can I use Agentwise to build commercial applications?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can use Agentwise as a tool to build applications for commercial sale, 
                  as long as you don't embed Agentwise itself in the product.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Can I learn from the code to build my own system?</h4>
                <p className="text-sm text-muted-foreground">
                  No. You cannot study our source code to build competing products. 
                  Build your own system from scratch using AI prompting instead.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">What happens if I violate the license?</h4>
                <p className="text-sm text-muted-foreground">
                  The license terminates immediately, and you may face legal action including 
                  damages of $100,000 per violation plus legal costs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Is this license open source?</h4>
                <p className="text-sm text-muted-foreground">
                  No. This is a proprietary license. The source is visible but strictly controlled.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Violations */}
      <Card>
        <CardHeader>
          <CardTitle>Report License Violations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            To report license violations or unauthorized use:
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              • Email: <a href="mailto:legal@agentwise.dev" className="text-accent hover:underline">legal@agentwise.dev</a>
            </p>
            <p className="text-sm">
              • GitHub: File a confidential security advisory
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Last Updated */}
      <div className="text-center text-sm text-muted-foreground border-t pt-8">
        <p className="font-semibold">Last Updated: January 2025</p>
        <p>License Version: 1.0</p>
        <p className="mt-2">Copyright (c) 2024-2025 Philip Ritmeester. All Rights Reserved.</p>
      </div>
    </div>
  )
}