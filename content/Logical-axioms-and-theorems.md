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

```
1) p T & p F == forall {a. p a}
2) x = y => h x = h y
2) x = y => (p x == p y)
3) (f = g) == forall {x. f x = g x}
3) (p = q) == forall {x. p x == q x}
5) the1 {x. x = y} = y
```

Axiom 4 says that if R and S are terms, `{x. R} S` is equal to
the result of properly substituting `S` for `x` in `R`.  Proper substitution
only replaces occurrences of `x` that are free in `R` (though of course
not free in `{x. R}`).  Furthermore, if R binds `x`, proper substitution
renames the occurrences of `x` bound in `R` as needed to keep distinct
variables distinct.

This process of converting `{x. R} S` to an equivalent term via proper
substitution is known as "beta conversion".

Also expect an axiom of infinity, such as one that states that the collection
of all individuals can be placed in 1 to 1 correspondence with a subset
of itself.

## Definitions

Definitions including all of those used in the theorems list below.
Some additional definitions are used internally or in theorems
about real numbers.

All of these definitions have the form `<name> = <expression>` and meet the
additional requirements for being safe definitions that cannot introduce
contradictions into the logic.

Definitions of the form `"name" = {x. "etc"}` or `"name" = {x. {y. "etc"}}`
immediately imply statements of the form `"name" x = "etc"` or 
`"name" x y = "etc"`.  For example we can immediately deduce from the
definition of `!=` that `x != y == not (x = y)`, as the definition would
be in first-order logic.

```
forall = {p. p = {x. T}}
(!=) = {x. {y. not (x = y)}}
exists = {p. p != {x. F}}
exists1 = {p. exists {x. p = {y. y = x}}}
if = {p. {x. {y. the1 {z. p & z = x | not p & z = y}}}}
empty = {x. F}
none = the1 empty
ident = {x. x}
multi = {p. exists {x. exists {y. p x & p y & x != y}}}
```

## Theorems of the logic

For a "live" display of all of these theorems, see
<http://prooftoys.org/logic-facts.html>.  It shows each theorem rendered
by the system, and gives access to their proofs.

### Equality
```
(x = y) == (y = x)
x = y & y = z => x = z
{x. p x} = p
```
When the last of this group is used to rewrite a term, it is
often referred to as "eta conversion".

### Quantifier laws

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

```
forall {x. T}
exists {x. T}
not (forall {x. F})
forall p => p x
p x => exists p
forall {x. p x => q x} => (forall p => forall q)
forall {x. p x => q x} => (exists p => exists q)
forall {x. forall {y. p x y}} == forall {y. forall {x. p x y}}
exists {x. exists {y. p x y}} == exists {y. exists {x. p x y}}
forall {x. a | q x} == (a | forall q)
exists {x. a & q x} == a & exists q
forall {x. a => q x} == (a => forall q)
forall {x. p} == p
exists {x. p} == p
forall {x. p x & q x} == forall p & forall q
exists {x. p x | q x} == exists p | exists q
forall p | forall q => forall {x. p x | q x}
exists {x. p x & q x} => exists p & exists q
forall {x. p x => A} == (exists p => A)
exists p == not (forall {x. not (p x)})
not (exists p) == forall {x. not (p x)}
exists {x. not (p x)} == not (forall p)
```

### Unique existence
```
exists1 p == exists {x. p = {y. y = x}}
exists1 p == exists {x. forall {y. p y == y = x}}
exists1 p == exists {y. p y & forall {z. p z => z = y}}
exists1 p => (p x == x = the1 p)
p x & forall {y. p y => y = x} => exists1 p
f x = the1 (Q x) & exists1 (Q x) => (Q x y == f x = y)
```
