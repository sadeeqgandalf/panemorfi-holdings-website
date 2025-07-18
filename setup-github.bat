@echo off
echo 🚀 Setting up Panemorfi Holdings website with GitHub...

REM Initialize git repository
echo 📁 Initializing git repository...
git init

REM Add all files
echo 📦 Adding all files...
git add .

REM Create initial commit
echo 💾 Creating initial commit...
git commit -m "Initial commit - Panemorfi Holdings website with Netlify fixes - Fixed blank page issue with proper redirects - Added React Router configuration - Optimized build settings for Netlify - Added comprehensive portfolio and contact system - Implemented lead capture and analytics - Added professional email templates and guides"

REM Set main branch
echo 🌟 Setting main branch...
git branch -M main

REM Add your GitHub repository as origin
echo 🔗 Adding GitHub repository...
git remote add origin git@github.com:sadeeqgandalf/panemorfi-holdings-website.git

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo ✅ Done! Your code is now on GitHub.
echo 🎯 Next steps:
echo    1. Go to your Netlify dashboard
echo    2. Find your panemorfiholdings.com site
echo    3. Go to Site settings → Build ^& deploy
echo    4. Click 'Link site to Git' and select your GitHub repo
echo    5. Set build command: npm run build
echo    6. Set publish directory: dist
echo    7. Deploy!

pause