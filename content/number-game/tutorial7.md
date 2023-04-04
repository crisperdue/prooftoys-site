---
title: 4 - Commutativity
menu: menu-docs.md
description: >
  Commutativity of addition
---

### Commutativity of addition

> When I'm working on a problem, I never think about beauty.  I think
> only how to solve the problem. But when I have finished, if the
> solution is not beautiful, I know it is wrong. -- Buckminster Fuller

Another very important property of addition of natural numbers is that
`x + y = y + x`.  Combined with associativity, this means that you can
add together a whole set of numbers in any order and get the same
result.  For example when you check out the grocery store, it doesn't
matter what order the clerk uses when adding up the bill.

To prove this, you will need a "helper" fact: `succ x + y = succ (x +
y)`.  In this proof the helper fact contributes to setting up the
assumption that `(x + n = n + x) => (succ (x + n) = succ (n + x)`,
which is the key step in the induction proof.

The helper is available to you here, but you can prove it for yourself
with this [**Side Trip**]({{< relref "/number-game/tutorial6.md" >}}).

<div class=proof-editor data-exercise="nat/add4"></div>

#### A bit of theory

**How does Prooftoys come up with the steps labeled as "set up
induction"?**  Look at that step in this proof.  It should have
two assumptions like this:

`x + 0 = 0 + x`, and `((x + n = n + x) ⇒ (x + succ n = succ n + x))`

The axiom of induction is:

`P 0 & (P n => P (succ n)) => (NN x => P x)`

So suppose a function `P` is defined as:

`P n == x + n = n + x`

Then `P 0` is `x + 0 = 0 + x`.

Also `P n` is `x + n = n + x`, and `P (succ n)` is `x + succ n = succ
n + x`.

This is the idea behind the setup of an induction proof.

#### ➭ [***Next***]({{< relref "/number-game/tutorial8.md" >}})

<!-- Use simplification. -->
