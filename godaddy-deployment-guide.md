# 🚀 Deploy to GoDaddy - choploans.com.au

## Option 1: GoDaddy DNS → Netlify (Recommended)

### Step 1: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) - Sign up FREE
2. Click "Add new site" → "Deploy manually" 
3. Drag your `build` folder to deploy
4. Note your Netlify URL: `[something].netlify.app`

### Step 2: GoDaddy DNS Configuration
1. **Login to GoDaddy**: godaddy.com
2. **Go to**: My Products → DNS → choploans.com.au
3. **Delete**: Any existing A records pointing to parking pages
4. **Add these records**:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 1 Hour

Type: CNAME
Name: www  
Value: [your-netlify-site].netlify.app
TTL: 1 Hour
```

### Step 3: Connect in Netlify
1. Netlify Dashboard → Domain settings
2. Add custom domain: `choploans.com.au`
3. Enable HTTPS (automatic)

---

## Option 2: GoDaddy Web Hosting (If you have hosting plan)

### If you have GoDaddy hosting:
1. **Login to GoDaddy cPanel**
2. **Go to**: File Manager
3. **Navigate to**: public_html folder
4. **Delete**: All existing files (index.html, etc.)
5. **Upload**: All files from your `build` folder
6. **Ensure**: index.html is in the root of public_html

### Upload via FTP:
- **Host**: Your domain or IP from GoDaddy
- **Username**: Your cPanel username  
- **Password**: Your cPanel password
- **Upload to**: /public_html/

---

## Option 3: GoDaddy Website Builder → Custom Code
If you're using GoDaddy Website Builder:
1. This won't work easily - Website Builder is limited
2. **Recommend**: Switch to Option 1 (Netlify) instead

---

## 🔍 DNS Propagation Check
After setting DNS:
1. **Wait**: 15 minutes to 48 hours for DNS to update
2. **Check**: Use [whatsmydns.net](https://whatsmydns.net) 
3. **Enter**: choploans.com.au
4. **Look for**: Your new IP address worldwide

---

## 📧 Email Setup (ankush@choploans.com.au)
With GoDaddy:
1. **Go to**: Email & Office → Email Forwarding
2. **Create**: ankush@choploans.com.au
3. **Forward to**: Your existing email address
4. **Or buy**: Microsoft 365 email hosting

---

## 🆘 Need Help?
- **GoDaddy Support**: Available 24/7 via chat/phone
- **DNS Issues**: Usually resolve within 24 hours
- **SSL Certificate**: Automatic with Netlify

**🎉 Your site will be live at https://choploans.com.au** 