# Use existing image as base.
FROM alpine:latest

# Download and install dependency.
RUN apk add --update gcc
RUN apk add --update redis

# Command to execute when image boots up.
CMD ["redis-server"]