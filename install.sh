#!/bin/bash

if [ -d "venv" ]; then
  echo "Virtual environment exists"
else
  echo "Creating virtual environment"
  virtualenv --python=python2.7 venv
  echo "Virtual environment created"
fi

source venv/bin/activate
pip install -r requirements.txt

yarn install --pure-lockfile
