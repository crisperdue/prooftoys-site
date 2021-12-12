---
title: "Reasoning"
menu: menu-inference.md
description: >
  Reason logically like an expert with Prooftoys
  simple and powerful techniques.
---

# Deductive reasoning in Prooftoys

##### Contents

{{< TOC >}}

Prooftoys is a tool that does precise _deductive reasoning_ under your
guidance.  Deductive reasoning starts with true statements, and
applies precise rules to them to produce more statements that are also
true.  These rules are known as _rules of inference_.  (Deduction and
inference are synonyms.)  The act of applying a rule of inference to a
true statement is called a _proof step_.

Statements that are taken to be true without being justified by rules
of inference are known as _axioms_.  Reasoning in Prooftoys is based
on just a handful of axioms and a single basic rule of inference.
This has the advantage of simplicity, but the steps are small, so
almost any proof needs many steps.

Proofs that you will actually work with start with the same axioms and
use just a modest number of inference rules, but each proof step
accomplishes more.  This lets you reason in bigger but still
understandable steps.  The higher-level deduction steps you will
usually use in proofs are really combinations of basic steps, so the
correctness of proofs in Prooftoys only depends on correctness of its
axioms and the one basic inference rule.

The concepts in most steps are some combination of:

- substitution
- proving a tautology
- replacement / rewriting

Once you understand use of these techniques you will understand at
least 80% of Mathtoys inference steps.  Even many of the more
specialized techniques used in solving equations are just simple
combinations of these.

**Solving equations.**
Textbook algebra problems are usually solved using specific techniques
for algebra.  Prooftoys offers some of these, implemented internally
by _proving_ the result.  The specialized procedures, combined with
_rewriting_, can make it much easier and faster for you, the user, to
solve these kinds of problems.  The Proof Builder action menu focuses on
these procedures when you select the "algebra" mode there.

The deduction steps for these techniques are implemented in Prooftoys
using the general proof techniques described here.  When you read a
Prooftoys proof -- such as the solution of an algebra problem -- that
contains specialized steps for algebra, you can "drill down" into
those proof steps by clicking on the description of the step and see
in more detail the reasoning it used to accomplish them.

If you are only solving equations, but not explicitly doing proofs,
the rest of the information in this page may not be necessary for you,
though you will often use rewriting.

<!--
Probably add a section specifically on solving equations, including
explanation of what is actually proved.
 -->

## Substitution

Substitution replaces every occurrence of some variable with a term.
The variable and the term must be of the same type.  For example, if
the variable is boolean, the term must be boolean.  If the variable is
an individual, for example a number, the value of the term must be an
individual, and so on.  Any variable can be replaced everywhere in a
statement by the same term, as long as it is of the same type.

If a statement has _bound_ variables, as when using quantifiers
(`forall x`, `exists x`, and such) or notations such as `{x. <term>}`, it
is necessary to put a couple of restrictions on substitution.  See the
[technical notes]({{< relref "/tech-notes.md#restrictions" >}}) for
details and explanation.

## Tautologies

Tautologies are true statements containing only the _boolean_
constants (`T` for true and `F` for false), boolean variables, and
functions with boolean inputs and output.

To decide whether a boolean statement is true, it is enough to check
every combination of values for all variables in the statement.
Prooftoys does this in a straightforward way, and if the statement is
true the result is a proof using substitution and replacement.  If you
inspect a Prooftoys proof of a tautology you will see some inference
rules not described here, but if you break them down to the smallest
level of detail you will see that in the end they only use replacement
and substitution.

## Replacement and rewriting

Inference by replacement allows an arbitrary term appearing anywhere
in a proof step to be replaced by another term known to be equal to
it.  Equality applies to individuals, functions, predicates, et
cetera, and also to boolean values.  Logical equivalence (`\==`
displayed as `==`, or just `=`) is equality of truth values.

Rewriting lets you apply a general rule to part of a statement by
using the "left-hand side" of the rule as a pattern to match to a
specific part of the statement and then replacing that part of the
statement using replacement.  The next sections describe replacement
and then rewriting.

### Replacement

In the simplest case, replacement begins with an equality known to be
true, of the form:

{{% preblock %}}
`A = B   (including A == B)`
{{% /preblock %}}

This `A = B` looks like a statement in the language, but it is
really a pattern that matches any statement that is an equation.  When
we say an occurrence of A in any proof step can be replaced by B
anywhere it occurs, we mean that a term exactly matching the left side
of the equation can be replaced by the right side of the equation.

Alternatively we may have an equality that applies under assumptions, that
looks something like:
{{% preblock %}}
You can write `A => (B = C)` (also `A => (B == C)`)
{{% /preblock %}}

Using an equation like this on a sentence S results in a sentence of
the form:

{{% preblock %}}
`A => S'`
{{% /preblock %}}

where S' is like S, but with an occurrence of A replaced by B.  (In more
advanced cases where S contains "binders", there are some limitations on
the use of replacement.)

Here again, `A`, `B`, and `C`, are parts of patterns.  `A` is the
assumption (or assumptions joined with `&`) in a proved step, and
`B = C` can be any equation.  In this pattern we refer to the
left side of the equation as `B` and the right side as `C`.

### Rewriting

Mathtoys does rewriting by using pattern matching to find
substitutions that make the left side of an equation match some term,
then applies the substitution, using the result to replace the term
with the equation's right side.  The equation is often conditional as
described above.

When a textbook talks about applying a law such as commutativity,
associativity, or distributivity, it is talking about rewriting.
Writing the commutative law of multiplication as an equation `x * y
= y * x`, and applying it to the term `x * 3` in `5 * x =
2 * x + x * 3`, a textbook gets `5 * x = 2 * x + 3 * x`.  This
is exactly what rewriting does in Prooftoys.

The first part of the rewriting here is to make `x * y` in the
statement of the commutative law match the term `x * 3` in the
example equation.  The `y` can match with `3`, so we
_substitute_ `3` for `y` in the commutative law, deducing
that `x * 3 = 3 * x`.  Then we replace `x * 3` in the
example equation with `3 * x`, giving the textbook result.

In the actual Prooftoys system, axioms such as commutativity are
expressed as conditionals, e.g. `R x => x * y = y * x`, so the
rewriting is conditional, but the effect is essentially the same.

### When there is no equation

Replacing an expression with something equal to it is a fundamental
concept in Prooftoys.  Replacement and rewriting always use an
equation as one of their inputs, but deductive reasoning is often done
without using equations.

The practical mechanism for this in Prooftoys is replacing a true
statement by `T`, or replacing `T` by a true statement.  If the true
statement is conditional, as in `A => B`, you can also replace
an occurrence of `B` anywhere with `T`, but `A` is added as
a condition on the result.  Similarly you can replace `T` anywhere
with `B`, adding `A` as a condition on the result.
All of these transformations are very useful.

Underneath it all, these kinds of replacement are not really new.
They can be justified as shortcuts for converting statements into
equations and then using ordinary replacement with those equations as
discussed in a [technical note XXX]({{< relref "tech-notes.md#XXX" >}}).
At the core of it are the tautologies

{{% preblock %}}
_(a)_`A == (A == T)`
_(b)_`A == (T == A)`
{{% /preblock %}}

and similar ones that permute its occurrences of `A` and `T`.  These
tautologies let us convert any true/false term into an equation.

_The key idea is that any true statement can be replaced with `T`.  If
the statement is conditional you can replace the conclusion of the
statement with `T` and keep the assumption part as an assumption._

### A concrete example

Let's consider a couple of facts about real numbers -- the
transitivity of the ordering relation

{{% preblock %}}
_trans_: `x < y & y < z => x < z`
{{% /preblock %}}

and the fact that `24 < 42`.

We will prove that

{{% preblock %}}
`42 < x => 24 < x`
{{% /preblock %}}

The proof in full detail goes like this:

| Step                                  | Description                       |
| ----                                  | -------                           |
| (1) `24 < 42 == (24 < 42 == T)`  | substitute for A in tautology (a) |
| (2) `24 < 42 == T`               | replace the fact with equivalent  |
| (3) `24 < 42 & 42 < x => 24 < x` | substitute for x, y, and z in _trans_|
| (4) `T & 42 < x => 24 < x`  | replace `24 < 42` with `T` using (2) |
| (5) `T & A == A`                 | another tautology                 |
| (6) `T & 42 < x == 42 < x`       | substitute for A in tautology (5) |
| (7) `42 < x => 24 < x`           | replace `T & 42 < x` in (4)  |

Written in less detail, just replacing a true statement with `T`:

| Step                                  | Description                       |
| ----                                  | -------                           |
| (1) `24 < 42 & 42 < x => 24 < x` | substitute for x, y, and z in _trans_|
| (2) `T & 42 < x => 24 < x`       | replace `24 < 42` with T     |
| (3) `42 < x => 24 < x` | replace `T & 42 < x` using `T & A == A` |

(The actual transitive law for ordering of the real numbers in
Prooftoys has explicit conditions that `x`, `y`, and `z` must be real
numbers, but the ideas in the proof are the same.)

## Forward reasoning

Replacing true statements with `T` is an extremely valuable technique
that Prooftoys uses in a great many situations, and you will find it
many of your proofs, or just behind the scenes in other techniques you
are likely to use.

Let's look at replacing true statements with `T` in _forward
reasoning_.  Forward reasoning starts with facts that are known and
from them deduces more truths.  A classic form of this is known
as _modus ponens_, and goes back to the ancient Greeks.

Modus ponens says that if both of these are true:

{{% preblock %}}
`(1) A`
`(2) A => B`
{{% /preblock %}}

we can replace the `A` in step 2 with T, giving:

{{% preblock %}}
`(3) T => B`
{{% /preblock %}}

which is equivalent to just:

{{% preblock %}}
`(4) B`
{{% /preblock %}}

using the tautology (equation!) `(T => a) == a`.

This reasoning applies to any true/false statements `A` and `B` where
`A` is known to be true and `A => B` is known to be true.  So for
example if we have

{{% preblock %}}
`(1) 17 is an odd number`
`(2) i is an odd number => i * i is an odd number`
{{% /preblock %}}

then after substituting 17 for `i` in step `(2)` the two statements
match the pattern, and we can conclude that

{{% preblock %}}
`(3) 17 * 17 is an odd number`
{{% /preblock %}}

without having to multiply and check.

## Assumptions

When a proof step is _conditional_ Prooftoys very often treats the
left side of the conditional as a set of _assumptions_.  A conditional
step is one where the entire step consists of a left side (the
assumptions), the conditional operator (`=>`), and a right side
(the conclusion).  If the left side of a conditional contains multiple
terms connected with `&`, the _and_ operator, we consider each of
the terms to be an assumption.

For example, in `(A & B) & (C & D)`, we say that all of `A`, `B`,
`C`, and `D` are assumptions.

When Prooftoys applies replacement or rewriting with a conditional
equation, it treats the left side of the conditional as a set of
assumptions.  If the target step is also conditional, it combines the
assumptions in both steps to keep them simple and tidy, by

- Regrouping
- Reordering
- Removing duplicates

All of these transformations give results that are fully equivalent to
their input, and Prooftoys uses rewriting and some simple tautologies
to prove the correctness of each transformation it does.

### Assumptions about numbers

There are a few more transformations of assumptions that are applied
very frequently, such as assumptions that expressions have numeric
values.  Prooftoys automatically applies some transformations to
simplify these assumptions, reducing complex terms, removing
duplicates, or in some cases removing assumptions entirely.

In all of these cases, if you dig down into the details of these proof
steps you will see that they use the same kinds of basic operations
that you see in most other proof steps.

