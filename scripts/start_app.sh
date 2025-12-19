#!/bin/bash
echo "Starting backend app..."
# 예시: Spring Boot jar 실행
nohup java -jar /home/ec2-user/backend/backend-app.jar > /home/ec2-user/backend/app.log 2>&1 &
echo $! > /home/ec2-user/backend/app.pid
echo "Backend started"