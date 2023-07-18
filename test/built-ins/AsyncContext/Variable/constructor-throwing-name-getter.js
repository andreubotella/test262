// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
    The AsyncContext.Variable constructor throws when passed an options bag
    whose `name` getter throws.
info: |
  AsyncContext.Variable ( options )

  4. If options is an Object, then
    a. Let namePresent be ? HasProperty(options, "name").
    b. If namePresent is true, then
        i. Let name be ? Get(options, "name").
        ...
features: [AsyncContext]
---*/

function CustomError() { }

const options = {
  get name() {
    throw new CustomError();
  }
};

assert.throws(CustomError, () => {
  new AsyncContext.Variable(options);
});