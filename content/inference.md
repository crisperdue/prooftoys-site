---
title: "Inference"
menu: menu-inference.md
---

# Inference - the basics

##### Table of contents

{{< TOC >}}

## Introduction

Reasoning in Prooftoys ultimately relies on a very small number of
"primitive" concepts, with one simple rule of inference and a bare
handful of axioms.  This has the advantage of simplicity, but the
deductive steps are small, so almost any proof needs many steps.

Proofs that you will actually work with also use a small number of
different concepts and operations, but each step accomplishes more so
you can reason in bigger but still understandable steps.  The
higher-level deduction steps you use in a proof do their work using
the low-level primitives, so the correctness of proofs in Prooftoys
only depends on correct implementation of the basic primitives.

The concepts in most steps are some combination of:

- proving a tautology
- rewriting; and
- substitution

This page covers replacement, rewriting, and the basics of
substitution.

Once you understand use of these techniques you will understand at
least 80% of Mathtoys inference steps.

## Basics of substitution

Substitution starts with a statement that has at least one variable in
it.  At its simplest, substitution replaces every occurrence of some
variable with a term.  The variable and the term must be of the same
type.  For example, if the variable is boolean, the term must be
boolean.  If the variable is an individual, the value of the term must
be an individual, and so on.

If a statement has no "bound" variables, as usually found with
quantifiers (`forall` and `exists`), this is the whole story.
Any variable can be replaced everywhere by the same term, as long
as it is of the same type.

If the statement does have bound variables, it is necessary to put a
couple of restrictions on substitution.  See the [technical notes]
({{< relref "/tech-notes.md#restrictions" >}}) for details and an
explanation.

## Tautologies

Tautologies are purely "boolean" statements that are true.
A tautology is a statement containing only boolean variables,
boolean constants (`T` and `F`), and functions with boolean
inputs and a boolean value.

There is a simple procedure for deciding whether a boolean statement
is true or not by checking every combination of values for all
variables in the statement.  Prooftoys does this in a straightforward
way, and if the statement is true it produces a proof using
substitution and replacement.  If you inspect a Prooftoys proof of a
tautology you will see some inference rules not described here, but if
you break them down further you will see that in the end they only use
replacement and substitution.

## Replacement and rewriting

Inference by replacement allows an arbitrary term appearing anywhere
in a proof step to be replaced by another term known to be equal to
it.  Equality applies to individuals, functions, predicates, et
cetera, and also to boolean values.  Logical equivalence ("≡") is
equality of truth values.

Rewriting lets you apply a general rule to part of a statement by
using the "left-hand side" of the rule as a pattern to match to a
specific part of the statement and then replacing that part of the
statement using replacement.  The next sections describe replacement
and then rewriting.

### Replacement

In the simplest case, replacement begins with an equality known to be true, of the form:
{{% preblock %}}
A = B   (also A ≡ B)
{{% /preblock %}}

An occurrence of A in any proof step can be replaced by B anywhere it occurs.

Alternatively we may have an equality that applies under assumptions, that
looks something like:
{{% preblock %}}
You can write A ⇒ (B = C) (also A ⇒ (B ≡ C)) 
{{% /preblock %}}

Using an equation like this on a sentence S results in a sentence of the form:

{{% preblock %}}
A ⇒ S'
{{% /preblock %}}

where S' is like S, but with an occurrence of A replaced by B.  (_In more
advanced cases where S contains "binders", there are some limitations on
the use of replacement._)

### Rewriting

Mathtoys does rewriting by using pattern matching to find and
apply substitutions, and then uses replacement using equations. 

Rewriting is a technical name for the kind of reasoning taught in
every high school algebra textbook.  Writing the commutative law of
multiplication as an equation `x * y = y * x`, and applying it to the
term `x * 3` in an equation such as `5 * x = 2 * x + x * 3`, a
textbook gets `5 * x = 2 * x + 3 * x`.  This is exactly what rewriting
does in Prooftoys.

The first part of the rewriting here is to make `x * y` in the statement
of the commutative law match the term `x * 3` in the example equation.
The `y` can match with `3`, so we _substitute_ `3` for `y` in
the commutative law, deducing that `x * 3 = 3 * x`.  Then we replace `x * 3`
in the example equation with `3 * x`, giving the textbook result.

In the actual Prooftoys system, axioms such as commutativity are expressed
as conditionals, e.g. `R x ⇒ x * y = y * x`, so the rewriting is conditional,
but the effect is essentially the same.

## Sample proofs

In this section are demonstrations of using the Prooftoys logic to accomplish
the same reasoning done by the traditional inference rules of Modus Ponens,
and Modus Ponens under assumptions, as you might see in a
textbook on logic.

Here we use some of the logical notation of Prooftoys.  If the notation
is unclear, consider reading some of the documentation on the
logical language.

Proof steps also often use the fact (a tautology) that any statement
`A` in the logic is equivalent to `A ≡ T`.  So if a proved statement
`A` occurs within another proved statement, the occurrence can be
replaced with `T`.

### Forward reasoning

Forward reasoning starts with something known and from that infers
something else.  The most classic form of this is known as
"modus ponens", and goes back to the ancient Greeks.

If we know that both of these are true:

{{% preblock %}}
(1) A
(2) A ⇒ B
{{% /preblock %}}

We can replace the `A` in step 2 with T, giving:

{{% preblock %}}
(3) T ⇒ B
{{% /preblock %}}

which is equivalent to just:

{{% preblock %}}
(4) B
{{% /preblock %}}

using the tautology (equation!) `(T ⇒ a) ≡ a`.

### Forward reasoning with assumptions

In a similar way, if we know that:

{{% preblock %}}
(1) A ⇒ B
(2) B ⇒ C
{{% /preblock %}}

we can prove that

{{% preblock %}}
A ⇒ C
{{% /preblock %}}

The inference goes like this:

| Step | Replace | Using |
| ---- | ------- | ----- |
| (3) A ⇒ (B ≡ T) | _all of step 1_ | (A ⇒ B) ≡ (A ⇒ (B ≡ T)) (_tautology_) |
| (4) A ⇒ (T ⇒ C) | _B in step 2_ | _step 3_ |
| (5) A ⇒ C | T ⇒ C in step 4 | (T ⇒ C) ≡ C (_tautology_) |

In step 3, `B` is equivalent to `T` conditionally ("_if A then B ≡
T_"), so step 4 is conditional on `A`.
