# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /qp-assessment
COPY . .
RUN npm install
CMD ["node", "app.js"]
EXPOSE 3001