FROM docker.io/library/node:16

RUN yarn global add pm2

WORKDIR /app
ENV NX_DEAMON=false

COPY . .

RUN yarn && \
    yarn nx build cms --configuration=production && \
    yarn nx build astro --configuration=production 

CMD ["pm2-runtime", "docker/pm2.yml"]
