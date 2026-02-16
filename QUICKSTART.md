# Quick Start Guide

## Your PTL Capital Landing Page is Ready!

### Step 1: Start the Development Server

Run the following command in your terminal:

```bash
cd /Users/jay/Documents/PTL-Capital
npm run dev
```

The site will be available at: **http://localhost:3000**

### Step 2: View in Browser

Open your browser and navigate to `http://localhost:3000` to see your landing page with:
- Animated hero section
- Background image (bg1.png)
- Email signup form
- Social media links
- Responsive design

### Step 3: Make Customizations

Edit the files to customize your landing page:

1. **Content**: Edit `components/landing-page.tsx`
   - Change the heading and subtitle text
   - Modify social media links
   - Update form placeholder text

2. **Styling**: Edit `app/globals.css`
   - Change colors and fonts
   - Modify animations
   - Adjust spacing

3. **Background**: Replace `public/bg1.png` with your own image

### Step 4: Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Project Features

✅ Next.js 14 - Latest React framework  
✅ TypeScript - Type-safe development  
✅ Tailwind CSS - Utility-first styling  
✅ Responsive Design - Mobile, tablet, desktop  
✅ Animations - Smooth fade-in effects  
✅ Email Form - Ready for backend integration  
✅ Social Links - Customizable links  
✅ Image Optimization - Next.js Image component  

## File Structure

- `app/` - Next.js app router and pages
- `components/` - React components
- `public/` - Static assets (images)
- `tailwind.config.ts` - Tailwind configuration
- `package.json` - Project dependencies

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Need to reinstall dependencies?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run build
```

## Next Steps

1. Customize colors in `tailwind.config.ts`
2. Update social media links in `components/landing-page.tsx`
3. Connect the email form to a backend service
4. Deploy to Vercel, Netlify, or your hosting provider

Enjoy building! 🚀
