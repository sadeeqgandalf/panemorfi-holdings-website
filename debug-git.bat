@echo off
echo 🔍 Git Debug Information

echo.
echo 📁 Current Directory:
cd

echo.
echo 📋 Files in current directory:
dir

echo.
echo 📋 Git Status:
git status

echo.
echo 📋 Git Config:
git config --list

echo.
echo 📋 Git Remotes:
git remote -v

echo.
echo 📋 Git Branches:
git branch -a

echo.
echo 📋 Git Log:
git log --oneline -5

pause