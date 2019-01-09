FROM node:10.13.0-alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY package*.json ./

# Bundle app source
COPY . .

#RUN ls

RUN npm set unsafe-perm true
# Install
RUN npm install --only=production


EXPOSE 8080
CMD [ "npm", "start" ]

