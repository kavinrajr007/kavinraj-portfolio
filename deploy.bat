@echo off
cd /d "%%~dp0"
git add .
git commit -m "deploy: update %11/Nov/2025% % 6:49:43.26%" || echo "No changes to commit"
git push origin main
npm run deploy
