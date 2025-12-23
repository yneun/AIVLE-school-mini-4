#!/bin/bash
set -e

# Deploy-scripts 복사 후 권한 적용
chmod +x /home/ec2-user/deploy-scripts/*.sh

# Frontend 초기화
echo "Cleaning /var/www/frontend"
rm -rf /var/www/frontend/*
mkdir -p /var/www/frontend
sudo chown -R ec2-user:ec2-user /var/www/frontend