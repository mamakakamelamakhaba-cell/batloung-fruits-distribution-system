@echo off
title Batloung Fruits - Database Setup
color 2F
echo.
echo  ============================================================
echo   BATLOUNG FRUITS - Database Setup Wizard
echo   Maseru, Lesotho  |  MySQL 8.0
echo  ============================================================
echo.
echo  This will:
echo    1. Create the batloung_fruits database
echo    2. Create all tables (schema.sql)
echo    3. Insert all fruit / supplier / vendor / order data (seed.sql)
echo    4. Insert extra Dec 2026 data (seed_extra.sql)
echo    5. Set up login password hashes (npm run seed)
echo.
echo  MySQL password: 111111  (root)
echo.
set /p CONFIRM=  Proceed? (Y/N): 
if /i not "%CONFIRM%"=="Y" (
  echo  Cancelled.
  pause
  exit /b 0
)

set MYSQL="C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"
set ARGS=-u root -p111111 --protocol=TCP

echo.
echo  [1/4] Running schema.sql...
%MYSQL% %ARGS% < "%~dp0database\schema.sql"
if %ERRORLEVEL% neq 0 (
  echo  ERROR: schema.sql failed. Check MySQL is running and password is correct.
  pause
  exit /b 1
)
echo       OK

echo  [2/4] Running seed.sql...
%MYSQL% %ARGS% < "%~dp0database\seed.sql"
if %ERRORLEVEL% neq 0 (
  echo  ERROR: seed.sql failed.
  pause
  exit /b 1
)
echo       OK

echo  [3/4] Running seed_extra.sql (Dec 2026 data)...
%MYSQL% %ARGS% < "%~dp0database\seed_extra.sql"
if %ERRORLEVEL% neq 0 (
  echo  ERROR: seed_extra.sql failed.
  pause
  exit /b 1
)
echo       OK

echo  [4/4] Setting up user password hashes...
cd /d "%~dp0backend"
node seed.js
if %ERRORLEVEL% neq 0 (
  echo  ERROR: seed.js failed. Make sure you ran npm install in backend first.
  pause
  exit /b 1
)
echo       OK

echo.
echo  ============================================================
echo   DATABASE SETUP COMPLETE!
echo.
echo   Login credentials:
echo     admin@batloung.co.ls  /  admin123  (Administrator)
echo     sales@batloung.co.ls  /  sales123  (Sales Rep)
echo.
echo   Now run START-APP.bat to launch the application!
echo  ============================================================
echo.
pause
