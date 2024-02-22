// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.yearofweek
description: >
  In the ISO 8601 week calendar, calendar week number 1 of a calendar year is 
  the week including the first Thursday of that year (based on the principle 
  that a week belongs to the same calendar year as the majority of its calendar 
  days). Because of this, some calendar days of the first calendar week of a 
  calendar year may be part of the preceding date calendar year, and some 
  calendar days of the last calendar week of a calendar year may be part of
  the next calendar year.
features: [Temporal]
---*/

// 

let calendar = new Temporal.Calendar("gregory");
const date = new Temporal.PlainDateTime(2021, 1, 1, 12, 34, 56, 987, 654, 321, calendar);

assert.sameValue(date.yearOfWeek, 2021);

calendar = new Temporal.Calendar("iso8601");
const isodate = new Temporal.PlainDateTime(2021, 1, 1, 12, 34, 56, 987, 654, 321, calendar);

assert.sameValue(isodate.yearOfWeek, 2020);
