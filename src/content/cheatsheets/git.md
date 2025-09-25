---
title: Git Cheatsheet
description: Version control commands and workflows
category: Development
---

# Git Cheatsheet

## Basic Commands
```bash
git init                    # Initialize repository
git clone <url>             # Clone repository
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push                    # Push to remote
git pull                    # Pull from remote
git status                  # Check status
```

## Branching
```bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <branch>       # Switch branch
git checkout -b <name>      # Create and switch
git merge <branch>          # Merge branch
git branch -d <name>        # Delete branch
```

## Remote Operations
```bash
git remote -v               # List remotes
git remote add origin <url> # Add remote
git fetch                   # Fetch changes
git push -u origin main     # Push and set upstream
```

## Undoing Changes
```bash
git reset HEAD~1            # Undo last commit (keep changes)
git reset --hard HEAD~1     # Undo last commit (discard changes)
git revert <commit>         # Create new commit that undoes changes
git checkout -- <file>     # Discard changes in file
```