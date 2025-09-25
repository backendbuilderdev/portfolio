---
title: Linux Cheatsheet
description: Essential Linux commands for system administration and development
category: System
lastUpdated: 2024-01-15
filename: linux.md
tags: ["linux", "bash", "terminal", "system-admin"]
---

# Linux Cheatsheet

## File Operations
```bash
# Navigation
pwd                         # Print working directory
ls                          # List files
ls -la                      # List with details and hidden files
ls -lh                      # List with human-readable sizes
cd /path/to/directory       # Change directory
cd ~                        # Go to home directory
cd -                        # Go to previous directory
cd ..                       # Go up one directory

# File manipulation
touch file.txt              # Create empty file
mkdir directory             # Create directory
mkdir -p path/to/dir        # Create nested directories
cp file.txt backup.txt      # Copy file
cp -r dir1 dir2             # Copy directory recursively
mv file.txt newname.txt     # Move/rename file
rm file.txt                 # Remove file
rm -rf directory            # Remove directory recursively
rmdir directory             # Remove empty directory
```

## File Permissions
```bash
# Permission notation
# r(read)=4, w(write)=2, x(execute)=1
# user, group, others

chmod 755 file.txt          # rwxr-xr-x
chmod 644 file.txt          # rw-r--r--
chmod +x script.sh          # Add execute permission
chmod -w file.txt           # Remove write permission
chmod u+x,g-w,o-r file.txt  # Complex permissions

# Ownership
chown user:group file.txt   # Change owner and group
chown user file.txt         # Change owner only
chgrp group file.txt        # Change group only
sudo chown -R user:group dir # Recursive ownership change
```

## File Content Operations
```bash
# Viewing files
cat file.txt                # Display entire file
less file.txt               # View file page by page
head file.txt               # First 10 lines
head -n 20 file.txt         # First 20 lines
tail file.txt               # Last 10 lines
tail -f file.txt            # Follow file changes (logs)
tail -n 50 file.txt         # Last 50 lines

# Editing files
nano file.txt               # Simple text editor
vim file.txt                # Vim editor
emacs file.txt              # Emacs editor

# File comparison
diff file1.txt file2.txt    # Show differences
cmp file1.txt file2.txt     # Compare files byte by byte
```

## Text Processing
```bash
# Search and filter
grep "pattern" file.txt     # Search for pattern
grep -i "pattern" file.txt  # Case-insensitive search
grep -r "pattern" directory # Recursive search
grep -n "pattern" file.txt  # Show line numbers
grep -v "pattern" file.txt  # Invert match (exclude)

# Text manipulation
sort file.txt               # Sort lines
sort -r file.txt            # Reverse sort
sort -n file.txt            # Numeric sort
uniq file.txt               # Remove duplicate lines
cut -d',' -f1,3 file.csv    # Extract columns from CSV
awk '{print $1}' file.txt   # Print first column
sed 's/old/new/g' file.txt  # Replace text
tr 'a-z' 'A-Z' < file.txt   # Convert to uppercase
```

## Process Management
```bash
# Process information
ps                          # Show running processes
ps aux                      # Detailed process list
ps -ef                      # Full format listing
top                         # Real-time process monitor
htop                        # Enhanced process monitor
pgrep process_name          # Find process ID by name
pidof process_name          # Get PID of process

# Process control
kill PID                    # Terminate process
kill -9 PID                 # Force kill process
killall process_name        # Kill all processes by name
pkill process_name          # Kill processes by name
nohup command &             # Run command in background
jobs                        # List active jobs
fg %1                       # Bring job to foreground
bg %1                       # Send job to background
```

## System Information
```bash
# System details
uname -a                    # System information
whoami                      # Current username
id                          # User and group IDs
uptime                      # System uptime
date                        # Current date and time
cal                         # Calendar
which command               # Location of command
whereis command             # Locate binary, source, manual

# Hardware information
lscpu                       # CPU information
lsmem                       # Memory information
lsblk                       # Block devices
lsusb                       # USB devices
lspci                       # PCI devices
df -h                       # Disk space usage
du -sh directory            # Directory size
free -h                     # Memory usage
```

## Network Operations
```bash
# Network information
ifconfig                    # Network interface configuration
ip addr show                # Show IP addresses
ip route show               # Show routing table
netstat -tuln               # Show listening ports
ss -tuln                    # Modern netstat alternative
ping google.com             # Test connectivity
traceroute google.com       # Trace network path
nslookup domain.com         # DNS lookup
dig domain.com              # DNS information

# Network tools
wget https://example.com/file # Download file
curl https://api.example.com  # Make HTTP request
curl -X POST -d "data" url    # POST request
scp file.txt user@host:/path  # Secure copy over SSH
rsync -av source/ dest/       # Synchronize directories
```

## Archive and Compression
```bash
# tar archives
tar -cvf archive.tar files   # Create tar archive
tar -xvf archive.tar         # Extract tar archive
tar -czvf archive.tar.gz files # Create compressed archive
tar -xzvf archive.tar.gz     # Extract compressed archive
tar -tf archive.tar          # List archive contents

# Other compression
zip archive.zip files        # Create zip archive
unzip archive.zip            # Extract zip archive
gzip file.txt               # Compress file
gunzip file.txt.gz          # Decompress file
```

## File Search and Location
```bash
# Find files
find /path -name "*.txt"     # Find files by name
find /path -type f -size +1M # Find files larger than 1MB
find /path -mtime -7         # Files modified in last 7 days
find /path -user username    # Files owned by user
find /path -perm 755         # Files with specific permissions

# Locate files
locate filename             # Find file in database
updatedb                    # Update locate database
which command               # Find command location
type command                # Show command type
```

## Environment Variables
```bash
# View variables
env                         # Show all environment variables
echo $PATH                  # Show PATH variable
echo $HOME                  # Show home directory
printenv                    # Print environment

# Set variables
export VAR_NAME=value       # Set environment variable
unset VAR_NAME              # Remove variable
export PATH=$PATH:/new/path # Add to PATH

# Configuration files
~/.bashrc                   # Bash configuration
~/.bash_profile             # Bash login configuration
/etc/environment            # System-wide environment
```

## Input/Output Redirection
```bash
# Redirection
command > file.txt          # Redirect stdout to file
command >> file.txt         # Append stdout to file
command < file.txt          # Use file as stdin
command 2> error.log        # Redirect stderr to file
command &> output.log       # Redirect both stdout and stderr
command | grep pattern      # Pipe output to another command

# Advanced redirection
command 2>&1                # Redirect stderr to stdout
command > /dev/null 2>&1    # Discard all output
tee file.txt                # Write to file and stdout
```

## System Services (systemd)
```bash
# Service management
systemctl start service     # Start service
systemctl stop service      # Stop service
systemctl restart service   # Restart service
systemctl reload service    # Reload service configuration
systemctl enable service    # Enable service at boot
systemctl disable service   # Disable service at boot
systemctl status service    # Check service status
systemctl list-units       # List all units
```

## Package Management

### Ubuntu/Debian (apt)
```bash
sudo apt update             # Update package list
sudo apt upgrade            # Upgrade packages
sudo apt install package   # Install package
sudo apt remove package    # Remove package
sudo apt purge package     # Remove package and config
sudo apt search keyword    # Search packages
sudo apt show package      # Show package info
sudo apt autoremove        # Remove unused packages
```

### CentOS/RHEL (yum/dnf)
```bash
sudo yum update             # Update packages
sudo yum install package   # Install package
sudo yum remove package    # Remove package
sudo yum search keyword    # Search packages
sudo yum info package      # Package information
sudo dnf update             # DNF (newer systems)
sudo dnf install package   # Install with DNF
```

## Monitoring and Performance
```bash
# System monitoring
top                         # Process monitor
htop                        # Enhanced process monitor
iotop                       # I/O monitor
vmstat                      # Virtual memory statistics
iostat                      # I/O statistics
sar                         # System activity reporter
dstat                       # Versatile system stats

# Log monitoring
tail -f /var/log/syslog     # Follow system log
journalctl -f               # Follow systemd journal
journalctl -u service       # Service-specific logs
dmesg                       # Kernel messages
```

## Cron Jobs (Scheduled Tasks)
```bash
# Cron management
crontab -e                  # Edit cron jobs
crontab -l                  # List cron jobs
crontab -r                  # Remove all cron jobs

# Cron syntax: minute hour day month weekday command
# Examples:
0 2 * * *                   # Daily at 2 AM
*/15 * * * *                # Every 15 minutes
0 0 1 * *                   # First day of month
0 9-17 * * 1-5              # Weekdays 9 AM to 5 PM
```

## SSH and Remote Access
```bash
# SSH connections
ssh user@hostname           # Connect to remote host
ssh -p 2222 user@host       # Connect on specific port
ssh -i keyfile user@host    # Connect with key file
ssh-keygen -t rsa           # Generate SSH key pair
ssh-copy-id user@host       # Copy public key to remote

# SSH tunneling
ssh -L 8080:localhost:80 user@host  # Local port forwarding
ssh -R 8080:localhost:80 user@host  # Remote port forwarding
ssh -D 1080 user@host       # SOCKS proxy
```

## Useful Shortcuts
```bash
# Command line shortcuts
Ctrl+C                      # Interrupt current command
Ctrl+Z                      # Suspend current command
Ctrl+D                      # Exit shell or end input
Ctrl+L                      # Clear screen
Ctrl+A                      # Move to beginning of line
Ctrl+E                      # Move to end of line
Ctrl+U                      # Delete from cursor to beginning
Ctrl+K                      # Delete from cursor to end
Ctrl+R                      # Search command history
!!                          # Repeat last command
!n                          # Repeat command number n
```