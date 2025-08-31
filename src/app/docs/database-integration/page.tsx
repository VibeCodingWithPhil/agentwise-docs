import Link from "next/link"
import { Database, Shield, Zap, Cloud, Key, CheckCircle2, ArrowRight, Server } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/ui/code-block"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export default function DatabaseIntegrationPage() {
  const integrationFlowDiagram = `
graph LR
    Start([Database Wizard]) --> Provider{Select Provider}
    
    Provider -->|Supabase| S1[Supabase Setup]
    Provider -->|Neon| N1[Neon Setup]
    Provider -->|PlanetScale| P1[PlanetScale Setup]
    Provider -->|Local| L1[Local PostgreSQL]
    
    S1 --> Config[Configuration]
    N1 --> Config
    P1 --> Config
    L1 --> Config
    
    Config --> Schema[Schema Generation]
    Schema --> Types[Type Generation]
    Types --> Migrate[Migrations]
    Migrate --> Ready([Database Ready])
    
    style Start fill:#6366f1,color:#fff
    style Ready fill:#10b981,color:#fff
    style Provider fill:#f59e0b,color:#fff
  `

  const supabaseArchitectureDiagram = `
graph TB
    subgraph Application
        A1[Next.js App]
        A2[API Routes]
        A3[Client Components]
    end
    
    subgraph Supabase
        S1[Auth Service]
        S2[Database]
        S3[Storage]
        S4[Realtime]
        S5[Edge Functions]
    end
    
    A1 --> S1
    A2 --> S2
    A3 --> S4
    A1 --> S3
    A2 --> S5
    
    S1 --> S2
    S4 --> S2
    
    style Application fill:#8b5cf6,color:#fff
    style Supabase fill:#10b981,color:#fff
  `

  const typeGenerationDiagram = `
graph LR
    DB[(Database)] --> Introspect[Introspection]
    Introspect --> Schema[Schema Analysis]
    Schema --> Generate{Generate Types}
    
    Generate --> TS[TypeScript Types]
    Generate --> Prisma[Prisma Models]
    Generate --> Zod[Zod Schemas]
    
    TS --> Code[Use in Code]
    Prisma --> Code
    Zod --> Code
    
    style DB fill:#6366f1,color:#fff
    style Code fill:#10b981,color:#fff
    style Generate fill:#f59e0b,color:#fff
  `

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Database className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Database Integration</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Zero-configuration database setup with automatic type generation
            </p>
            <div className="flex gap-4 mt-3">
              <Badge variant="secondary">Zero Config</Badge>
              <Badge variant="secondary">Type Safety</Badge>
              <Badge variant="secondary">Multiple Providers</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
        <CardHeader>
          <CardTitle>🚀 Quick Start</CardTitle>
          <CardDescription>
            Set up a production database in seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`# Interactive database wizard
/database-wizard

# Quick setup with provider
/database-setup supabase

# Connect to existing database
/database-connect "postgresql://..."

# Within project creation
/create-project "app with database"`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Integration Flow */}
      <Card>
        <CardHeader>
          <CardTitle>Database Integration Flow</CardTitle>
          <CardDescription>
            Automated setup process for any database provider
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={integrationFlowDiagram} />
          
          <div className="grid gap-4 mt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cloud className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">1. Provider Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Choose from Supabase, Neon, PlanetScale, or local PostgreSQL
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Key className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">2. Automatic Configuration</h4>
                <p className="text-sm text-muted-foreground">
                  Credentials securely stored in .env.local with encryption
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">3. Type Generation</h4>
                <p className="text-sm text-muted-foreground">
                  TypeScript types generated automatically from schema
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supported Providers */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cloud Providers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="outline">Supabase</Badge>
                  <span className="text-xs text-muted-foreground">Recommended</span>
                </h4>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• Built-in authentication</li>
                  <li>• Real-time subscriptions</li>
                  <li>• File storage</li>
                  <li>• Edge functions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">
                  <Badge variant="outline">Neon</Badge>
                </h4>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• Serverless PostgreSQL</li>
                  <li>• Branching for dev/staging</li>
                  <li>• Auto-scaling</li>
                  <li>• Pay-per-use pricing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">
                  <Badge variant="outline">PlanetScale</Badge>
                </h4>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• MySQL compatible</li>
                  <li>• Non-blocking migrations</li>
                  <li>• Horizontal scaling</li>
                  <li>• Global replication</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Local Development</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">
                  <Badge variant="outline">PostgreSQL</Badge>
                </h4>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• Full local control</li>
                  <li>• No internet required</li>
                  <li>• Docker support</li>
                  <li>• Complete privacy</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">
                  <Badge variant="outline">SQLite</Badge>
                </h4>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• Zero configuration</li>
                  <li>• File-based storage</li>
                  <li>• Embedded database</li>
                  <li>• Perfect for prototypes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">
                  <Badge variant="outline">Docker Compose</Badge>
                </h4>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• Multi-container setup</li>
                  <li>• Redis, PostgreSQL, etc.</li>
                  <li>• One command start</li>
                  <li>• Production-like environment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supabase Architecture */}
      <Card>
        <CardHeader>
          <CardTitle>Supabase Integration Architecture</CardTitle>
          <CardDescription>
            Complete backend-as-a-service integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={supabaseArchitectureDiagram} />
          
          <Alert className="mt-6">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Supabase provides Row Level Security (RLS) for fine-grained access control,
              ensuring data privacy and security at the database level.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Type Generation */}
      <Card>
        <CardHeader>
          <CardTitle>Automatic Type Generation</CardTitle>
          <CardDescription>
            Type-safe database access with zero manual work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MermaidDiagram chart={typeGenerationDiagram} />
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Generated Type Example</h4>
            <CodeBlock language="typescript" copy>
{`// Automatically generated from database schema
export interface User {
  id: string
  email: string
  name: string | null
  created_at: Date
  updated_at: Date
}

export interface Task {
  id: string
  user_id: string
  title: string
  description: string | null
  completed: boolean
  due_date: Date | null
  created_at: Date
}

// Zod schemas for validation
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date()
})

// Prisma models for ORM
model User {
  id         String   @id @default(uuid())
  email      String   @unique
  name       String?
  tasks      Task[]
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Integration Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Zero-configuration setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automatic schema detection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Type generation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Migration management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Seed data support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Connection pooling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Encrypted credentials</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Multi-environment support</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Encrypted .env storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Row Level Security (RLS)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>SSL/TLS connections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Connection string validation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Automatic backups</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Access logging</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>SQL injection prevention</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Query parameterization</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Example Setup */}
      <Card>
        <CardHeader>
          <CardTitle>Example Database Setup Session</CardTitle>
          <CardDescription>
            Complete database integration in under a minute
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" copy>
{`$ /database-wizard

🗄️ Database Setup Wizard
━━━━━━━━━━━━━━━━━━━━━━━━

? Select database provider: (Use arrow keys)
❯ Supabase (Recommended - includes auth, storage, realtime)
  Neon (Serverless PostgreSQL)
  PlanetScale (MySQL compatible)
  Local PostgreSQL
  Skip database setup

✅ Supabase selected

? Enter your Supabase project URL: https://xyzabc.supabase.co
? Enter your Supabase anon key: eyJhbGc...
? Enter your Supabase service key (optional): eyJhbGc...

📝 Configuring Supabase...
✅ Connection established
✅ Credentials saved to .env.local (encrypted)
✅ Database client initialized

🔍 Analyzing database schema...
✅ Found 5 tables
✅ Found 2 views
✅ Found 3 functions

📝 Generating TypeScript types...
✅ Generated types/database.ts
✅ Generated lib/supabase.ts
✅ Generated middleware/auth.ts

🔄 Setting up migrations...
✅ Created migrations folder
✅ Initial migration created
✅ Migration applied

🌱 Creating seed data...
✅ Seed file created at seeds/initial.ts
✅ Sample data ready

✨ Database integration complete!

📁 Files created:
  • .env.local (credentials)
  • types/database.ts (TypeScript types)
  • lib/supabase.ts (client)
  • middleware/auth.ts (authentication)
  • migrations/001_initial.sql
  • seeds/initial.ts

🚀 Ready to use in your code:
  import { supabase } from '@/lib/supabase'
  import { User, Task } from '@/types/database'`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/docs/project-wizard" className="block">
            <Button variant="outline" className="w-full justify-between">
              Complete Project Setup
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/github-integration" className="block">
            <Button variant="outline" className="w-full justify-between">
              GitHub Integration
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/protection-system" className="block">
            <Button variant="outline" className="w-full justify-between">
              Protection System
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}