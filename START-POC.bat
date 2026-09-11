@echo off
REM ===========================================================================
REM  Dhub POC — double-click this to start the site.
REM
REM  Starts the Docusaurus dev server AND the pull helper the Reload button
REM  needs, supervised so an out-of-memory crash restarts itself instead of
REM  ending the session.
REM
REM  Leave this window OPEN for as long as you want the site up. Closing it
REM  stops the site — that is the whole reason it is a window you can see.
REM ===========================================================================

title Dhub POC - keep this window open

cd /d "%~dp0docs-site"

echo.
echo  ==========================================================
echo   Dhub POC
echo.
echo   Site    http://localhost:3100
echo   Helper  http://127.0.0.1:3101   (the Reload button)
echo.
echo   Keep this window open. Press Ctrl+C to stop.
echo  ==========================================================
echo.

REM First run on a new machine needs dependencies.
if not exist "node_modules\" (
  echo  node_modules not found — installing dependencies first.
  echo  This takes a couple of minutes, once.
  echo.
  call npm install
  echo.
)

call npm run dev

REM If npm exits (Ctrl+C, or the supervisor gave up), hold the window open so
REM whatever it printed can actually be read.
echo.
echo  ==========================================================
echo   The site has stopped. The reason is printed above.
echo  ==========================================================
echo.
pause
