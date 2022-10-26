#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

info "Publishing to GitHub"

# ==========================================================

npm run build
git add .
git commit -m "feature: build"
git push

success "Published successfully!"
