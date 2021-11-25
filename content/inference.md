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

Prooftoys does _deductive reasoning_.  Deductive reasoning starts with
true statements.  Based on statements known to be true, precise rules
let you correctly deduce that other statements are also true.  These
rules are known as _rules of inference_.  (Deduction and inference are
synonyms.)

In mathematics, statements that are taken to be true are known as
_axioms_.  Reasoning in Prooftoys is based on just a handful of axioms
and a single rule of inference.  This has the advantage of simplicity,
but the deductive steps are small, so almost any proof needs many
steps.

Proofs that you will actually work with also use a small number of
different concepts and inference rules, but each step accomplishes
more so you can reason in bigger but still understandable steps.  The
higher-level deduction steps you use in a proof can do their work
using the low-level primitives, so the correctness of proofs in
Prooftoys only depends on correctness of the fundamentals.

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
cetera, and also to boolean values.  Logical equivalence (<s>==</s> or
`==` or even just `=`) is equality of truth values.

Rewriting lets you apply a general rule to part of a statement by
using the "left-hand side" of the rule as a pattern to match to a
specific part of the statement and then replacing that part of the
statement using replacement.  The next sections describe replacement
and then rewriting.

### Replacement

In the simplest case, replacement begins with an equality known to be
true, of the form:

{{% preblock %}}
<s>A = B   (including A == B)</s>
{{% /preblock %}}

This <s>A = B</s> looks like a statement in the language, but it is
really a pattern that matches any statement that is an equation.  When
we say an occurrence of A in any proof step can be replaced by B
anywhere it occurs, we mean that a term exactly matching the left side
of the equation can be replaced by the right side of the equation.

Alternatively we may have an equality that applies under assumptions, that
looks something like:
{{% preblock %}}
You can write <s>A => (B = C)</s> (also <s>A => (B == C)</s>)
{{% /preblock %}}

Using an equation like this on a sentence S results in a sentence of
the form:

{{% preblock %}}
<s>A => S'</s>
{{% /preblock %}}

where S' is like S, but with an occurrence of A replaced by B.  (In more
advanced cases where S contains "binders", there are some limitations on
the use of replacement.)

Here again, `A`, `B`, and `C`, are parts of patterns.  `A` is the
assumption (or assumptions joined with <s>&</s>) in a proved step, and
<s>B = C</s> can be any equation.  In this pattern we refer to the
left side of the equation as `B` and the right side as `C`.

### Rewriting

Mathtoys does rewriting by using pattern matching to find
substitutions that make the left side of an equation match some term,
then applies the substitution, using the result to replace the term
with the equation's right side.  The equation is often conditional as
described above.

When a textbook talks about applying a law such as commutativity,
associativity, or distributivity, it is talking about rewriting.
Writing the commutative law of multiplication as an equation <s>x * y
= y * x</s>, and applying it to the term <s>x * 3</s> in <s>5 * x =
2 * x + x * 3</s>, a textbook gets <s>5 * x = 2 * x + 3 * x</s>.  This
is exactly what rewriting does in Prooftoys.

The first part of the rewriting here is to make <s>x * y</s> in the
statement of the commutative law match the term <s>x * 3</s> in the
example equation.  The <s>y</s> can match with <s>3</s>, so we
_substitute_ <s>3</s> for <s>y</s> in the commutative law, deducing
that <s>x * 3 = 3 * x</s>.  Then we replace <s>x * 3</s> in the
example equation with <s>3 * x</s>, giving the textbook result.

In the actual Prooftoys system, axioms such as commutativity are
expressed as conditionals, e.g. <s>R x => x * y = y * x</s>, so the
rewriting is conditional, but the effect is essentially the same.

### When there is no equation

Replacing an expression with something equal to it is a fundamental
concept in Prooftoys.  Replacement and rewriting always use an
equation as one of their inputs, but deductive reasoning is often done
without using equations.

The practical mechanism for this in Prooftoys is replacing a true
statement by `T`, or replacing `T` by a true statement.  If the true
statement is conditional, as in <s>A => B</s>, you can also replace
an occurrence of <s>B</s> anywhere with `T`, but <s>A</s> is added as
a condition on the result.  Similarly you can replace `T` anywhere
with <s>B</s>, adding <s>A</s> as a condition on the result.
All of these transformations are very useful.

Underneath it all, these kinds of replacement are not really new.
They can be justified as shortcuts for converting statements into
equations and then using ordinary replacement with those equations as
discussed in a [technical note XXX]({{< relref "tech-notes.md#XXX" >}}).
At the core of it are the tautologies

{{% preblock %}}
_(a)_<s>A == (A == T)</s>
_(b)_<s>A == (T == A)</s>
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
_trans_: <s>x < y & y < z => x < z</s>
{{% /preblock %}}

and the fact that <s>24 < 42</s>.

We will prove that

{{% preblock %}}
<s>42 < x => 24 < x</s>
{{% /preblock %}}

The proof in full detail goes like this:

| Step                                  | Description                       |
| ----                                  | -------                           |
| (1) <s>24 < 42 == (24 < 42 == T)</s>  | substitute for A in tautology (a) |
| (2) <s>24 < 42 == T</s>               | replace the fact with equivalent  |
| (3) <s>24 < 42 & 42 < x => 24 < x</s> | substitute for x, y, and z in _trans_|
| (4) <s>T & 42 < x => 24 < x</s>  | replace <s>24 < 42</s> with `T` using (2) |
| (5) <s>T & A == A</s>                 | another tautology                 |
| (6) <s>T & 42 < x == 42 < x</s>       | substitute for A in tautology (5) |
| (7) <s>42 < x => 24 < x</s>           | replace <s>T & 42 < x</s> in (4)  |

Written in less detail, just replacing a true statement with `T`:

| Step                                  | Description                       |
| ----                                  | -------                           |
| (1) <s>24 < 42 & 42 < x => 24 < x</s> | substitute for x, y, and z in _trans_|
| (2) <s>T & 42 < x => 24 < x</s>       | replace <s>24 < 42</s> with T     |
| (3) <s>42 < x => 24 < x</s> | replace <s>T & 42 < x</s> using <s>T & A == A</s> |

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
<s>(1) A</s>
<s>(2) A => B</s>
{{% /preblock %}}

we can replace the `A` in step 2 with T, giving:

{{% preblock %}}
<s>(3) T => B</s>
{{% /preblock %}}

which is equivalent to just:

{{% preblock %}}
<s>(4) B</s>
{{% /preblock %}}

using the tautology (equation!) <s>(T => a) == a</s>.

This reasoning applies to any true/false statements `A` and `B` where
`A` is known to be true and <s>A => B</s> is known to be true.  So for
example if we have

{{% preblock %}}
<s>(1) 17 is an odd number</s>
<s>(2) i is an odd number => i * i is an odd number</s>
{{% /preblock %}}

then after substituting 17 for `i` in step `(2)` the two statements
match the pattern, and we can conclude that

{{% preblock %}}
<s>(3) 17 * 17 is an odd number</s>
{{% /preblock %}}

without having to multiply and check.

## Assumptions

When a proof step is _conditional_ Prooftoys very often treats the
left side of the conditional as a set of _assumptions_.  A conditional
step is one where the entire step consists of a left side (the
assumptions), the conditional operator (<s>=></s>), and a right side
(the conclusion).  If the left side of a conditional contains multiple
terms connected with <s>&</s>, the _and_ operator, we consider each of
the terms to be an assumption.

For example, in <s>(A & B) & (C & D)</s>, we say that all of `A`, `B`,
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

