---
title: Advanced quantifier laws
menu: /menu-theorems.md
---

# Advanced quantifier laws

These are mostly needed for more advanced proofs, especially
proofs of existence, with the existential quantifier.
A handful of simple number facts have quantifiers, but they
don't need the quantifier laws to prove them.

These laws all contain quantifiers, `forall`, `exists`, or `exists1`
for "unique existence".  A few also use `the1`, which gives the unique
value satisfying a condition, if there is indeed exactly one such value.
These rules need more explaining than the ones shown above, but many simple
theorems do not need them, so on a first reading it might make sense
to postpone studying them.  On the other hand, they correspond closely
to laws that exist in first-order logic, and that may help some readers.

Also, in some of the theorem statements there are occurrences
of the variable `A` in the scope of a bound variable.
In a form such as `forall {x. A}`, it is not possible to substitute
for `A` in a way that has the variable `x` in the result.
Proper substitution automatically renames the `x` in `forall {x. A}`
to something else if `x` is free in the term that replaces `A`, so you
would not get the desired result. 

On the other hand, in a form such as `forall {x. p x}`, `p x` can match any term
with a true/false value.
For example it can match `x + 0 = x`, though it does not look like it.
The trick is that `x + 0 = x` is equivalent to `{z. z + 0 = z} x`.
So substituting `{z. z + 0 = z}` for `p` and then using beta conversion
(also a form of substitution, see above) results in `x + 0 = x` as desired.
In fact there is no need to change `x` to `z`.  Even `{x. x + 0 = x}`
works fine and is slightly simpler.

This notation with `p x` captures the same idea as informal notations such as
`∀ x. phi(x)` sometimes found in textbooks.

{{% preblock %}}
Rearrangement:
~~forall {x. p x & q x} == forall p & forall q
exists {x. p x | q x} == exists p | exists q~~\
One-way rearrangements:
~~forall p | forall q => forall {x. p x | q x}
exists {x. p x & q x} => exists p & exists q~~\
Unused bound variable:
~~forall {x. A} == A
exists {x. A} == A
forall {x. A | q x} == (A | forall q)
forall {x. A => q x} == (A => forall q)
exists {x. A & q x} == A & exists q
forall {x. p x => A} == (exists p => A)~~\
Forward reasoning:
~~forall {x. p x => q x} => (forall p => forall q)
forall {x. p x => q x} => (exists p => exists q)~~\
Unique existence:
~~exists1 p == exists {x. p = {y. y = x}}
exists1 p == exists {x. forall {y. p y == y = x}}
exists1 p == exists {y. p y & forall {z. p z => z = y}}
exists1 p => (p x == x = the1 p)
p x & forall {y. p y => y = x} => exists1 p
(f x = the1(Q x) & exists1 (Q x)) => (Q x y == f x = y)~~
{{% /preblock %}}

There are even more theorems like this, many dealing with
specific issues in reasoning, but this set is implemented
in Prooftoys today.
