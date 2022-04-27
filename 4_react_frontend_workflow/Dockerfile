### 1. Build phase ###

# Specify base image
FROM node:16-alpine as builder

# Set user
USER node

# Set working directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Commands to run
COPY --chown=node:node package.json .
RUN npm install
COPY --chown=node:node . .
RUN npm run build



### 2. Run phase ###

# Specify base image
# NB: A new phase will automatically start when a new base image is specified
FROM nginx

# Commands to run
COPY --from=builder /home/node/app/build /usr/share/nginx/html

# Commands to execute upon boot
# NB: Not "CMD" commands necessary, since NGINX will automatically run and any
# content in the /usr/share/nginx/html folder will be served up by NGINX upon boot