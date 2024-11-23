# Use official Node.js 20 image based on Alpine as the base image
FROM node:20-alpine as build

# Set environment variables
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

# Set the working directory in the container
WORKDIR /app

# Install dependencies to build native modules (if necessary)
# RUN apk add --no-cache \
#     python3 \
#     make \
#     g++ \
#     bash

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install dependencies (only production dependencies for final image)
RUN npm install --production

# Copy application source code
COPY . .

# Build the application (if necessary)
# RUN npm run build

# Remove build dependencies to reduce image size (if necessary)
# RUN apk del python3 make g++

# Run the application as a non-root user
USER node

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]

# Specify the healthcheck
HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1
