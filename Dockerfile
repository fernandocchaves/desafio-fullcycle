FROM node:10-slim
USER node
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json .
RUN npm install
COPY --chown=node . .

RUN npm run build
COPY --chown=node ./src/templates ./dist/templates

CMD ["npm", "run", "start:prod"]