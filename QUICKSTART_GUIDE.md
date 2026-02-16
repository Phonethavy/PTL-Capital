# PTL Capital - Quick Start Guide

## 🚀 Quick Start (Fastest Way)

### Option 1: Using the Startup Script (Recommended)

```bash
./start-dev.sh
```

This script will:
- Check and start MongoDB if needed
- Install dependencies if missing
- Create environment files if needed
- Seed the database with admin user
- Start both frontend and backend servers

### Option 2: Manual Setup

1. **Start MongoDB**
   ```bash
   brew services start mongodb-community
   ```

2. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Seed Database**
   ```bash
   npm run seed
   ```

4. **Start Backend** (Terminal 1)
   ```bash
   npm run server
   ```

5. **Start Frontend** (Terminal 2)
   ```bash
   npm run dev
   ```

## 🔑 Login Credentials

After seeding, use these credentials to access the admin panel:

- **URL**: http://localhost:3000/admin/login
- **Email**: admin@ptlcapital.com
- **Password**: admin123

⚠️ **IMPORTANT**: Change these credentials after first login!

## 📁 Project Overview

This is a full-stack investment corporate website with:

### Public Website (http://localhost:3000)
- ✅ Home page - Hero, stats, investments preview
- ✅ About page - Company philosophy and values
- ✅ Services page - Investment portfolio
- ✅ Team page - Member profiles
- ✅ Contact page - Form submission and careers

### Admin CMS (http://localhost:3000/admin)
- ✅ Dashboard - Statistics overview
- ✅ Investments - CRUD operations
- ✅ Team - Member management
- ✅ Contacts - Inbox for submissions
- ✅ Media - File upload library
- ✅ Users - User and role management

### Backend API (http://localhost:5000/api)
- ✅ RESTful API with Express.js
- ✅ MongoDB with Mongoose ODM
- ✅ JWT Authentication
- ✅ Role-based access control
- ✅ File upload support

## 🛠️ Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT Tokens
- **File Upload**: Multer

## 📋 Available Scripts

```bash
npm run dev      # Start Next.js frontend (port 3000)
npm run server   # Start Express backend (port 5000)
npm run build    # Build for production
npm run start    # Start production frontend
npm run seed     # Seed database with admin user
```

## 🔧 Environment Variables

### .env (Backend)
```env
MONGODB_URI=mongodb://localhost:27017/ptl-capital
JWT_SECRET=your-secret-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

### .env.local (Frontend)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📊 Database Collections

1. **users** - Admin and editor users
2. **investments** - Portfolio companies
3. **teamMembers** - Team profiles
4. **contacts** - Form submissions
5. **media** - Uploaded files

## 🎯 Next Steps

1. **Customize Content**
   - Login to admin panel
   - Add real investments and team members
   - Update company information

2. **Add Images**
   - Upload company logos via Media Library
   - Replace placeholder images
   - Add team photos

3. **Configure Email**
   - Set up email notifications for contact forms
   - Configure SMTP settings

4. **Security**
   - Change admin password
   - Update JWT secret
   - Enable HTTPS in production

5. **Deployment**
   - Deploy frontend to Vercel/Netlify
   - Deploy backend to Heroku/Railway
   - Use MongoDB Atlas for database

## 🐛 Troubleshooting

### MongoDB Not Starting
```bash
# Check if MongoDB is installed
brew list | grep mongodb

# Install if needed
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Kill process on port 5000
lsof -ti:5000 | xargs kill
```

### Dependencies Issues
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 📖 Additional Documentation

- Full setup guide: `SETUP_README.md`
- API documentation: Available in backend routes
- Deployment guide: Coming soon

## 🆘 Need Help?

1. Check `SETUP_README.md` for detailed documentation
2. Review error logs in terminal
3. Check MongoDB connection status
4. Verify environment variables

## 📝 Features Checklist

### Completed ✅
- [x] Frontend with all public pages
- [x] Backend API with all routes
- [x] MongoDB models and schemas
- [x] Authentication system
- [x] Admin CMS interface
- [x] File upload capability
- [x] Role-based permissions
- [x] Database seeding

### To Implement
- [ ] API integration on frontend pages
- [ ] Real-time updates
- [ ] Email notifications
- [ ] Image optimization
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Production deployment

## 🚢 Deployment Ready

The application is structured for easy deployment:

- **Frontend**: Deploy to Vercel (zero config)
- **Backend**: Deploy to Railway or Heroku
- **Database**: Use MongoDB Atlas (cloud)

---

**Happy Coding! 🎉**
