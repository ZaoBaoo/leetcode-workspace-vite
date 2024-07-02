// https://leetcode.com/problems/sleep/

async function sleep(millis: number): Promise<void> {
  return new Promise((resolve, _) => setTimeout(resolve, millis));
}

sleep(2000).then(() => console.log(123));

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
