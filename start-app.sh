#!/bin/bash

echo "🚀 กำลังเริ่มต้น PTL Capital Application..."
echo ""

# ตรวจสอบ MongoDB
if ! pgrep -x "mongod" > /dev/null; then
    echo "⚠️  MongoDB ไม่ได้ทำงาน กำลังเริ่มต้น MongoDB..."
    brew services start mongodb-community 2>/dev/null || mongod --fork --logpath /tmp/mongodb.log
    sleep 2
fi

echo "✅ MongoDB กำลังทำงาน"
echo ""

# ติดตั้ง dependencies สำหรับ Backend
echo "📦 กำลังติดตั้ง Backend dependencies..."
cd backend
if [ ! -d "node_modules" ]; then
    npm install
fi
echo ""

# ติดตั้ง dependencies สำหรับ Frontend
echo "📦 กำลังติดตั้ง Frontend dependencies..."
cd ../frontend
if [ ! -d "node_modules" ]; then
    npm install --legacy-peer-deps
fi
cd ..
echo ""

# Seed database
echo "🌱 กำลัง Seed database..."
cd backend && npm run seed
cd ..

echo ""
echo "================================================"
echo "🎉 ติดตั้งเสร็จสมบูรณ์!"
echo "================================================"
echo ""
echo "📝 ข้อมูลเข้าสู่ระบบ Admin:"
echo "   Email: admin@ptlcapital.com"
echo "   Password: admin123"
echo ""
echo "🌐 URLs:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo "   Admin:    http://localhost:3000/admin/login"
echo ""
echo "================================================"
echo ""
echo "กำลังเริ่มต้น servers..."
echo ""

# เปิด Terminal tabs สำหรับ backend และ frontend
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    osascript -e 'tell app "Terminal" to do script "cd \"'$(pwd)'/backend\" && npm run dev"'
    sleep 2
    cd frontend && npm run dev
else
    echo "กรุณารันคำสั่งเหล่านี้ใน terminal แยกกัน:"
    echo "  Terminal 1: cd backend && npm run dev"
    echo "  Terminal 2: cd frontend && npm run dev"
fi
