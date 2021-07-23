#!/bin/bash

yarn build
firebase deploy
git add .
git commit -m "$1"
echo "Committing ... $1"
git push origin main