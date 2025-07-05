#!/bin/bash

# Configuration
DOCKER_USERNAME="mehedi213"
IMAGE_NAME="mehedi-portfolio"
TAG="latest"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting Docker build and deployment process...${NC}"

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker and try again.${NC}"
    exit 1
fi

# Build the Docker image
echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -t ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG} .

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Docker build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker image built successfully!${NC}"

# Tag the image
echo -e "${YELLOW}🏷️  Tagging image...${NC}"
docker tag ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG} ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}

# Login to Docker Hub
echo -e "${YELLOW}🔐 Logging in to Docker Hub...${NC}"
docker login

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Docker Hub login failed!${NC}"
    exit 1
fi

# Push the image to Docker Hub
echo -e "${YELLOW}📤 Pushing image to Docker Hub...${NC}"
docker push ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to push image to Docker Hub!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Successfully pushed image to Docker Hub!${NC}"
echo -e "${GREEN}🎉 Your image is now available at: https://hub.docker.com/r/${DOCKER_USERNAME}/${IMAGE_NAME}${NC}"

# Optional: Run the container locally
read -p "Do you want to run the container locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🐳 Running container locally on port 3000...${NC}"
    docker run -d -p 3000:80 --name ${IMAGE_NAME}-local ${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}
    echo -e "${GREEN}✅ Container is running! Visit http://localhost:3000${NC}"
fi

echo -e "${GREEN}🎊 Deployment completed successfully!${NC}"