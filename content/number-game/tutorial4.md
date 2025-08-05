---
title: 2 - Adding to zero
menus:
  - menu-tut.md
description: >
  A first induction proof
---

### A first induction proof: adding to zero

> Why is a ham sandwich better than paradise?  (answer at the
> bottom of the page)

The math challenge here is to prove that `NN n => 0 + n = n` -- that
the result of adding any natural number `n` to 0 is `n`.  We will do
this by proving that 

*But hold on: didn't we already know that `n + 0 = n`?* Yes,
we did, but the question now is adding n to zero.  Remember that a
proof of `x + y = y + x` is still in the future, so we can't just swap
the `n` and the 0.

Because this is the first use of the principle of induction, we will
go through this proof in detail and take the training wheels off for the
next mission.

<div class=proof-editor data-exercise="nat/add1"></div>

#### Setting up the induction proof

To start this proof by induction, select the assumption in the first step,
that `0 + n = n`, and in the Basic menu choose "induction on n".  This
creates a second step which comes from the axiom of induction for the
natural numbers.

`[2] ((0 + n = n) => (0 + succ n = succ n)) & NN n & 0 + 0 = 0 => 0 + n = n`

This step adds two assumptions that will have to be proved true to get
the desired result.  One of these is `0 + 0 = 0`.  This says that when
`n` is 0, it has the property that `0 + n = n`.  It is known as the
**base case**.

The other added assumption is `forall {n NN n & 0 + n = n => 0 + succ
n = succ n`).  In other words, if the property is true for a number
`n`, it is true for `succ n`, the next number after `n`.  This is
known as the **inductive case**.

Many basic properties of the natural numbers are proved by induction,
and this setup step will be our standard way to start induction proofs.

#### The proof

We will prove the goal statement by proving that the *base case* and
the *inductive case* are both true.  Since they are known to be true,
they can be dropped from the assumptions, giving us our goal.

You might choose to prove the *base case* (`0 + 0 = 0`) first, to get
it out of the way.  If you select that whole assumption and ask for
simplification, that will take care of it.

The *inductive case* has its own proof, which starts by turning it
into a subgoal.  (Creating a subgoal for the inductive case is usual
in inductive proofs.)  Any statement made this way is definitely true.

In the assumptions of the subgoal, you can change the part `0 + succ
n` to `succ (0 + n)` and then use the assumption that `0 + n = n`
to change `succ (0 + n)` to `succ n`.  From here, simplification does
the cleanups to prove the inductive case.

Look back at the step before you made the subgoal.  The inductive case
in this step is now proved true, so select that part.  Use the menu to
replace that inductive case with `T`, make sure the result is
simplified, and the proof will be complete.

> Why is a ham sandwich better than paradise?<br><br>
> Well, nothing is better than paradise, right?
> But a ham sandwich is better than nothing.<br><br>
> Therefore . . .

#### ➭ [***Next***]({{< relref "/number-game/tutorial5.md" >}})
