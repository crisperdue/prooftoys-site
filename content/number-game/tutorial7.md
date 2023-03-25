---
title: 4 - Commutativity
menu: menu-docs.md
description: >
  Commutativity of addition
---

### Commutativity of addition

Another very important property of addition of natural numbers is that
`x + y = y + x`.  Combined with associativity, this means that you can
add together a whole set of numbers in any order and get the same
order.  For example when you check out the grocery store, it doesn't
matter what order the clerk uses when adding up the bill.

To prove this, we need a "helper" fact: `succ x + y = succ (x + y)`.
In the proof of the commutativity property by induction on `y`, this
helper fact contributes to setting up the assumption that `(x + n =
n + x) => (succ (x + n) = succ (n + x)`, which is the key step in the
induction proof.

The helper fact is available to you for this step, but you can prove
it for yourself with this [**Side Trip**]({{< relref
"/number-game/tutorial6.md" >}}).

<div class=proof-editor data-exercise="nat/add4"></div>

#### ➭ [***Next***]({{< relref "/number-game/tutorial8.md" >}})
