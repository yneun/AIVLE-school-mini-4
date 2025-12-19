#!/bin/bash
echo "Stopping backend app..."
# 예시: PID 파일 확인 후 kill
if [ -f /home/ec2-user/backend/app.pid ]; then
  kill -9 $(cat /home/ec2-user/backend/app.pid)
  rm -f /home/ec2-user/backend/app.pid
fi
echo "Backend stopped"