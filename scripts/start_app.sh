#!/bin/bash
echo "Starting backend service..."
nohup java -jar /home/ec2-user/backend/backend.jar > /home/ec2-user/backend/backend.log 2>&1 &