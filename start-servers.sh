#!/bin/bash

# Start Backend and Frontend Servers

echo "🚀 Starting PTL Capital Development Servers..."

# Kill any existing processes on ports 3000 and 5000
echo "📝 Cleaning up existing processes..."
lsof -ti:5000 | xargs kill -9 2>/dev/null
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Start Backend
echo "🔧 Starting Backend Server (Port 5000)..."
cd backend
npx tsx watch server/index.ts > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Wait for backend to start
echo "⏳ Waiting for backend to initialize..."
sleep 3

# Check if backend is running
if curl -s http://localhost:5000/api/health > /dev/null; then
    echo "✅ Backend is running on http://localhost:5000"
else
    echo "❌ Backend failed to start. Check backend.log for errors."
    exit 1
fi

# Start Frontend
echo "🎨 Starting Frontend Server (Port 3000)..."
cd frontend
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Wait for frontend to start
echo "⏳ Waiting for frontend to initialize..."
sleep 5

echo ""
echo "✨ Development servers are running:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo "   Admin:    http://localhost:3000/admin"
echo ""
echo "📝 Logs:"
echo "   Backend:  tail -f backend.log"
echo "   Frontend: tail -f frontend.log"
echo ""
echo "🛑 To stop servers: kill $BACKEND_PID $FRONTEND_PID"
echo ""
