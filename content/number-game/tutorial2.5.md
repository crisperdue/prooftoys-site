---
title: Forward proof
menus:
  - menu-tut.md
description: >
  Working forward
---

### Working forward

This proof uses variables `x`, `y`, and `z`, with a function `f`.
Your mission this time is to combine the two function calls into
a single expression.

As before, the fact to be proved has two assumptions: `y = f x` and `z
= f y`.  Forward proofs start from the assumptions and focus
on transforming the conclusion into the conclusion of the goal.

<div class=proof-editor data-exercise="nat/nat0.3"
 data-steps="(1 assumeExplicitly (t (y = f x & z = f y)))">
</div>

It can be convenient to have all of the planned assumptions available
throughout the proof, so the initial step has the planned assumptions
as the initial conclusion, makeing it a true statement.

The variable `y` is assumed equal to `f x`, so we can replace its
occurrence in the conclusion.  Then the `y = f x` is no longer needed
in the conclusion, and it can be replaced by `T` because it is
assumed.  Prooftoys makes it convenient to use assumptions of the
current step in these ways.

#### ➭ [***Back to the main track***]({{< relref "/number-game/tutorial3.md" >}})

