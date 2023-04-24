---
title: Advanced quantifier laws
menu: menu-docs.md
aliases:
    - /logic-facts/
description: >
  Quick reference for working with quantifiers
  in Prooftoys.
---

# Advanced quantifier laws

These are mostly needed for more advanced proofs, especially proofs of
existence, with the existential quantifier.  A handful of simple
number facts have quantifiers, but their proofs don't need these
quantifier laws.

These laws all contain quantifiers, `forall`, `exists`, or `exists1`
for "there exists exactly one" (or "unique existence").  A few also
use `the1`, which gives the unique value satisfying a condition, if
there is indeed exactly one such value.

Uses here of `p x` within `{x. . . . }` capture the same idea as
informal notations such as <code>∀ x. &phi;(x)</code> found in some
textbooks.

## Quantifier laws

<span id=hello>
Prooftoys form
<input type=button value="Show &quot;traditional&quot; form"
 onclick="$('#hello, #goodbye').toggleClass('hidden')">

{{% preblock %}}
Rearrangement:
`forall {x. p x & q x} == forall p & forall q`
`exists {x. p x | q x} == exists p | exists q`\
One-way rearrangements:
`forall p | forall q => forall {x. p x | q x}`
`exists {x. p x & q x} => exists p & exists q`\
Unused bound variable:
`forall {x. A} == A`
`exists {x. A} == A`
`forall {x. A | q x} == (A | forall q)`
`forall {x. A => q x} == (A => forall q)`
`exists {x. A & q x} == A & exists q`
`forall {x. p x => A} == (exists p => A)`\
Forward reasoning:
`forall {x. p x => q x} => (forall p => forall q)`
`forall {x. p x => q x} & forall p => forall q`
`forall {x. p x => q x} => (exists p => exists q)`
`forall {x. p x => q x} & exists p => exists q`\
Unique existence:
`exists1 p == exists {x. p = {y. y = x}}`
`exists1 p == exists {x. forall {y. p y == y = x}}`
`exists1 p == exists {y. p y & forall {z. p z => z = y}}`
`exists1 p => (p x == x = the1 p)`
`p x & forall {y. p y => y = x} => exists1 p`
`(f x = the1(Q x) & exists1 (Q x)) => (Q x y == f x = y)`
{{% /preblock %}}
</span>

<span id=goodbye class=hidden>
Traditional form
<input type=button value="Show Prooftoys &quot;native&quot; form"
 onclick="Toy.keepScroll(function() {$('#goodbye, #hello').toggleClass('hidden')})">

{{% preblock %}}
Rearrangement:
`forall {x. p x & q x} == forall {x. p x} & forall {x. q x}`
`exists {x. p x | q x} == exists {x. p x} | exists {y. q y}`\
One-way rearrangements:
`forall {x. p x} | forall {x. q x} => forall {x. p x | q x}`
`exists {x. p x & q x} => exists {x. p x} & exists {x. q x}`\
Unused bound variable:
`forall {x. A} == A`
`exists {x. A} == A`
`forall {x. A | q x} == (A | forall {x. q x})`
`forall {x. A => q x} == (A => forall {x. q x})`
`exists {x. A & q x} == A & exists {x. q x}`
`forall {x. p x => A} == (exists {x. p x} => A)`\
Forward reasoning:
`forall {x. p x => q x} => (forall {x. p x} => forall {x. q x})`
`forall {x. p x => q x} => (exists {x. p x} => exists {x. q x})`\
Unique existence:
`exists1 {x. p x} == exists {x. p = {y. y = x}}`
`exists1 {x. p x} == exists {x. forall {y. p y == y = x}}`
`exists1 {x. p x} == exists {y. p y & forall {z. p z => z = y}}`
`exists1 {x. p x} => (p x == x = the1 p)`
`p x & forall {y. p y => y = x} => exists1 {x. p x}`
`(f x = the1(Q x) & exists1 (Q x)) => (Q x y == f x = y)`
{{% /preblock %}}
</span>

### Using the laws

The proof builder will offer these laws when they apply to a term you
select.  Still, to understand how to use them takes a bit more
than other parts of Prooftoys.

In many of these laws there is at least one occurrence of
a term like `p x`, where `p` is a free variable and `x` is
bound somewhere in the statement.

Also, in some of the theorem statements there are occurrences of the
variable `A` in the scope of a bound variable.  In a form such as
`forall {x. A}`, it is not possible to substitute for `A` in a way
that puts the bound variable `x` into that part of the result.  Proper
substitution automatically renames the `x` in `forall {x. A}` to
something else if `x` is free in the term that replaces `A`, so the
substitution fails to put an occurrence of the bound variable into the
result.

On the other hand, in a form such as `forall {x. p x}`, substitution
can turn the `p x` into _any_ term with a true/false value.

For example `p x` can become `x + 0 = x`, though it does not look like
it.  The trick is to substitute for `p` and then do a beta conversion
(axiom 4).  Here `x + 0 = x` is equivalent to `{z. z + 0 = z} x`.  So
substituting `{z. z + 0 = z}` for `p` and then using beta conversion
(also a form of substitution, see above) results in `x + 0 = x` as
desired.  In fact there is no need to change `x + 0 = x` to `z + 0 =
z`.  Even `{x. x + 0 = x}` works fine and is slightly simpler, though
it may make the step a bit harder to read.

There are even more theorems like this, many dealing with specific
issues in reasoning, but these classic laws are implemented in
Prooftoys today.
