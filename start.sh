#!/bin/bash

# PTL Capital Landing Page - Quick Start Script

echo "🚀 Starting PTL Capital Landing Page..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✅ Dependencies ready!"
echo "🌐 Starting development server..."
echo ""
echo "Your landing page will be available at:"
echo "👉 http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
