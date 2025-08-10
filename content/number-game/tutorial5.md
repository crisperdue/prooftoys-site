---
title: 3 - Associativity
menus:
  - menu-tut.md
description: >
  Addition is associative.
---

# Associativity of addition

> I refuse to join any club that would have me as a member.
> -- Groucho Marx

## What it's all about

Associativity is a key property of addition.  Associativity of an
operation such as `+` is the property that `(x + y) + z = x + (y +
z)`.  In other words, the same result comes from adding `z` to the sum
of `x` and `y`, or adding the sum of `y` and `z` to `x`.  You will
want to remember that Prooftoys always reads `x + y + z` as `(x + y) +
z`, and similarly for other binary operators as well.

This fact is especially important and useful when combined with the
next one you will prove, `x + y = y + x` (commutativity).

### Proof hints

***Starting the proof.*** Since addition was defined by recursion on the
rightmost variable, you will want to use induction on that variable to
prove the property.

***Key ideas.*** The fact of logic that `a = b => (f a = f b == T)` is
key for proofs by induction such as this one, with `f` being `succ`; in
other words `a = b => (succ a = succ b == T)`.

After you set up for a proof by induction, choose the contents of the
`forall{n. ... }`as a subgoal:

`x + y + n = x + (y + n) => x + y + succ n = x + (y + succ n)`

Select it in the proof builder and use the menu to make a subgoal of it.

You will want to transform the *conclusion* part of the subgoal to be
`succ (x + y + n) = succ (x + (y + n))`, and to do that, you will need
to move the occurrences of `succ` outside the `+`'s.  Once that is done,
you will be able to replace the result with `T` for true, and
eliminate it from the assumptions.

<div class=proof-editor data-exercise="nat/add2"></div>

***Tip:*** The proofs are getting a bit longer, and you might like to be
able to see more at one time.  If your screen is large enough you might
wish to expand your view of the proof in progress, and you can easily do
this.  In the corner of the viewer, at the bottom of the scrollbar is a
little widget you can drag down to expand the view.

If you checked carefully, you might have noticed that this proof uses
the fact `NN a & NN b => NN (a + b)`, which you have not proved to be
true.  You can take a [***Side Trip***]({{< relref
"/number-game/tutorial7.5.md" >}}) to prove it for yourself.  Or bypass
it and continue on.

#### ➭ [***Next***]({{< relref "/number-game/tutorial7.md" >}})

<!-- How to approach the idea that there are more advanced topics and
some extensions of the key ideas, yet the core is still the same?  -->
