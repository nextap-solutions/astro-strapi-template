FROM docker.io/library/node:18

WORKDIR /app
ENV NX_DEAMON=false

COPY ./ .
RUN rm -r ./apps/cms

RUN yarn global add node-gyp
RUN yarn
RUN yarn --cwd ./apps/web build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["yarn", "nx", "run", "web:serve:production", "--host"]
