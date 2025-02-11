// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: >
  NanosecondsToDays can loop infinitely.
info: |
  NanosecondsToDays ( nanoseconds, relativeTo )

  ...
  18. Repeat, while done is false,
    a. Let oneDayFartherNs be ℝ(? AddZonedDateTime(ℤ(intermediateNs), relativeTo.[[TimeZone]],
       relativeTo.[[Calendar]], 0, 0, 0, sign, 0, 0, 0, 0, 0, 0)).
    b. Set dayLengthNs to oneDayFartherNs - intermediateNs.
    c. If (nanoseconds - dayLengthNs) × sign ≥ 0, then
        i. Set nanoseconds to nanoseconds - dayLengthNs.
        ii. Set intermediateNs to oneDayFartherNs.
        iii. Set days to days + sign.
    d. Else,
        i. Set done to true.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calls = [];
const dayLengthNs = 86400000000000n;
const other = new Temporal.ZonedDateTime(dayLengthNs, "UTC", "iso8601");

function createRelativeTo(count) {
  const dayInstant = new Temporal.Instant(dayLengthNs);
  const substitutions = [];
  const timeZone = new Temporal.TimeZone("UTC");
  // Return constant value for first _count_ calls
  TemporalHelpers.substituteMethod(
    timeZone,
    "getPossibleInstantsFor",
    substitutions
  );
  substitutions.length = count;
  let i = 0;
  for (i = 0; i < substitutions.length; i++) {
    // (this value)
    substitutions[i] = [dayInstant];
  }
  // Record calls in calls[]
  TemporalHelpers.observeMethod(calls, timeZone, "getPossibleInstantsFor");
  return new Temporal.ZonedDateTime(0n, timeZone);
}

let zdt = createRelativeTo(200);
calls.splice(0); // Reset calls list after ZonedDateTime construction
zdt.until(other, {
  largestUnit: "day",
});
assert.sameValue(
  calls.length,
  200 + 1,
  "Expected ZonedDateTime.until to call getPossibleInstantsFor correct number of times"
);

zdt = createRelativeTo(300);
calls.splice(0); // Reset calls list after previous loop + ZonedDateTime construction
zdt.until(other, {
  largestUnit: "day",
});
assert.sameValue(
  calls.length,
  300 + 1,
  "Expected ZonedDateTime.until to call getPossibleInstantsFor correct number of times"
);
