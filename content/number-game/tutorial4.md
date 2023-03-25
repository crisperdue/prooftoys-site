---
title: 2 - Adding to zero
menu: menu-docs.md
description: >
  A first induction proof
---

### A first induction proof: adding to zero

Your next challenge is to prove that `NN n => 0 + n = n`.

*But wait a minute -- didn't we already know that `n + 0 = n`?* Yes,
we did, but the question now is adding n to zero.  Remember that a
proof of `x + y = y + x` is still in the future, so we can't just swap
the `n` and the 0.

This is the first challenge that needs the principle of induction.  We
will go through this one with pretty explicit instructions, and take
the training wheels off for the next mission.

<div class=proof-editor data-exercise="nat/add1"></div>

To prove this by induction, select the assumption in the first step,
that `0 + n = n`, and in the Basic menu choose "induction on n".  This
creates a second step which comes from the axiom of induction for the
natural numbers.

`[2] ((0 + n = n) ⇒ (0 + succ n = succ n)) ∧ NN n ∧ 0 + 0 = 0 ⇒ 0 + n = n`

This step has three assumptions.  One is that `NN n`.  One is the
"base case", that the desired property is true for zero.  And the last
is the "inductive case", `0 + n = n => 0 + succ n = succ n` --- that
whenever the property is true for `n`, it is true for `succ n`.

#### A golden key to induction proofs

Most of the induction proofs we will encounter have one key step that
is basically the same for all of them.  That step uses the fact that
`(x = y => f x = f y) == T` --- a fundamental fact about functions.
If you have two variables with equal values and apply the same
function to both of them, the results are equal.

So if you have an assumption of the form `x = y => succ x = succ y`,
you can replace it with T.  Remember that any terms can take the
places of `x` and `y` here, not just other variables.

#### Turning the key

In the inductive case of this proof, if you change the part `0 + succ
n = succ n` to `succ (0 + n) = succ n`, you will have a statement of
the form `x = y => succ x = succ y`, with `x` being `0 + n` and `y`
being `n`.

You need to transform `0 + succ n` into `succ (0 + n)`, so try
selecting the `0 + succ n`.  The Basic menu should offer you the
transformation you need.  With that done, in the next step select the
whole conditional assumption, and using the Basic menu you should be
able to immediately show that the whole conditional is true.

Just to eliminate some assumptions right away, I suggest proving the
base case first.  (Select `0 + 0` and reduce it to just `0`, then
select `0 = 0` and reduce it to `T`.)

If this leaves one more undesired assumption, that `NN 0` is true,
prove it using the Basic menu, and you should see confirmation that
the proof is now complete!

#### ➭ [***Next***]({{< relref "/number-game/tutorial5.md" >}})
