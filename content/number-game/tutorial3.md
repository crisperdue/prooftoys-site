---
title: 1 - The natural numbers
menu: menu-docs.md
description: >
  Introducing the natural numbers
---

### The natural numbers

The natural numbers have just two building blocks: the initial number
0, and a successor function that gives the next natural number.
*(Back in history, when the natural numbers were first defined, the
number one was treated as the first natural number.  Now zero is more
often used.  You may say that it's a modern success story --- we start
with nothing and work our way up to everything!)*

We call the natural numbers `NN`, except sometimes in plain text where
they appear as `\NN`.  `NN x` means that x is a natural number.  The
natural numbers are characterized by five properties:

1. `NN 0`
1. `NN x => NN (succ x)`
1. `NN x => 0 != succ x`
1. `NN (succ x) & NN (succ y) => x = y`
1. `P 0 & (P n => P (succ n)) => (NN x => P x)`

In other words:

1. Zero is a natural number.
1. The successor of a natural number is also a natural number.
1. Zero is the first natural number.
1. If two natural numbers have the same successor, then we know
   they are actually the same.
1. (The induction property) Given a property P, if zero has the
   property, and whenever something has the property its successor
   also has the property, then all natural numbers have the property.

### Introducing addition

Addition of natural numbers is defined by three basic facts in
addition to the ones listed above:

3. `NN x & NN y => NN (x + y)` --- the sum will be another natural number
1. `NN x => x + 0 = x` --- adding zero has no effect
2. `NN x => x + succ y = succ (x + y)` --- adding the next number

Proving the other properties of addition from these fundamental
properties will be your challenges, starting with this one, that `NN n
=> n + succ 0 = succ n`.

<div class=proof-editor data-exercise="nat/nat4"></div>

Can you figure this one out on your own?  Hint: start by selecting
`n + succ 0` in the left (assumption) side of the first step.
After that, selecting assumptions (in red) that you don't want
should help you get good suggestions from the proof builder
Basic menu.

#### ➭ [***Next***]({{< relref "/number-game/tutorial4.md" >}})
