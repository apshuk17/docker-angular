# Base image download
FROM node:10-alpine as builder

WORKDIR  /app

# Install dependencies
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html