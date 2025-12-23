#!/bin/bash
chmod +x /home/ec2-user/deploy-scripts/*.sh

set -e
echo "Cleaning /var/www/frontend"
rm -rf /var/www/frontend/*
mkdir -p /var/www/frontend