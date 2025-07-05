# Configuration
$DOCKER_USERNAME = "mehedi213"
$IMAGE_NAME = "mehedi-portfolio"
$TAG = "latest"

Write-Host "🚀 Starting Docker build and deployment process..." -ForegroundColor Yellow

# Check if Docker is running
try {
    docker info | Out-Null
} catch {
    Write-Host "❌ Docker is not running. Please start Docker and try again." -ForegroundColor Red
    exit 1
}

# Build the Docker image
Write-Host "📦 Building Docker image..." -ForegroundColor Yellow
docker build -t ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG} .

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Docker build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Docker image built successfully!" -ForegroundColor Green

# Tag the image
Write-Host "🏷️  Tagging image..." -ForegroundColor Yellow
docker tag ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG} ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}

# Login to Docker Hub
Write-Host "🔐 Logging in to Docker Hub..." -ForegroundColor Yellow
docker login

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Docker Hub login failed!" -ForegroundColor Red
    exit 1
}

# Push the image to Docker Hub
Write-Host "📤 Pushing image to Docker Hub..." -ForegroundColor Yellow
docker push ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push image to Docker Hub!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Successfully pushed image to Docker Hub!" -ForegroundColor Green
Write-Host "🎉 Your image is now available at: https://hub.docker.com/r/${DOCKER_USERNAME}/${IMAGE_NAME}" -ForegroundColor Green

# Optional: Run the container locally
$runLocally = Read-Host "Do you want to run the container locally? (y/n)"
if ($runLocally -eq "y" -or $runLocally -eq "Y") {
    Write-Host "🐳 Running container locally on port 3000..." -ForegroundColor Yellow
    docker run -d -p 3000:80 --name ${IMAGE_NAME}-local ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}
    Write-Host "✅ Container is running! Visit http://localhost:3000" -ForegroundColor Green
}

Write-Host "🎊 Deployment completed successfully!" -ForegroundColor Green