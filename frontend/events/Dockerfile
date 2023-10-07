# Builder container to compile TypeScript
FROM node:lts-alpine AS build
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

# Copy the application source
COPY . .
# Build TypeScript
RUN npm run build

# Snyk Docker scan
RUN npm install -g snyk
RUN snyk test

# Final image for serving the application
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/events /usr/share/nginx/html

EXPOSE 80
