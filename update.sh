#!/usr/bin/env bash

source bgord-scripts/base.sh
setup_base_config

info "Performing an auto-update..."

cd frontend/bgord-frontend/
git pull origin master

cd ../../
git add frontend/bgord-frontend
git commit -m "step: bump bgord/frontend" --no-verify

success "Auto-update performed!"
