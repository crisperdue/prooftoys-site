---
title: 'Logic facts'
date: 2019-02-11T19:27:37+10:00
weight: 6
---

# Axioms and theorems of the logic

Tautologies are not listed here.

## Axioms

In statements of theorems, we conventionally use letters f, g, and h
to represent functions that return values that are not boolean.
Letters p and q are used for predicates, in other words functions
with boolean values.

Axiom 2 and axiom 3 are also shown in forms typically written when
their functional parameters (f, g, h) are predicates, in other words
they have boolean values.

{{% preblock %}}
~~1) p T & p F == forall {a. p a}
2) x = y => h x = h y
2) x = y => (p x == p y)
3) (f = g) == forall {x. f x = g x}
3) (p = q) == forall {x. p x == q x}
4) {x. R} S = R[x := S]
5) the1 {x. x = y} = y~~
{{% /preblock %}}

In the description of Axiom 4, the notation R[x := S] means the result
of properly substituting `S` for `x` in `R`.  Proper substitution only
replaces occurrences of `x` that are free in the "body" (`R`).  We say
that `{x. R}` binds the variable `x`, and that `x` is bound in
`{x. R}`.  If R contains any bound variables, substitution in
Prooftoys may also automatically rename them to avoid a phenomenon
known as "capture".  See the [technical notes]({{< relref
"/tech-notes.md#substitution" >}}) for more details.

This process of converting `{x. R} S` to an equivalent term via proper
substitution is known as "beta conversion".


## Definitions

Definitions including all of those used in the theorems list below.
Some additional definitions are used internally or in theorems
about real numbers.

All of these definitions have the form `<name> = <expression>` and meet the
additional requirements for being safe definitions that cannot introduce
contradictions into the logic.

Definitions of functions and predicates in this list are given in
pairs; first the native form with only the name of the new constant on
the left, and then in the traditional form.  The two forms are
equivalent.  See the inference rules for [unbinding]({{< relref
"/inference-rules.md#unbinding-an-equation" >}}) and [rebinding]({{<
relref "/inference-rules.md#rebinding-an-equation" >}}) equations.

For more on the use of definitions in Prooftoys see the
[definitions]({{< relref "/definitions.md" >}}) page.

{{% preblock %}}
~~forall = {p. p = {x. T}}
forall p == p = {x. T}~~\
~~(!=) = {x. {y. not (x = y)}}
x != y == not (x = y)~~\
~~exists = {p. p != {x. F}}
exists p == p != {x. F}~~\
~~exists1 = {p. exists {x. p = {y. y = x}}}
exists1 p == exists {x. p = {y. y = x}}~~\
~~ident = {x. x}
ident x = x~~\
~~multi = {p. exists {x. exists {y. p x & p y & x != y}}}
multi p == exists {x. exists {y. p x & p y & x != y}}~~\
~~empty = {x. F}
none = the1 empty~~
{{% /preblock %}}

## Theorems of the logic

For a "live" display of all of these theorems, see
<http://prooftoys.org/logic-facts.html>.  It shows each theorem rendered
by the system, and gives access to proofs of them.

### Without quantifiers

{{% preblock %}}
Equality:
~~(x = y) == (y = x)
x = y & y = z => x = z~~\
Functions ("eta conversion")
~~{x. p x} = p~~
{{% /preblock %}}

### Quantifier laws (advanced)

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

Unlike first-order logic, in some of these theorems
are terms such as `forall p`.  Where they
exist in the list below, you can read them as for example
`forall {x. p x}` using eta conversion if you prefer.

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
Relationship between "forall" and "exists"
~~forall p == not (exists {x. not (p x)})
exists p == not (forall {x. not (p x)})~~\
Reversible quantifier rearrangements:
~~forall {x. forall {y. p x y}} == forall {y. forall {x. p x y}}
exists {x. exists {y. p x y}} == exists {y. exists {x. p x y}}
forall {x. p x & q x} == forall p & forall q
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
Reasoning with instances:
~~forall p => p x
p x => exists p~~\
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
