@echo off
echo 🚀 Setting up Panemorfi Holdings website with GitHub (FIXED VERSION)...

REM Check if we're in the right directory
echo 📁 Current directory:
cd

REM Initialize git repository
echo 📁 Initializing git repository...
git init

REM Check git status
echo 📋 Checking git status...
git status

REM Add all files
echo 📦 Adding all files...
git add .

REM Check what was added
echo 📋 Files staged for commit:
git status

REM Create initial commit
echo 💾 Creating initial commit...
git commit -m "Initial commit - Panemorfi Holdings website with Netlify fixes"

REM Check if commit was successful
echo 📋 Checking commit status...
git log --oneline -1

REM Create and switch to main branch
echo 🌟 Creating main branch...
git branch -M main

REM Add your GitHub repository as origin
echo 🔗 Adding GitHub repository...
git remote add origin https://github.com/sadeeqgandalf/panemorfi-holdings-website.git

REM Check remote
echo 📋 Checking remote...
git remote -v

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo ✅ Done! Your code should now be on GitHub.
echo 🎯 Next steps:
echo    1. Go to your Netlify dashboard
echo    2. Find your panemorfiholdings.com site
echo    3. Go to Site settings → Build ^& deploy
echo    4. Click 'Link site to Git' and select your GitHub repo
echo    5. Set build command: npm run build
echo    6. Set publish directory: dist
echo    7. Deploy!

pause