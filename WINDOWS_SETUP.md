# Windows Setup Instructions

## 🪟 Quick Setup for Windows

### Step 1: Download and Extract
1. **Download this project** as ZIP from Bolt
2. **Extract** to a folder (e.g., `C:\panemorfi-website`)
3. **Open Command Prompt or PowerShell** in that folder

### Step 2: Run Setup Script
```batch
setup-github.bat
```

### Step 3: Alternative Manual Commands
If the script doesn't work, run these one by one:

```bash
git init
git add .
git commit -m "Initial commit - Panemorfi Holdings website"
git branch -M main
git remote add origin git@github.com:sadeeqgandalf/panemorfi-holdings-website.git
git push -u origin main
```

### Step 4: Connect to Netlify

1. **Go to**: https://app.netlify.com
2. **Find your existing site** (panemorfiholdings.com)
3. **Site settings** → Build & deploy → Continuous deployment
4. **Click**: "Link site to Git"
5. **Choose**: GitHub
6. **Select**: `sadeeqgandalf/panemorfi-holdings-website`

### Step 5: Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### Step 6: Deploy
Click "Deploy site" and wait 2-3 minutes!

## 🆘 Troubleshooting

### If Git Commands Don't Work:
1. **Install Git**: https://git-scm.com/download/windows
2. **Restart** Command Prompt/PowerShell
3. **Try again**

### If SSH Key Issues:
Use HTTPS instead:
```bash
git remote add origin https://github.com/sadeeqgandalf/panemorfi-holdings-website.git
```

## ✅ Success!
Your site will be live at panemorfiholdings.com with all fixes applied!