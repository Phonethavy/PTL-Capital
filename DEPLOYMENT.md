# Deployment Guide

## Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js applications.

### Option 1: Via Git (Recommended)

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/PTL-Capital.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Your site will be live in minutes!

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder to deploy
   (Note: Netlify has limited Next.js support, Vercel is recommended)

## Deploy to Self-Hosted Server

### Prerequisites
- Node.js 18+ installed on your server
- PM2 or similar process manager

### Steps

1. Build the application:
```bash
npm run build
```

2. Upload to your server:
```bash
scp -r .next app components package.json package-lock.json public your-server:/path/to/app
```

3. Install dependencies on server:
```bash
cd /path/to/app
npm install --production
```

4. Start with PM2:
```bash
npm install -g pm2
pm2 start npm --name "ptl-capital" -- start
pm2 save
pm2 startup
```

5. Setup a reverse proxy (Nginx):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

For production deployments, create a `.env.production.local` file:

```
# Add your production environment variables here
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## SSL Certificate

Use Let's Encrypt for free SSL:
```bash
sudo certbot certonly --standalone -d yourdomain.com
```

Then configure in your reverse proxy.

## Performance Optimization

1. Enable compression:
```bash
npm install compression
```

2. Setup caching headers in `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/public/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
}
```

## Monitoring

Recommended tools:
- Vercel Analytics (if using Vercel)
- New Relic
- Datadog
- CloudFlare

## Support

For issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
