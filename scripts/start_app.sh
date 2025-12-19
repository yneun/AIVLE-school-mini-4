version: 0.0
os: linux
files:
  - source: frontend/dist/
    destination: /var/www/frontend/
  - source: backend/build/libs/*.jar
    destination: /home/ec2-user/backend/
  - source: scripts/**
    destination: /home/ec2-user/deploy-scripts/

hooks:
  BeforeInstall:
    - location: deploy-scripts/stop_app.sh
      timeout: 300
      runas: ec2-user
  AfterInstall:
    - location: deploy-scripts/start_app.sh
      timeout: 300
      runas: ec2-user