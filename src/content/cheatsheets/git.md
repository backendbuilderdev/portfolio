---
title: Git Cheatsheet
description: Essential Git commands for version control and collaboration
category: Development
lastUpdated: 2024-01-15
filename: git.md
tags: ["git", "version-control", "github", "collaboration"]
---

# Git Cheatsheet

## Setup & Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list                    # View all settings
git config --global init.defaultBranch main
```

## Repository Initialization
```bash
git init                             # Initialize new repository
git clone <url>                      # Clone remote repository
git clone <url> <directory>          # Clone to specific directory
git clone --depth 1 <url>            # Shallow clone (latest commit only)
```

## Basic Workflow
```bash
git status                           # Check repository status
git add <file>                       # Stage specific file
git add .                            # Stage all changes
git add -A                           # Stage all changes including deletions
git commit -m "message"              # Commit with message
git commit -am "message"             # Stage and commit tracked files
git push                             # Push to remote
git pull                             # Pull from remote
git fetch                            # Fetch without merging
```

## Branching & Merging
```bash
git branch                           # List local branches
git branch -a                        # List all branches
git branch <name>                    # Create new branch
git checkout <branch>                # Switch to branch
git checkout -b <name>               # Create and switch to branch
git switch <branch>                  # Switch to branch (Git 2.23+)
git switch -c <name>                 # Create and switch (Git 2.23+)
git merge <branch>                   # Merge branch into current
git branch -d <name>                 # Delete merged branch
git branch -D <name>                 # Force delete branch
```

## Remote Operations
```bash
git remote -v                        # List remotes
git remote add origin <url>          # Add remote
git remote remove <name>             # Remove remote
git push -u origin <branch>          # Push and set upstream
git push origin --delete <branch>    # Delete remote branch
git fetch origin                     # Fetch from origin
git pull origin <branch>             # Pull specific branch
```

## Undoing Changes
```bash
git checkout -- <file>               # Discard changes in file
git restore <file>                   # Restore file (Git 2.23+)
git reset HEAD <file>                # Unstage file
git reset --soft HEAD~1              # Undo commit, keep changes staged
git reset HEAD~1                     # Undo commit, keep changes unstaged
git reset --hard HEAD~1              # Undo commit, discard changes
git revert <commit>                  # Create new commit that undoes changes
```

## Viewing History
```bash
git log                              # View commit history
git log --oneline                    # Compact log
git log --graph --oneline            # Visual branch history
git show <commit>                    # Show commit details
git diff                             # Show unstaged changes
git diff --staged                    # Show staged changes
git diff <branch1>..<branch2>        # Compare branches
```

## Stashing
```bash
git stash                            # Stash current changes
git stash push -m "message"          # Stash with message
git stash list                       # List stashes
git stash pop                        # Apply and remove latest stash
git stash apply                      # Apply stash without removing
git stash drop                       # Delete latest stash
git stash clear                      # Delete all stashes
```

## Tagging
```bash
git tag                              # List tags
git tag <name>                       # Create lightweight tag
git tag -a <name> -m "message"       # Create annotated tag
git push origin <tag>                # Push specific tag
git push origin --tags               # Push all tags
git tag -d <name>                    # Delete local tag
git push origin --delete <tag>       # Delete remote tag
```