# PTL Capital - Investment Corporate Website with Admin CMS

A full-stack corporate website for PTL Capital investment company with a complete admin content management system.

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer

## Features

### Public Website
- Home page with hero section, stats, and company overview
- About Us page with company philosophy and values
- Services page showcasing investment portfolio
- Team page with member profiles
- Contact page with form submission and career opportunities

### Admin CMS
- Dashboard with statistics overview
- Investment management (CRUD operations)
- Team member management
- Contact inbox for viewing submissions
- Media library for file management
- User and role management (Admin/Editor roles)
- Authentication and authorization

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PTL-Capital
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**
   
   Create `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ptl-capital
   JWT_SECRET=your-secret-key-change-this-in-production
   PORT=5000
   NODE_ENV=development
   ```

   Create `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # Or run manually
   mongod
   ```

5. **Seed the database**
   
   Create initial admin user:
   ```bash
   npm run seed
   ```
   
   This will create an admin user with:
   - Email: `admin@ptlcapital.com`
   - Password: `admin123`

## Running the Application

### Development Mode

Run both frontend and backend concurrently:

1. **Start the backend server** (Terminal 1):
   ```bash
   npm run server
   ```
   Backend will run on http://localhost:5000

2. **Start the frontend** (Terminal 2):
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:3000

### Access the Application

- **Public Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **API Endpoint**: http://localhost:5000/api

### Default Admin Credentials

- **Email**: admin@ptlcapital.com
- **Password**: admin123

**⚠️ IMPORTANT**: Change these credentials in production!

## Project Structure

```
PTL-Capital/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── admin/               # Admin CMS pages
│   │   ├── contacts/
│   │   ├── investments/
│   │   ├── login/
│   │   ├── media/
│   │   ├── team/
│   │   └── users/
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── team/                # Team page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Footer.tsx
│   └── Header.tsx
├── server/                  # Backend API
│   ├── middleware/          # Auth middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── uploads/             # File uploads
│   ├── index.ts             # Server entry
│   └── seed.ts              # Database seeder
├── public/                  # Static files
├── .env                     # Backend environment variables
├── .env.local               # Frontend environment variables
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Investments
- `GET /api/investments` - Get all investments (public)
- `GET /api/investments/:id` - Get single investment (public)
- `POST /api/investments` - Create investment (protected)
- `PUT /api/investments/:id` - Update investment (protected)
- `DELETE /api/investments/:id` - Delete investment (protected)

### Team
- `GET /api/team` - Get all team members (public)
- `GET /api/team/:id` - Get single team member (public)
- `POST /api/team` - Create team member (protected)
- `PUT /api/team/:id` - Update team member (protected)
- `DELETE /api/team/:id` - Delete team member (protected)

### Contacts
- `POST /api/contacts` - Submit contact form (public)
- `GET /api/contacts` - Get all contacts (protected)
- `PUT /api/contacts/:id` - Mark as read (protected)
- `DELETE /api/contacts/:id` - Delete contact (protected)

### Media
- `POST /api/media/upload` - Upload file (protected)
- `GET /api/media` - Get all media (protected)
- `DELETE /api/media/:id` - Delete media (protected)

### Users (Admin Only)
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics (protected)

## User Roles & Permissions

### Admin
- Full access to all features
- Can manage users and roles
- Can manage all content

### Editor
- Can manage investments
- Can manage team members
- Can manage about page content
- Cannot manage users

## Development

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run server` - Start backend API server
- `npm run seed` - Seed database with initial admin user

### Building for Production

1. **Build the frontend**:
   ```bash
   npm run build
   ```

2. **Start production servers**:
   ```bash
   # Start backend (Terminal 1)
   npm run server
   
   # Start frontend (Terminal 2)
   npm run start
   ```

## Database Schema

### Users Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (Admin/Editor),
  createdAt: Date,
  updatedAt: Date
}
```

### Investments Collection
```javascript
{
  companyName: String,
  description: String,
  image: String,
  status: String (Active/Closed),
  displayOrder: Number,
  createdAt: Date
}
```

### Team Members Collection
```javascript
{
  name: String,
  position: String,
  bio: String,
  photo: String,
  displayOrder: Number
}
```

### Contacts Collection
```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: String (New/Read),
  createdAt: Date
}
```

### Media Collection
```javascript
{
  fileName: String,
  fileType: String,
  url: String,
  createdAt: Date
}
```

## Security Considerations

1. **Change default credentials** after first login
2. **Use strong JWT secret** in production
3. **Enable HTTPS** in production
4. **Set secure cookie flags** in production
5. **Implement rate limiting** for API endpoints
6. **Sanitize user inputs** to prevent XSS
7. **Use environment variables** for sensitive data

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `brew services list`
- Check connection string in `.env`
- Try connecting with MongoDB Compass

### Port Already in Use
- Frontend (3000): `lsof -ti:3000 | xargs kill`
- Backend (5000): `lsof -ti:5000 | xargs kill`

### Dependencies Installation Issues
- Use `--legacy-peer-deps` flag with npm install
- Clear npm cache: `npm cache clean --force`

## Future Enhancements

- Image optimization and CDN integration
- Email notifications for contact forms
- Advanced analytics dashboard
- Multi-language support
- SEO optimization
- Blog/News management system
- Newsletter subscription

## Support

For issues and questions, please contact the development team.

## License

Proprietary - PTL Capital
