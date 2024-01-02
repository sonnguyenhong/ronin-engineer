# Use a base image with Node.js for building frontend
FROM node:latest as build

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all frontend application files to the container
COPY . .

# Build the frontend application
RUN npm run build

# Use a separate stage for production-ready image
FROM nginx:latest

# Copy the built frontend files from the build stage to the nginx server's default directory to serve static files
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the application
EXPOSE 80

# Start the nginx server with daemon off mode
CMD ["nginx", "-g", "daemon off;"]