@echo off


set fix_message="Auto commit by shell script"

:: Execute git commands
git pull
git add --all
git commit -m %fix_message%
git push

:: Output result
echo Auto commit by shell script
