// This file was procedurally generated from the following sources:
// - src/assignment-target-type/logicalandexpression-logical-and-bitwiseorexpression-2.case
// - src/assignment-target-type/invalid/direct.template
/*---
description: Static Semantics AssignmentTargetType, Return invalid. (Direct assignment)
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment

    LogicalANDExpression: LogicalANDExpression && BitwiseORExpression
    Static Semantics AssignmentTargetType, Return invalid.

---*/

$DONOTEVALUATE();

function _() {
  true && false = 1;
}

