@Echo off
%~d1
cd "%~p1"
start cmd /k "gulp watch"