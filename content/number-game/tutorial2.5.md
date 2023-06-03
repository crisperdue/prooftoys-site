---
title: Forward proof
menus:
  - menu-tut.md
description: >
  Working forward
---

### Working forward

The Natural Numbers Game tutorial emphasizes working "backward" from a
goal.  Forward proofs start from axioms, known theorems, or
assumptions and focus on producing the conclusion of the goal.
Textbook proofs are usually presented this way.

This proof works forward from assumptions.  It uses variables `x`,
`y`, and `z`, with a function `f`.  Your mission this time is to
combine the two function calls into a single expression `f (f x)`.

As before, there are two assumptions: `y = f x` and `z = f y`.

<div class=proof-editor data-exercise="nat/nat0.3"
 data-steps="(1 assumeExplicitly (t (y = f x & z = f y)))">
</div>

It can be convenient to have all of the planned assumptions available
throughout the proof, so the initial step has the planned assumptions
as the initial conclusion, making it a true statement.

The variable `y` is assumed equal to `f x`, so we can replace its
occurrence in the conclusion.  Then the `y = f x` is not needed in the
conclusion, and it can be replaced by `T` because it is assumed.
Prooftoys has convenient commands ("*tactics*") for using assumptions
of the current step in these ways.

#### ➭ [***Back to the main track***]({{< relref "/number-game/tutorial3.md" >}})

