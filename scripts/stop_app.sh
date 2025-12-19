#!/bin/bash
echo "Stopping backend service if running..."
pkill -f backend.jar || true