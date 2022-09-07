FROM node:18-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

FROM node:18-alpine AS build
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]