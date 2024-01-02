#!/bin/sh

npm install -g prisma

if [ $? -eq 0 ]; then
    echo "Prisma installed successfully"

    npx prisma generate

    if [ $? -eq 0 ]; then
        echo "Prisma client generated successfully"
        
        npm start
    else
        echo "Failed to generate Prisma client"
        exit 1
    fi
else
    echo "Failed to install Prisma"
    exit 1
fi
