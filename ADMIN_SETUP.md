# Admin Panel Setup Guide

## Features Implemented

### 1. Investment Management
- ✅ Create, Read, Update, Delete (CRUD) operations
- ✅ Image upload with preview
- ✅ Status management (Active/Closed)
- ✅ Display order control
- ✅ Connected to backend API

### 2. Team Management
- ✅ CRUD operations for team members
- ✅ Photo upload with preview
- ✅ Bio and position management
- ✅ Display order control
- ✅ Connected to backend API

### 3. Contact Inbox
- ✅ View all contact form submissions
- ✅ Mark messages as read/new
- ✅ Delete messages
- ✅ View full message details in modal
- ✅ Real-time status updates

### 4. Dashboard
- ✅ Live statistics from database:
  - Total investments count
  - Team members count
  - Total contacts
  - New messages count
- ✅ Real-time data updates

### 5. Media Upload
- ✅ Image upload functionality
- ✅ File type validation (jpeg, jpg, png, gif, pdf)
- ✅ File size limit (5MB)
- ✅ Secure storage in backend

## API Endpoints Used

### Investments
- `GET /api/investments` - Get all investments
- `POST /api/investments` - Create new investment (protected)
- `PUT /api/investments/:id` - Update investment (protected)
- `DELETE /api/investments/:id` - Delete investment (protected)

### Team
- `GET /api/team` - Get all team members
- `POST /api/team` - Create team member (protected)
- `PUT /api/team/:id` - Update team member (protected)
- `DELETE /api/team/:id` - Delete team member (protected)

### Contacts
- `POST /api/contacts` - Submit contact form (public)
- `GET /api/contacts` - Get all contacts (protected)
- `PUT /api/contacts/:id` - Update contact status (protected)
- `DELETE /api/contacts/:id` - Delete contact (protected)

### Media
- `POST /api/media/upload` - Upload file (protected)
- `GET /api/media` - Get all media files (protected)
- `DELETE /api/media/:id` - Delete media (protected)

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics (protected)

## How to Use

### 1. Start the Backend
```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Start the Frontend
```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

### 3. Access Admin Panel
Navigate to: `http://localhost:3000/admin`

**Note:** You need to login first at `/admin/login`

### 4. Managing Content

#### Add Investment:
1. Go to "Investments" in the admin sidebar
2. Click "Add Investment" button
3. Fill in the form:
   - Company Name
   - Description
   - Upload Image (optional)
   - Status (Active/Closed)
   - Display Order
4. Click "Create"

#### Add Team Member:
1. Go to "Team" in the admin sidebar
2. Click "Add Team Member" button
3. Fill in the form:
   - Name
   - Position
   - Bio
   - Upload Photo (optional)
   - Display Order
4. Click "Create"

#### View Contacts:
1. Go to "Contacts" in the admin sidebar
2. Click the eye icon to view message details
3. Messages marked as "New" will automatically become "Read"
4. Click trash icon to delete messages

## Image Upload

All uploaded images are:
- Stored in `/backend/server/uploads/`
- Accessible via `/uploads/[filename]`
- Validated for type and size
- Automatically displayed in forms with preview

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ptl-capital
JWT_SECRET=your-secret-key
```

## Authentication

All admin operations (except viewing public data) require authentication via JWT token stored in HTTP-only cookies.

## Image Handling

The admin panel supports image uploads for:
- Investment company logos
- Team member photos
- Other media files

Images are:
- Previewed before upload
- Validated (max 5MB, types: jpeg, jpg, png, gif, pdf)
- Stored securely in the backend
- Served via static file serving

## Troubleshooting

### Images Not Uploading
- Check backend uploads directory exists
- Verify file size is under 5MB
- Ensure file type is supported
- Check browser console for errors

### API Connection Issues
- Verify backend is running on port 5000
- Check CORS settings in backend
- Ensure NEXT_PUBLIC_API_URL is correct

### Authentication Issues
- Clear cookies and login again
- Check JWT_SECRET is set in backend
- Verify token is being sent with requests

## Features Summary

✅ Full CRUD for Investments with image upload
✅ Full CRUD for Team Members with photo upload
✅ Contact form integration with admin inbox
✅ Dashboard with live statistics
✅ Image upload and preview
✅ Secure authentication
✅ Real-time data updates
✅ Responsive design
✅ Error handling and validation
