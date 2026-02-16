# Image Upload Troubleshooting Guide

## Common Issue: "Failed to upload image"

### Most Likely Cause: Not Logged In
The image upload endpoint requires authentication. You must be logged in to the admin panel before uploading images.

### Solution Steps:

1. **Login to Admin Panel**
   - Go to: `http://localhost:3000/admin/login`
   - Enter your credentials
   - Make sure you see "Login successful" or are redirected to the dashboard

2. **Check Browser Cookies**
   - Open Developer Tools (F12)
   - Go to "Application" tab → "Cookies"
   - Verify there's a `token` cookie for `localhost`
   - If no token exists, you need to login again

3. **Try Upload Again**
   - After logging in, navigate to Investments or Team page
   - Click "Add Investment" or "Add Team Member"
   - Fill in the form and select an image
   - Submit the form

### Backend Logs
The backend now logs detailed error messages. Check the backend terminal for:
- "No token found in cookies or headers" → You're not logged in
- "Multer error" → File upload issue (size, type, etc.)
- "Upload error" → General upload error
- "Save error" → Database save error

### Image Requirements
- **Max Size**: 5MB
- **Allowed Types**: JPEG, JPG, PNG, GIF, PDF
- **Location**: Images saved to `/backend/server/uploads/`

### Testing Without Authentication (Development Only)
If you need to test uploads without login, temporarily modify:
`/backend/server/routes/media.ts`

Change:
```typescript
router.post('/upload', authMiddleware, ...
```

To:
```typescript
router.post('/upload', ... // Remove authMiddleware
```

**⚠️ WARNING**: Remember to add authentication back before deploying!

### Check Backend Status
1. Backend should be running on `http://localhost:5000`
2. Check backend terminal for error messages
3. Test health endpoint: `http://localhost:5000/api/health`

### CORS Issues
If you see CORS errors in the browser console:
- Backend CORS is configured for `http://localhost:3000`
- Make sure frontend is running on port 3000
- Check that credentials are being sent with requests

### Debugging Checklist
- [ ] Backend server is running
- [ ] Logged into admin panel
- [ ] Cookie token exists in browser
- [ ] Image file meets requirements (size, type)
- [ ] No CORS errors in console
- [ ] Backend logs show the request

### Still Having Issues?
1. Clear browser cookies and cache
2. Restart both frontend and backend servers
3. Check browser console for detailed error messages
4. Check backend terminal for server-side errors
5. Verify MongoDB is running and connected
