#!/bin/bash
set -e

APP_DIR=/home/ec2-user/backend
JAR_NAME=book-0.0.1-SNAPSHOT.jar
LOG_DIR=/home/ec2-user/logs

mkdir -p $LOG_DIR

echo "Stopping existing Spring Boot app (if any)..."
pkill -f "$JAR_NAME" || true

echo "Starting Spring Boot app..."
nohup java -jar $APP_DIR/$JAR_NAME > $LOG_DIR/backend.log 2>&1 &

echo "Restarting nginx..."
sudo systemctl restart nginx