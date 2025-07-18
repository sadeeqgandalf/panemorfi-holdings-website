# Netlify Setup Instructions

## 🎯 Quick Setup Guide

### Step 1: GitHub Repository
Your repository: `git@github.com:sadeeqgandalf/panemorfi-holdings-website.git`

### Step 2: Run Setup Script
```bash
chmod +x setup-github.sh
./setup-github.sh
```

### Step 3: Connect to Netlify

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Find your existing site** that uses `panemorfiholdings.com`
3. **Go to**: Site settings → Build & deploy → Continuous deployment
4. **Click**: "Link site to Git"
5. **Choose**: GitHub
6. **Select**: `sadeeqgandalf/panemorfi-holdings-website`

### Step 4: Build Settings

Set these in Netlify:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 (Environment variables → NODE_VERSION = 18)

### Step 5: Deploy

Click "Deploy site" and wait 2-3 minutes.

## ✅ What This Fixes

- ✅ Blank page issue (proper redirects)
- ✅ React Router navigation  
- ✅ Professional portfolio system
- ✅ Contact forms and lead capture
- ✅ Email guide delivery system
- ✅ Analytics integration
- ✅ Mobile responsiveness
- ✅ SEO optimization

## 🔄 Future Updates

Once connected to GitHub:
1. Make changes to your code
2. Push to GitHub: `git add . && git commit -m "Update" && git push`
3. Netlify automatically rebuilds your site

## 🆘 Need Help?

If you encounter any issues:
1. Check the Netlify build logs
2. Verify your GitHub repository has the latest code
3. Ensure build settings match exactly as specified above

## 📞 Support

Email: info@panemorfiholdings.com