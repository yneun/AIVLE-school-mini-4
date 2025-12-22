#!/bin/bash
echo "Stopping backend app..."
PID_FILE="/home/ec2-user/backend/app.pid"
if [ -f $PID_FILE ]; then
  kill -9 $(cat $PID_FILE)
  rm -f $PID_FILE
  echo "Backend stopped"
else
  echo "No backend app running"