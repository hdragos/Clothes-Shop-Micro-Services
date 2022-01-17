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
COPY ./products/blog ./products/blog

# "lerna boostrap" will install all packages of blog
RUN npx lerna bootstrap
# compile backend
RUN npm run build:blog

EXPOSE 3003 
CMD [ "npm", "--prefix", "products/blog", "start" ]