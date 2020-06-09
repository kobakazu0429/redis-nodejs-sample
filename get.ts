import * as Redis from "ioredis";

(async () => {
  const redis = new Redis();
  const pong = await redis.ping();
  console.log(pong); // => PONG

  redis.get("foo", function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(result); // Promise resolves to "bar"
    }
  });

  const res = await redis.zrange("sortedSet", 0, 2, "WITHSCORES");
  console.log(res);
  // Promise resolves to ["one", "1", "dos", "2", "three", "3"] as if the command was ` redis> ZRANGE sortedSet 0 2 WITHSCORES `

  redis.disconnect();
})();
