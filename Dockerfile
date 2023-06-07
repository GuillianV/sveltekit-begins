FROM node:18-alpine AS build


WORKDIR /app 
COPY . .
RUN yarn
RUN yarn build

FROM node:18-alpine AS deploy-node
WORKDIR /app 
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build-node .
RUN yarn install @prisma/cli --save-dev && yarn prisma generate
CMD ["node", "index.js"]