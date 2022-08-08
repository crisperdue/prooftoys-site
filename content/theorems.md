---
title: Axioms and theorems
menu: menu-theorems.md
description: >
  Summary of the axioms and theorems of pure logic
  available in Prooftoys.  Theorems that apply across
  all branches of mathematics.
---

# Axioms and theorems of the logic

## Axioms

In statements of theorems, we conventionally use letters f, g, and h
to represent functions that return values that are not boolean.
Letters p and q are used for predicates, in other words functions
with boolean values.

Axiom 2 and axiom 3 are shown in two forms.  The second form shows
their functional parameters (f, g, h) as predicates (p, q), for
the case where their values are boolean.

{{% preblock %}}
`1) p T & p F == forall {a. p a}`
`2a) x = y => h x = h y`
`2b) x = y => (p x == p y)`
`3a) (f = g) == forall {x. f x = g x}`
`3b) (p = q) == forall {x. p x == q x}`
`4) {x. R} S = R[x := S]`
`5) the1 {x. x = y} = y`
`6) if T x y = x`
`7) if F x y = y`
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

Definitions have the form `<name> <vars> = <expression>` where
`<name>` is the newly-defined constant and `<vars>` is an optional
sequence of variable names.

The expression must not have any free variables other than those in
the list after the name being defined.  For more on the use of
definitions in Prooftoys see the [definitions]({{< relref
"/definitions.md" >}}) page.

{{% preblock %}}
`not a == (a == F)`
`a & b == if a b F`
`a | b == if a T b`
`a => b == if (not a) T b`
`forall p == p = {x. T}`
`x != y == not (x = y)`
`exists p == p != {x. F}`
`exists1 p == exists {x. p = {y. y = x}}`
`ident x = x`
`multi p == exists {x. exists {y. p x & p y & x != y}}`
`empty = {x. F}`
`none = the1 empty`
{{% /preblock %}}

## Theorems of the logic

There is also a ["live" display]({{< relref "/live-logic-facts.md"
>}}) of all of these theorems collected on a page here.  It shows each
theorem, with access to a rigorous proof verified by Prooftoys.

### Basic theorems

{{% preblock %}}
Equality:
`(x = y) == (y = x)`
`x = y & y = z => x = z`\
Functions ("eta conversion")
`{x. p x} = p`
{{% /preblock %}}

### Tautologies

All tautologies can be proved, as described
[here]({{< relref "/inference.md#tautologies" >}}) and
[here]({{< relref "/logic-pix-truth.md#tautologies" >}}).

Here is a list of some tautologies that are used in Prooftoys or may
be useful in building your own proofs.  Remember that all uses of `==`
can be reversed because of the symmetry of equality.

The comments suggest places where you may see these tautologies in
Prooftoys proofs.

{{% preblock %}}
Basic:
`  a == a` (the "consider" rule)
`  a => a` (the "assume" rule)
`  (a == b) == (b == a)` (symmetry of equality/equivalence)
`  a == (a == T)` (replacing a theorem with `T` or `T` with a theorem)
`  a & T == a`
&nbsp;
Relating "and" and "or":
`  not (a & b) == not a | not b`
`  not (a | b) == not a & not b`
&nbsp;
Conditionals:
`  (T => a) == a`
`  (a => F) == not a` (proofs by contradiction)
`  (a => b) & (b => c) => (a => c)` ("forward" reasoning)
`  (a => b) & (b => a) == (a == b)` (proofs of equivalence)
`  (a => b) == (not b => not a)`
&nbsp;
Managing assumptions:
`  (a => (b => c)) == (a & b => c)`
&nbsp;
Resolving side conditions, e.g. `a == (x = 0)`
`  (not a => (p == b)) & (a => p) => (p == a | b)`
{{% /preblock %}}

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
`forall {x. forall {y. p x y}} == forall {y. forall {x. p x y}}`
`exists {x. exists {y. p x y}} == exists {y. exists {x. p x y}}`
&nbsp;
Relationship between "forall" and "exists"
`forall p == not (exists {x. not (p x)})`
`exists p == not (forall {x. not (p x)})`
&nbsp;
Reasoning with instances:
`forall p => p x`
`p x => exists p`
{{% /preblock %}}

For more, see also the "live" list of
[logic theorems]({{< relref "/live-logic-facts.md" >}}) and the
[advanced quantifier laws]({{< relref "/quantifiers.md" >}}).
