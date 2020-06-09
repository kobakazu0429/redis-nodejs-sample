import * as Redis from "ioredis";

const redis = new Redis();

redis.subscribe("time", "text");

redis.on("message", function (channel, message) {
  console.log("Receive message %s from channel %s", message, channel);
});
