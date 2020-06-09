import * as Redis from "ioredis";

(async () => {
  const redis = new Redis();
  const pong = await redis.ping();
  console.log(pong); // => PONG

  const result1 = await redis.set("foo", "bar"); // returns promise which resolves to string, "OK"
  console.log(result1);

  const result2 = redis.zadd(
    "sortedSet",
    1,
    "one",
    2,
    "dos",
    4,
    "quatro",
    3,
    "three"
  );
  console.log(result2);

  redis.disconnect();
})();
