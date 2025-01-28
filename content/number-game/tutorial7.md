---
title: 4 - Commutativity
menus:
  - menu-tut.md
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

#### ➭ [***Next***]({{< relref "/number-game/tutorial8.md" >}})

##### ➭ [***Side trip: closure property of addition***]({{< relref
 "/number-game/tutorial7.5.md" >}})

<!-- Use simplification. -->
