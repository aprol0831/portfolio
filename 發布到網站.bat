@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo   同步作品集網站到 GitHub
echo   https://aprol0831.github.io/portfolio/
echo ============================================
git add -A
git diff --cached --quiet && (echo 沒有新的修改。 & pause & exit /b)
git commit -m "更新網站內容 %date% %time%"
git pull --rebase --quiet
git push
if errorlevel 1 (echo. & echo [失敗] 請確認網路或 GitHub 登入狀態。) else (echo. & echo [完成] 約 1 分鐘後網站會更新。)
pause
