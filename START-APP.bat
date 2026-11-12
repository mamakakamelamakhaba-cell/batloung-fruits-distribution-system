@echo off
title Batloung Fruits - Distribution Management System
color 2F
echo.
echo  ============================================================
echo   BATLOUNG FRUITS  |  Distribution Management System
echo   Maseru, Lesotho  |  DIWA2110 Web Application Development
echo  ============================================================
echo.
echo  Starting Backend API server (port 5000)...
start "Batloung API (port 5000)" cmd /k "cd /d "%~dp0backend" && node server.js"
timeout /t 3 /nobreak >nul

echo  Starting Frontend dev server (port 5173)...
start "Batloung Frontend (port 5173)" cmd /k "cd /d "%~dp0frontend" && npm run dev"
timeout /t 6 /nobreak >nul

echo.
echo  Opening browser...
start http://localhost:5173

echo.
echo  ============================================================
echo   App running at:  http://localhost:5173
echo   API health:      http://localhost:5000/api/health
echo.
echo   LOGIN CREDENTIALS:
echo     Administrator:  admin@batloung.co.ls  /  admin123
echo     Sales Rep:      sales@batloung.co.ls  /  sales123
echo.
echo   TIP: Close both console windows to stop the app.
echo   TIP: If DB not set up yet, run SETUP-DATABASE.bat first!
echo  ============================================================
echo.
pause
