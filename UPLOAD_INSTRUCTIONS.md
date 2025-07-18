# 📤 Easy Upload Instructions

## Step 1: Download All Files
Right-click each file below and "Save As" to download:

### Root Files (save to main folder):
- package.json
- index.html  
- vite.config.ts
- netlify.toml
- tailwind.config.js
- postcss.config.js
- tsconfig.json
- .gitignore

### Create src/ folder and save these inside:
- src/main.tsx
- src/App.tsx
- src/index.css

### Create src/pages/ folder:
- src/pages/Home.tsx

### Create src/components/ folder:
- src/components/Navbar.tsx
- src/components/Footer.tsx
- src/components/SEO.tsx
- src/components/ScrollToTop.tsx
- src/components/Analytics.tsx
- src/components/LeadCapture.tsx

### Create src/hooks/ folder:
- src/hooks/useLeadCapture.ts

### Create public/ folder:
- public/_redirects

## Step 2: Upload to GitHub
1. Go to your repo: https://github.com/sadeeqgandalf/panemorfi-holdings-website
2. Click "uploading an existing file"
3. Drag ALL downloaded files at once
4. GitHub will automatically create the folder structure
5. Commit with message: "Complete website upload"

## Step 3: Connect to Netlify
1. Netlify Dashboard → Your site → Site settings
2. Build & deploy → Link site to Git
3. Choose your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

🎉 Done! Your site will be live in 2-3 minutes.