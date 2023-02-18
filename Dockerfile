# Use the official Node.js image as the base image
FROM node:16.19.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file to the container
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 4200 for Angular development server
EXPOSE 4200

# Command to start the Angular development server
CMD [ "npm", "start" ]
