---
title: 1 - The natural numbers
menus:
  - menu-tut.md
description: >
  Introducing the natural numbers
---

## Properties of the natural numbers

> God created the integers; all else is the work of man. -- Leopold
> Kronecker

### Axioms

The natural numbers have just two building blocks: the initial number
0, and a successor function that gives the next natural number.
*(Back in history, when the natural numbers were first defined, the
number one was treated as the first natural number.  Now zero is more
often used.  You may say that it's a modern success story --- we start
with nothing and work our way up to everything!)*

We call the natural numbers `NN`, except sometimes in plain text we
write `\NN`.  `NN x` means that x is a natural number.  For proving
things about the natural numbers you have five fundamental facts in
your toolbox to use at any time:

1. `NN 0`
1. `NN x => NN (succ x)`
1. `NN x => 0 != succ x`
1. `NN n & NN m & succ m = succ n => m = n`
1. `P 0 & forall {n. NN n & P n => P (succ n)} => (NN x => P x)`

These are the standard axioms for the natural numbers, known as the
**Peano axioms** in honor of their discoverer, [Giuseppe
Peano](https://en.wikipedia.org/wiki/Giuseppe_Peano).

Stated in English they are that:

1. Zero is a natural number.
1. The successor of a natural number is also a natural number.
1. Zero is the first natural number.
1. If two natural numbers have the same successor, then we know
   they are actually the same.
1. (The induction property) Given a property P, if zero has the
   property, and whenever something has the property its successor
   also has the property, then all natural numbers have the property.

### Introducing addition

It may seem odd to talk about numbers without the concept of addition.
We define addition of natural numbers with two basic facts about
addition:

- `NN x => x + 0 = x` --- adding zero to a number gives the same number back
- `NN x & NN y => x + succ y = succ (x + y)` --- adding the next number

Proving some well-known properties of addition from these fundamental
properties will be your challenges.

### A property of addition

The first property we will prove about addition is that `NN n => n +
succ 0 = succ n`.

*How to:* start by selecting `n + succ 0` in the left (assumption)
side of the first step, and convert it to `succ (n + 0)`.  After that,
simplifying the assumptions will get the needed result.

<div class=proof-editor data-exercise="nat/nat4"></div>

If you wish, all of the simplification can be done with a single step.

### Why do some proof steps use `(x = x) == T`?

You may already be noticing proof steps with descriptions such as "use
`(x = x) == T`", or that otherwise contain `== T`.  What are these
about? And why doesn't Prooftoys just use `x = x` instead?  For
example the fact `NN 0` is used in this proof to replace `NN 0` with
T.

The difference is in the policies Prooftoys uses in applying facts for
rewriting.  These policies ensure that a request to rewrite a specific
term with a specific fact is never ambiguous.  If the fact is either
an equation such as `x = x` or a conditional equation such as `NN
(succ x) & NN (succ y) => x = y`, rewriting matches the left side of
that equation to do the rewriting.

If the step is neither of these, Prooftoys internally converts it to
an equation.  For example it converts `NN x => NN (succ x)` to `NN x
=> NN (succ x) == T`, and `NN 0` becomes `NN 0 == T`.

#### ➭ [***Next***]({{< relref "/number-game/tutorial4.md" >}})
