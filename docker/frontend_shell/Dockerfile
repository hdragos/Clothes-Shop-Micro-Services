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
COPY ./products/frontend_shell ./products/frontend_shell

# "lerna boostrap" will install all packages of frontend_shell
RUN npx lerna bootstrap
# compile backend
RUN npm run build:frontend_shell

EXPOSE 3000
CMD [ "npm", "--prefix", "products/frontend_shell", "start" ]