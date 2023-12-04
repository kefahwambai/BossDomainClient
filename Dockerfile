FROM alpine:3.17

RUN apk --no-cache add nodejs npm

COPY . /bossdomain
WORKDIR /bossdomain
RUN npm install

CMD ["npm", "start"]