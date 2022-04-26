# Select the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Files to copy / commands to run
COPY package.json .
RUN npm install
COPY . .

# Commands to execute upon running the container
CMD ["npm", "start"]