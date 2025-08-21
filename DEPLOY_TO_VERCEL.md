# Deploy Agentwise Docs to Vercel

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)

## Step 1: Push to GitHub

```bash
# Create new GitHub repository
gh repo create agentwise-docs --public --source=. --remote=origin --push
```

Or manually:
1. Go to https://github.com/new
2. Name: `agentwise-docs`
3. Make it public
4. Don't initialize with README
5. Push existing repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/agentwise-docs.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel

# Follow prompts:
# - Log in to Vercel
# - Link to existing project? No
# - What's your project's name? agentwise-docs
# - In which directory is your code located? ./
# - Want to override the settings? No
```

### Option B: Via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import Git Repository
3. Select your `agentwise-docs` repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

## Step 3: Configure Custom Domain

1. After deployment, go to project settings
2. Go to "Domains" tab
3. Add custom domain: `docs.agentwise.vercel.app`
4. This subdomain should be available

## Step 4: Environment Variables (Optional)

If you need any env variables:
1. Go to Settings → Environment Variables
2. Add any required variables
3. Redeploy

## Deployment Complete! 🎉

Your documentation will be live at:
- https://agentwise-docs.vercel.app (auto-generated)
- https://docs.agentwise.vercel.app (custom domain)

## Automatic Deployments

Every push to `main` branch will trigger automatic deployment.

## Troubleshooting

### Build Errors
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### 404 Errors
- All pages have been created and tested
- Dynamic routes use `force-dynamic` export
- API routes are properly configured

### Domain Issues
- If `docs.agentwise.vercel.app` is taken, try:
  - `agentwise-docs.vercel.app`
  - `agentwise-documentation.vercel.app`
  - Or use a custom domain

## Local Testing

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## Support

For issues, check:
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Create issue at: https://github.com/YOUR_USERNAME/agentwise-docs/issues