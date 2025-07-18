# 🚀 Terminal Commands for Deployment

## Step 1: Navigate to your downloaded project folder
```bash
cd path/to/your/downloaded/project
```

## Step 2: Initialize git and connect to your repository
```bash
# Initialize git
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/sadeeqgandalf/panemorfi-holdings-website.git

# Check if files were added
git status

# If no files, add them
git add .

# Commit the files
git commit -m "Initial commit - Complete Panemorfi Holdings website"

# Check if commit worked
git log --oneline

# Push to GitHub
git push -u origin main
```

## Step 3: Connect to Netlify
1. Go to Netlify Dashboard
2. Connect to your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## 🎉 Your website will be live at panemorfiholdings.com in 2-3 minutes!