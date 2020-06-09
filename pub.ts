import * as Redis from "ioredis";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const pub = new Redis();

(async () => {
  while (true) {
    pub.publish("time", `Hello world! at ${new Date()}`);
    pub.publish("text", "------------------------------");

    await sleep(1500);
  }
})();
