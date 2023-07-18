// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  When it returns a promise, the async context snapshot when the promise
  resolves will not be the one inside of the callback.
info: |
  TODO
flags: [async]
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

let resolve;

asyncVar.run("foo", async () => {
  assert.sameValue(asyncVar.get(), "foo");

  await new Promise(resolveFn => {
    resolve = resolveFn;
  });

  assert.sameValue(asyncVar.get(), "foo");
}).then(() => {
  assert.sameValue(asyncVar.get(), undefined);
}).then($DONE, $DONE);

resolve();