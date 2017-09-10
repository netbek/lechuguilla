#!/bin/bash

if [ -d "venv" ]; then
  echo "Virtual environment exists"
else
  echo "Creating virtual environment"
  virtualenv --python=python2.7 venv
  echo "Virtual environment created"
fi

venv/bin/pip install -r requirements.txt

yarn install --pure-lockfile
