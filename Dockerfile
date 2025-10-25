FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod o+r -R /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80

