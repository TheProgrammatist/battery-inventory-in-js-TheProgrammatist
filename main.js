const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthy = 0, exchange = 0, failed = 0;

  for (let i = 0; i < presentCapacities.length; i++) {
    let batteryHealth = (100 * presentCapacities[i]) / 120;

    if (batteryHealth >= 83) {
      healthy++;
    } else if (batteryHealth >= 63 && batteryHealth < 83) {
      exchange++;
    } else {
      failed++;
    }
  }
  return {
    healthy,
    exchange,
    failed
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
