# Deployment Checklist for cPanel

## GitHub Secrets Required

Make sure you have these secrets set up in your GitHub repository:

1. Go to your repository: https://github.com/mehedimohammad213/PortfolioWebsite
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:

### Required Secrets:

- `FTP_SERVER`: Your cPanel FTP server (e.g., `yourdomain.com` or `ftp.yourdomain.com`)
- `FTP_USERNAME`: Your cPanel FTP username
- `FTP_PASSWORD`: Your cPanel FTP password

## How to Add Secrets:

1. Click "New repository secret"
2. Name: `FTP_SERVER`
3. Value: Your FTP server address
4. Repeat for `FTP_USERNAME` and `FTP_PASSWORD`

## Testing the Deployment:

1. Push to the `mehedi` branch
2. Go to Actions tab in your repository
3. Check if the workflow runs successfully
4. Verify files are uploaded to your cPanel

## Troubleshooting:

- If build fails, check the Actions logs
- If FTP upload fails, verify your credentials
- Make sure your cPanel allows FTP connections
- Check if the server directory `/mehedi213.me/` exists on your server

## Current Configuration:

- ✅ Next.js configured for static export (`output: "export"`)
- ✅ GitHub Actions workflow updated
- ✅ Build process optimized
- ✅ Error handling added
- ⚠️ Need to set up GitHub secrets
