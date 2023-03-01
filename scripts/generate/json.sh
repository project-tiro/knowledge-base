#!/usr/bin/env bash

PROJECT_SRC_ROOT="src"
PROJECT_UTILS_DIR=$PROJECT_SRC_ROOT/lib/utils
export TIRO_DATABASE_ROOT="db"
export METACADEMY_FORMATTED_DATA_ROOT=$TIRO_DATABASE_ROOT/json/metacademy/models

# Setup (make life easier for the javascript code)
rm -rf $TIRO_DATABASE_ROOT
mkdir -p $TIRO_DATABASE_ROOT/json/metacademy/models

# Run function
ts-node -r tsconfig-paths/register $PROJECT_UTILS_DIR/generate-json.ts
