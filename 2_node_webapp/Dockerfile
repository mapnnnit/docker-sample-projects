# What base image to use
FROM node:14-alpine

# Set working directory
WORKDIR /usr/app

# Install dependencies
COPY ./package.json .
RUN npm install
COPY . .

# Run default commands
CMD ["npm", "start"]