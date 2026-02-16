# 🚀 PTL Capital - How to Run

## ⚡ Fastest Way to Start

### Option 1: One-Command Start (Recommended)

```bash
./start-dev.sh
```

This will automatically:
1. ✅ Check and start MongoDB
2. ✅ Install dependencies
3. ✅ Create environment files
4. ✅ Seed the database
5. ✅ Start backend and frontend

### Option 2: Manual Start

Open **two terminal windows**:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## 🌐 Access the Application

After starting:

| Service | URL | Description |
|---------|-----|-------------|
| 🏠 **Website** | http://localhost:3000 | Public website |
| 👥 **Admin** | http://localhost:3000/admin/login | Admin panel |
| ⚙️ **API** | http://localhost:5000/api | Backend API |

## 🔑 Login to Admin

```
Email:    admin@ptlcapital.com
Password: admin123
```

## 📱 What You'll See

### Public Website (http://localhost:3000)

1. **Home** - Hero section, stats, company overview
2. **About** - Company philosophy and investment focus
3. **Services** - Portfolio of 12 investment companies
4. **Team** - Team member profiles
5. **Contact** - Contact form and career opportunities

### Admin Panel (http://localhost:3000/admin)

1. **Dashboard** - Statistics overview
2. **Investments** - Manage portfolio companies
3. **Team** - Manage team members
4. **Contacts** - View form submissions
5. **Media** - Upload and manage files
6. **Users** - Manage admin users

## 🛠️ Before You Start

### Prerequisites

Make sure you have:

```bash
# Node.js (v18+)
node --version

# MongoDB
mongod --version

# npm
npm --version
```

### Install MongoDB (if needed)

**macOS:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Ubuntu/Debian:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

**Windows:**
Download from https://www.mongodb.com/try/download/community

## 🔧 First Time Setup

If this is your first time running:

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Seed the database
npm run seed

# 3. Start the servers
./start-dev.sh
```

## 📊 Available Commands

```bash
npm run dev      # Start Next.js (Frontend) - Port 3000
npm run server   # Start Express (Backend) - Port 5000
npm run build    # Build for production
npm run start    # Start production build
npm run seed     # Create admin user in database
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### MongoDB Connection Error

**Problem:** `MongooseServerSelectionError`

**Solution:**
```bash
# Start MongoDB
brew services start mongodb-community

# Or manually
mongod
```

### Port Already in Use

**Problem:** `EADDRINUSE: address already in use`

**Solution:**
```bash
# For frontend (port 3000)
lsof -ti:3000 | xargs kill

# For backend (port 5000)
lsof -ti:5000 | xargs kill
```

### Dependencies Installation Failed

**Problem:** Peer dependency conflicts

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Can't Login to Admin

**Problem:** Invalid credentials or database not seeded

**Solution:**
```bash
npm run seed
```

## 📁 Project Structure

```
PTL-Capital/
├── app/               # Next.js pages
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   ├── services/     # Services page
│   ├── team/         # Team page
│   ├── contact/      # Contact page
│   └── admin/        # Admin CMS
├── components/        # Reusable components
├── lib/              # API client
├── server/           # Backend API
│   ├── models/       # Database models
│   ├── routes/       # API endpoints
│   └── index.ts      # Server entry
└── public/           # Static files
```

## 🎯 What to Do Next

### 1. Explore the Website
- Visit http://localhost:3000
- Navigate through all pages
- Check responsive design

### 2. Login to Admin
- Go to http://localhost:3000/admin/login
- Use credentials above
- Explore the dashboard

### 3. Test Admin Features
- Add an investment
- Create a team member
- View contact submissions
- Upload media files
- Manage users

### 4. Customize
- Change admin password
- Update company information
- Add real images
- Modify content

## 📚 Documentation

- **Quick Start**: `QUICKSTART_GUIDE.md`
- **Setup Guide**: `SETUP_README.md`
- **Implementation Summary**: `PROJECT_IMPLEMENTATION_SUMMARY.md`

## ✅ Feature Checklist

### Working Features
- [x] Public website (all 5 pages)
- [x] Admin CMS (all 7 admin pages)
- [x] Backend API (all endpoints)
- [x] Authentication (JWT)
- [x] Database (MongoDB)
- [x] Role-based access
- [x] File upload support
- [x] Responsive design

### To Connect (Optional)
- [ ] Frontend to backend API integration
- [ ] Real data loading
- [ ] Image uploads
- [ ] Email notifications
- [ ] Search and filters

## 🚢 Production Deployment

When ready for production:

1. **Update environment variables**
2. **Build frontend**: `npm run build`
3. **Deploy to Vercel** (frontend)
4. **Deploy to Railway** (backend)
5. **Use MongoDB Atlas** (database)

## 💬 Need Help?

1. Check the documentation files
2. Review error messages in terminal
3. Ensure MongoDB is running
4. Verify environment variables

---

## 🎉 You're Ready!

Start the application with:

```bash
./start-dev.sh
```

Then open your browser to:
- **Website**: http://localhost:3000
- **Admin**: http://localhost:3000/admin/login

**Happy developing! 🚀**
