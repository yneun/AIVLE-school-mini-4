#!/bin/bash
set -e

echo "Apply execute permission to scripts"
chmod +x /home/ec2-user/deploy-scripts/*.sh

echo "Prepare frontend directory"
sudo rm -rf /var/www/frontend/*
sudo mkdir -p /var/www/frontend
sudo chown -R ec2-user:ec2-user /var/www/frontend