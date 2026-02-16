# PTL Capital - โครงสร้างโปรเจค

## 📁 โครงสร้างที่แยกแล้ว

```
PTL-Capital/
├── backend/              # API Backend
│   ├── server/
│   │   ├── models/      # MongoDB Models
│   │   ├── routes/      # API Routes
│   │   ├── middleware/  # Auth Middleware
│   │   ├── uploads/     # ไฟล์ที่อัพโหลด
│   │   ├── index.ts     # Server Entry Point
│   │   └── seed.ts      # Database Seeder
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── frontend/            # Next.js Frontend
│   ├── app/            # Next.js Pages
│   ├── components/     # React Components
│   ├── lib/            # API Client
│   ├── public/         # Static Files
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.local
│
└── start-app.sh        # Startup Script
```

## 🚀 วิธีรัน

### วิธีที่ 1: ใช้ Script (แนะนำ)

```bash
./start-app.sh
```

### วิธีที่ 2: รันแยกกัน

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

## 📋 คำสั่งที่มี

### Backend (cd backend)
```bash
npm run dev      # รัน backend server (development)
npm run start    # รัน backend server (production)
npm run seed     # สร้าง admin user
```

### Frontend (cd frontend)
```bash
npm run dev      # รัน Next.js (development)
npm run build    # Build สำหรับ production
npm run start    # รัน Next.js (production)
npm run lint     # ตรวจสอบ code
```

## 🔧 Configuration

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/ptl-capital
JWT_SECRET=your-secret-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Admin Panel**: http://localhost:3000/admin/login

## 🔑 Login

```
Email:    admin@ptlcapital.com
Password: admin123
```

## 📦 ติดตั้ง Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install --legacy-peer-deps
```

## 🚢 Deployment แยกกัน

### Backend
- Deploy ไปที่ Railway, Heroku, หรือ DigitalOcean
- ตั้งค่า environment variables
- เชื่อมต่อกับ MongoDB Atlas

### Frontend
- Deploy ไปที่ Vercel หรือ Netlify
- ตั้งค่า NEXT_PUBLIC_API_URL ให้ชี้ไปที่ backend URL
- Build และ deploy

## ✅ ข้อดีของการแยก

1. **แยก Dependencies** - ไม่ปะปนกัน
2. **Deploy แยกกัน** - Backend และ Frontend deploy คนละที่
3. **Scale แยกกัน** - ปรับขนาดได้อิสระ
4. **Development** - ทำงานแยกกันได้
5. **CI/CD** - Build และ test แยกกัน

## 🔄 การพัฒนา

1. รัน backend และ frontend แยกกัน
2. Frontend เรียก API ผ่าน http://localhost:5000/api
3. Backend ตอบกลับข้อมูล JSON
4. CORS ตั้งค่าให้ frontend เข้าถึงได้

---

**โครงสร้างใหม่พร้อมใช้งาน! 🎉**
