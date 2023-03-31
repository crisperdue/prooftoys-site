---
title: 1 - The natural numbers
menu: menu-docs.md
description: >
  Introducing the natural numbers
---

### About the natural numbers

> God created the integers; all else is the work of man. -- Leopold
> Kronecker

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
1. `NN (succ x) & NN (succ y) => x = y`
1. `P 0 & (P n => P (succ n)) => (NN x => P x)`

These are the axioms for the natural numbers, known as
the **Peano axioms** in honor of their discoverer.

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
Addition of natural numbers is defined by two basic facts about
addition:

- `NN x => x + 0 = x` --- adding zero has no effect
- `NN x => x + succ y = succ (x + y)` --- adding the next number

Proving some well-known properties of addition from these fundamental
properties will be your challenges, starting with this one, that `NN n
=> n + succ 0 = succ n`.

### First addition challenge

Can you figure this one out on your own?

*Hint:* start by selecting `n + succ 0` in the left (assumption) side
of the first step.  After that, selecting assumptions (in red) or
parts of assumptions that don't belong in the result should help you
get good suggestions from the proof builder Basic menu.

<div class=proof-editor data-exercise="nat/nat4"></div>

My proof of this has five steps: four plus the initial setup.

#### ➭ [***Next***]({{< relref "/number-game/tutorial4.md" >}})
