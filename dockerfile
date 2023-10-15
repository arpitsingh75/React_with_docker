# fetch latest node image on alpine
From node:alpine AS development

# Declaring dev env
ENV NODE_ENV development

# working directory
WORKDIR /react-app

# copy package.json, and install dependencies
COPY ./package.json ./react-app

RUN npm install

# Starting app
CMD npm start