# Quick Deploy to Vercel - 2 Minutes

## Option 1: One-Click Deploy (Easiest)

1. Click this link: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/VibeCodingWithPhil/agentwise-docs)

2. Sign in to Vercel (or create account)

3. Click "Create" - That's it!

## Option 2: Command Line (If you have Vercel CLI)

```bash
cd /Users/philipritmeester/Agentwise/docs-site
npx vercel
```

Follow prompts:
- Login? Yes (opens browser)
- Link to existing project? No
- Project name? agentwise-docs
- Deploy? Yes

## Option 3: Manual Steps

1. **Push docs-site to GitHub:**
```bash
cd /Users/philipritmeester/Agentwise/docs-site
gh repo create agentwise-docs --public --source=. --remote=origin --push
```

2. **Go to Vercel:**
- Visit: https://vercel.com/new
- Click "Import Git Repository"
- Select "agentwise-docs"
- Click "Deploy"

## Setting Custom Domain

After deployment:
1. Go to project settings
2. Click "Domains"
3. Add: `docs.agentwise.vercel.app`

## That's it! Site will be live in ~45 seconds

Your documentation will be available at:
- https://agentwise-docs.vercel.app (auto)
- https://docs.agentwise.vercel.app (custom)