#!/bin/bash

echo "🚀 Deploying Agentwise Docs to Vercel"
echo "======================================"
echo ""
echo "Step 1: Install Vercel CLI (if not installed)"
echo "----------------------------------------------"
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm i -g vercel
else
    echo "✅ Vercel CLI already installed"
fi

echo ""
echo "Step 2: Deploy to Vercel"
echo "------------------------"
echo "Running: vercel --prod"
echo ""
echo "When prompted:"
echo "1. Set up and deploy? Yes"
echo "2. Which scope? (select your account)"
echo "3. Link to existing project? No"
echo "4. Project name? agentwise-docs"
echo "5. Directory? ./"
echo "6. Override settings? No"
echo ""
echo "Starting deployment..."
echo ""

vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Step 3: Add Custom Domain (Optional)"
echo "------------------------------------"
echo "1. Visit your Vercel dashboard"
echo "2. Go to project settings → Domains"
echo "3. Add: docs.agentwise.vercel.app"
echo ""
echo "Your docs are now live! 🎉"