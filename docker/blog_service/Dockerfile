FROM node:14-alpine

# # Create app directory
ENV APP_PATH /clothes-store-micro-services
WORKDIR $APP_PATH

# Copy package*.json and lerna.json to /clothes-store-micro-services
COPY ./package*.json ./
COPY ./lerna.json ./

# install lerna local
RUN npm install

# Bundle app source
COPY ./products/blog_service ./products/blog_service

# "lerna boostrap" will install all packages of blog_service
RUN npx lerna bootstrap
# compile backend
RUN npm run build:blog_service

EXPOSE 8002
CMD [ "npm", "--prefix", "products/blog_service", "start" ]