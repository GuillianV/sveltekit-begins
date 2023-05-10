FROM node:18-alpine AS build

ENV PORT=8080
WORKDIR /app 
COPY . .
RUN yarn
RUN yarn build

FROM node:18-alpine AS deploy-node
ENV PORT=8080
WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build-node .
CMD ["node", "index.js"]