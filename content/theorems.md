---
title: Simple logic
menu: /menu-theorems.md
---

# Axioms and theorems of the logic

## Axioms

In statements of theorems, we conventionally use letters f, g, and h
to represent functions that return values that are not boolean.
Letters p and q are used for predicates, in other words functions
with boolean values.

Axiom 2 and axiom 3 are also shown in forms typically written when
their functional parameters (f, g, h) are predicates (p, q) and have
boolean values.

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

There is also a ["live" display]({{< relref "/live-logic-facts.md"
>}}) of all of these theorems collected on a page here.  It shows each
theorem, with access to a rigorous proof verified by Prooftoys.

### Basic theorems

{{% preblock %}}
Equality:
~~(x = y) == (y = x)
x = y & y = z => x = z~~\
Functions ("eta conversion")
~~{x. p x} = p~~
{{% /preblock %}}

### Tautologies

All [tautologies]({{< relref "/logic-pix-truth.md#tautologies" >}}) are
theorems.  A list of frequently-useful ones might be helpful, but we
do not try to list any at this time.

### Some basic quantifier laws

Unlike first-order logic, in some of these theorems
are terms such as `forall p`.  Where they
exist in the list below, you can read them as for example
`forall {x. p x}` using eta conversion if you prefer.

In this group of quantifier laws, terms such as `p x` or `p x y`
inside quantifiers allow the rule to apply to any boolean term.  We
will discuss the reasons for this in a more advanced section, but be
reassured that you can apply these theorems easily, and Prooftoys will
take care of the technical details for you.

{{% preblock %}}
Simple quantifier rearrangement:
~~forall {x. forall {y. p x y}} == forall {y. forall {x. p x y}}
exists {x. exists {y. p x y}} == exists {y. exists {x. p x y}}~~\
Relationship between "forall" and "exists"
~~forall p == not (exists {x. not (p x)})
exists p == not (forall {x. not (p x)})~~\
Reasoning with instances:
~~forall p => p x
p x => exists p~~
{{% /preblock %}}
