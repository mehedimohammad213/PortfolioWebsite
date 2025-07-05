# Docker Deployment Guide

This guide will help you build and deploy your Next.js portfolio application using Docker and push it to Docker Hub.

## Prerequisites

1. **Docker Desktop** installed and running
2. **Docker Hub account** (you already have one: mehedi213)
3. **Git** (optional, for version control)

## Quick Start

### Option 1: Using PowerShell Script (Windows)

1. Open PowerShell in your project directory
2. Run the deployment script:
   ```powershell
   .\deploy.ps1
   ```
3. Follow the prompts to login to Docker Hub and deploy

### Option 2: Using Bash Script (Linux/Mac)

1. Make the script executable:
   ```bash
   chmod +x deploy.sh
   ```
2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

### Option 3: Manual Commands

If you prefer to run commands manually:

1. **Build the Docker image:**

   ```bash
   docker build -t mehedi213/mehedi-portfolio:latest .
   ```

2. **Login to Docker Hub:**

   ```bash
   docker login
   ```

3. **Push to Docker Hub:**
   ```bash
   docker push mehedi213/mehedi-portfolio:latest
   ```

## Running Locally

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

This will:

- Build the image if it doesn't exist
- Start the container on port 3000
- Enable automatic restart
- Include health checks

### Using Docker Run

```bash
docker run -d -p 3000:80 --name mehedi-portfolio mehedi213/mehedi-portfolio:latest
```

## Accessing Your Application

- **Local development:** http://localhost:3000
- **Docker Hub:** https://hub.docker.com/r/mehedi213/mehedi-portfolio

## Docker Image Details

- **Base Image:** Node.js 18 Alpine
- **Web Server:** Nginx
- **Port:** 80 (internal), 3000 (external)
- **Health Check:** Available at `/health`

## File Structure

```
├── Dockerfile          # Multi-stage Docker build
├── nginx.conf          # Nginx configuration
├── .dockerignore       # Files to exclude from build
├── docker-compose.yml  # Container orchestration
├── deploy.sh          # Bash deployment script
├── deploy.ps1         # PowerShell deployment script
└── DOCKER_README.md   # This file
```

## Build Process

The Docker build uses a multi-stage approach:

1. **Dependencies Stage:** Installs Node.js dependencies
2. **Builder Stage:** Builds the Next.js application with static export
3. **Runner Stage:** Uses Nginx to serve static files

## Environment Variables

No environment variables are required for this static build. If you need to add environment variables in the future, you can:

1. Add them to the Dockerfile
2. Use docker-compose environment section
3. Pass them via docker run -e flag

## Troubleshooting

### Common Issues

1. **Docker not running:**

   - Start Docker Desktop
   - Wait for it to fully initialize

2. **Build fails:**

   - Check if all dependencies are in package.json
   - Ensure Docker has enough memory allocated

3. **Port already in use:**

   - Change the port in docker-compose.yml
   - Or stop the existing container

4. **Login fails:**
   - Check your Docker Hub credentials
   - Ensure you have access to the repository

### Useful Commands

```bash
# View running containers
docker ps

# View logs
docker logs mehedi-portfolio

# Stop container
docker stop mehedi-portfolio

# Remove container
docker rm mehedi-portfolio

# Remove image
docker rmi mehedi213/mehedi-portfolio:latest

# Clean up unused resources
docker system prune
```

## Security Considerations

- The image uses Alpine Linux for a smaller attack surface
- Nginx is configured with security headers
- Static files are served with proper caching headers
- Health check endpoint is available for monitoring

## Performance Optimizations

- Multi-stage build reduces final image size
- Nginx serves static files efficiently
- Gzip compression is enabled
- Proper caching headers for static assets

## Next Steps

After successful deployment:

1. **Update your portfolio links** to point to the Docker Hub repository
2. **Set up automated builds** using GitHub Actions or similar CI/CD
3. **Monitor the application** using the health check endpoint
4. **Consider using Docker Hub automated builds** for continuous deployment

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review Docker and Nginx logs
3. Ensure all prerequisites are met
4. Verify your Docker Hub credentials

---

**Happy Deploying! 🚀**
