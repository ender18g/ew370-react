#!/bin/bash

git add .
git commit -m "$1"
echo "Committing ... $1"
git push origin main