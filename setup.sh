#!/bin/bash
echo "Adding local .gitconfig"
echo 
git config --local include.path ../.gitconfig
echo "Complete"