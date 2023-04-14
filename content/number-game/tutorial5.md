---
title: 3 - Associativity
menus:
  - menu-tut.md
description: >
  Addition is associative.
---

### Associativity of addition

> I refuse to join any club that would have me as a member.
> -- Groucho Marx

#### What it's all about

Associativity is a key property of addition.  Associativity of an
operation such as `+` is the property that `(x + y) + z = x + (y +
z)`.  In other words, the same result comes from adding `z` to the sum
of `x` and `y`, or adding the sum of `y` and `z` to `x`.  You will
want to remember that Prooftoys always reads `x + y + z` as `(x + y) +
z`, and similarly for other binary operators as well.

This fact is especially important and useful when combined with the
next one you will prove, `x + y = y + x` (commutativity).

#### The proof

*Proof hint:* since addition was defined by recursion on the rightmost
variable, you will want to use induction on that variable to prove the
property.

*Further hint:* to use the fact that `(a = b => f a = f b) == T`, you
will want `f` to be `succ`.  The conclusion (right side) of the big
conditional that comes out of the induction setup:

`x + y + n = x + (y + n) => x + y + succ n = x + (y + succ n)`

will need to become `succ (x + y + n) = succ (x + y + n)`, so you would
like to move the occurrences of `succ` outside the `+`'s.

<div class=proof-editor data-exercise="nat/add2"></div>

*Tip:* The proofs are getting a bit longer, and you might like to be
able to see more at one time.  If your screen is large enough you
might wish to expand your view of the proof in progress, and you can
easily do this.  In the corner of the viewer, at the bottom of the
scrollbar is a little widget you can drag down to expand the view.

#### A golden key to induction proofs

Most of the induction proofs we will encounter have one key step that
is basically the same for all of them.  That step uses the fact that
`(x = y => f x = f y) == T` --- a fundamental fact about functions.
If you have two variables with equal values and apply the same
function to both of them, the results are equal.

So if you have an assumption of the form `x = y => succ x = succ y`,
you can replace it with `T`.  Remember that any terms can take the
places of `x` and `y` here, not just other variables.

*Side trip (optional):* If you checked carefully, you might have
noticed that this proof uses the fact `NN a & NN b => NN (a + b)`,
which you have not proved to be true.  You can take this [***Side
Trip***]({{< relref "/number-game/tutorial7.5.md" >}}) to prove it for
yourself.

#### ➭ [***Next***]({{< relref "/number-game/tutorial7.md" >}})

<!-- How to approach the idea that there are more advanced topics and
some extensions of the key ideas, yet the core is still the same?  -->
