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
COPY ./products/items ./products/items

# "lerna boostrap" will install all packages of items
RUN npx lerna bootstrap
# compile backend
RUN npm run build:items

EXPOSE 3001
CMD [ "npm", "--prefix", "products/items", "start" ]