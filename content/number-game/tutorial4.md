---
title: 2 - Adding to zero
menus:
  - menu-tut.md
menu: menu-docs.md
description: >
  A first induction proof
---

### A first induction proof: adding to zero

> Why is a ham sandwich is better than paradise?  (answer at the
> bottom of the page)

The math challenge here is to prove that `NN n => 0 + n = n`.

*But hold on: didn't we already know that `n + 0 = n`?* Yes,
we did, but the question now is adding n to zero.  Remember that a
proof of `x + y = y + x` is still in the future, so we can't just swap
the `n` and the 0.

This is the first time you will need the principle of induction.  We
will go through this one with pretty explicit instructions, and take
the training wheels off for the next mission.

<div class=proof-editor data-exercise="nat/add1"></div>

#### Setting up the induction proof

To start this proof by induction, select the assumption in the first step,
that `0 + n = n`, and in the Basic menu choose "induction on n".  This
creates a second step which comes from the axiom of induction for the
natural numbers.

`[2] ((0 + n = n) => (0 + succ n = succ n)) & NN n & 0 + 0 = 0 => 0 + n = n`

This step has three assumptions.  One is that `NN n`.

Another is the **base case**, the assumption that `0 + 0 = 0`.  It
states that the desired property is true when `n = 0`.

And the last is the **inductive case**, `0 + n = n => 0 + succ n =
succ n` --- that whenever the property is true for `n`, it is true for
`succ n`.

Many basic properties of the natural numbers are proved by induction,
and this will be our standard way to start induction proofs.

#### Proving it

I suggest proving the *base case* (`0 + 0 = 0`) first, to get it out
of the way.  Select `0 + 0` and replace it with `0`; then select `0 =
0` and replace it with `T`.

In the inductive case of this proof, if you change the part `0 + succ
n = succ n` to `succ (0 + n) = succ n`, you will have a statement of
the form `x = y => succ x = succ y`, with `x` being `0 + n` and `y`
being `n`.

You need to transform `0 + succ n` into `succ (0 + n)`, so try
selecting the `0 + succ n`.  The Basic menu should offer you the
transformation you need.  With that done, in the next step select the
whole conditional assumption, and using the Basic menu you should be
able to immediately show that it is true.

If this leaves one more undesired assumption, that `NN 0` is true,
prove it using the Basic menu, and you should see confirmation that
the proof is now complete!

#### A bit of theory (optional)

**How does Prooftoys come up with the steps labeled as "set up
induction"?**  Look at that step in this proof.  It should have
two assumptions like this:

`x + 0 = 0 + x`, and `((x + n = n + x) ⇒ (x + succ n = succ n + x))`

The axiom of induction is:

`P 0 & (P n => P (succ n)) => (NN x => P x)`

Defining the function `P` as:

`P n == x + n = n + x`

`P 0` is `x + 0 = 0 + x`.

Also `P n` is `x + n = n + x`, and `P (succ n)` is `x + succ n = succ
n + x`.

This is the idea behind the setup of an induction proof.

> Why is a ham sandwich better than paradise?<br>
> Well, nothing is better than paradise, right?
> But a ham sandwich is better than nothing.
> Therefore . . .

#### ➭ [***Next***]({{< relref "/number-game/tutorial5.md" >}})
