#!/bin/bash

echo "🚀 Starting PTL Capital Application..."
echo ""

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "⚠️  MongoDB is not running. Starting MongoDB..."
    brew services start mongodb-community 2>/dev/null || mongod --fork --logpath /tmp/mongodb.log
    sleep 2
fi

echo "✅ MongoDB is running"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
    echo ""
fi

# Check if .env files exist
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating with default values..."
    cat > .env << EOF
MONGODB_URI=mongodb://localhost:27017/ptl-capital
JWT_SECRET=your-secret-key-change-this-in-production
PORT=5000
NODE_ENV=development
EOF
    echo "✅ .env created"
fi

if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local file not found. Creating with default values..."
    cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:5000/api
EOF
    echo "✅ .env.local created"
fi

echo ""
echo "🌱 Seeding database..."
npm run seed

echo ""
echo "================================================"
echo "🎉 Setup complete!"
echo "================================================"
echo ""
echo "📝 Admin Login Credentials:"
echo "   Email: admin@ptlcapital.com"
echo "   Password: admin123"
echo ""
echo "🌐 Application URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo "   Admin:    http://localhost:3000/admin/login"
echo ""
echo "================================================"
echo ""
echo "Starting servers..."
echo ""

# Open two terminal tabs to run frontend and backend
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    osascript -e 'tell app "Terminal" to do script "cd \"'$(pwd)'\" && npm run server"'
    sleep 2
    npm run dev
else
    # Linux or other
    echo "Please run these commands in separate terminals:"
    echo "  Terminal 1: npm run server"
    echo "  Terminal 2: npm run dev"
fi
