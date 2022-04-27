---
title: "Reasoning"
menu: menu-inference.md
description: >
  Reason logically like an expert with Prooftoys
  simple and powerful techniques.
---

# Principles of reasoning in Prooftoys

##### Contents

{{< TOC >}}

<!--
Prooftoys is a tool that supports you in doing precise _deductive
reasoning_.

Deductive reasoning starts with statements taken to be
true, and applies carefully defined rules to them to produce more
statements that are also true.  These rules are known as _rules of
inference_.  (Deduction and inference are synonyms.)  The act of
applying a rule of inference to a true statement is called a _proof
step_, and a _proof_ is a sequence of proof steps.

Statements that are taken to be true without being justified by rules
of inference are called _axioms_.

Reasoning in Prooftoys is based on
just a handful of axioms and a single fundamental rule of inference.
This has the advantage of simplicity, but the steps are small, so
almost any proof needs many steps.
 -->

Most Prooftoys proof steps use some combination of:

- tautologies
- substitution
- automated matching / rewriting
- simplification

Probably at least 80% of the steps in typical Prooftoys proofs use
these techniques.  Most other kinds of steps Prooftoys offers are
combinations of a small handful of these, applied in a coordinated
way.

**About solving equations.** Textbook algebra problems are very often
solved with a combination ofrewrite rules and techniques that are
somewhat specific to algebra problems.  Some of them move terms,
either within one side of an equation or from one side of an equation
to another.  Others work with multiple simultaneous equations.  The
Proof Builder action menu focuses on these procedures when you select
the "algebra" mode there.

If your immediate goal is solving equations, you may want to focus
right now on replacement and rewriting, as they are the most-used
for this kind of task.

### Tautologies

Tautologies are true statements containing only the boolean
constants (`T` for true and `F` for false), boolean variables, and
functions with boolean inputs and outputs.

To decide whether a boolean statement is true, it is enough to check
every combination of values for all variables in the statement.
Prooftoys does this in a straightforward way, and if the statement is
true the result is a proof using substitution and replacement.  If you
inspect a Prooftoys proof of a tautology you will see some inference
rules not described here, but if you break them down to the smallest
level of detail you will see that in the end they only use replacement
and substitution.

Prooftoys lets you enter a boolean statement of this kind.  If it is
true, Prooftoys proves it for you; or if not it lets you know.  It can
also prove or disprove formulas that are _instances_ of tautologies,
using its matching abilities.

Tautologies are extremely useful in mathematical reasoning.  Some
typical examples are `A | A == A`, `A & B => A`, `A & B == B & A`.
A more complex but still common tautology is `(A => B) & (B => A) ==
(A == B)`.

### Substitution

Substitution replaces every free occurrence of a variable with copies
of a term.  It is also possible to substitute for multiple variables
simultaneously, even substituting `x` for `y` and `y` for `x`.
Rewriting automatically includes substitution as needed.

There are some extra technical details if bound variables are present.
See the [technical notes]({{< relref "/tech-notes.md#substitution"
>}}) for details and explanation.

Another form of substitution applies a function in the form `{<var>
. <body>}` to an argument (or arguments) by substituting for `<var>`
in `<body>`.  It is based on exactly the same underlying principles,
but is discussed separately in TBD.



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
You can write `A => (B = C)` (or `A => (B == C)`)
{{% /preblock %}}

Using an equation like this on a sentence S results in a sentence of
the form:

{{% preblock %}}
`A => S'`
{{% /preblock %}}

where S' is like S, but with an occurrence of A replaced by B.  (If S
has bound variables there are some limitations on the use of
replacement.)

Here again, `A`, `B`, and `C`, are parts of patterns.  `A` is the
assumption (or assumptions joined with `&`) in a proved step, and `B =
C` can be any equation.  So here the left side of the equation is `B`
and the right side is `C`.

### Finding substitutions with matching

Prooftoys can find substitutions that make two terms equivalent by
matching the terms.  The term where the substitution will occur is
called the _schema_.  If matching finds no such substitution, the
matching is considered a failure.

### Rewriting

A rewriting step in a proof combines substitution and replacement.
Rewriting takes a target step, a target term within the target step,
and a rewrite rule as inputs.  It matches the left-hand side of the
rewrite rule as a schema with the target term to find a substitution.
It applies the substitution to the rewrite rule and replaces the
target term with the right-hand side of the substituted rewrite rule.
If the rewrite rule is conditional, rewriting adds its assumptions to
any existing assumptions of the target step.

When a textbook talks about applying a law such as commutativity,
associativity, or distributivity, it is talking about rewriting.
Writing the commutative law of multiplication as an equation `x * y
= y * x`, and applying it to the term `x * 3` in `5 * x =
2 * x + x * 3`, a textbook gets `5 * x = 2 * x + 3 * x`.  This
is exactly what rewriting does in Prooftoys.

The first part of the rewriting here is to make `x * y` in the
statement of the commutative law match the term `x * 3` in the example
equation.  The `y` can match with `3`, so we substitute `3` for `y` in
the commutative law, deducing that `x * 3 = 3 * x`.  Then we replace
`x * 3` in the example equation with `3 * x`, giving the textbook
result.

In the actual Prooftoys system, axioms such as commutativity are
expressed as conditionals, e.g. `R x => x * y = y * x`, so the
rewriting adds an assumption, but other than that it is the same.

### Simplification

Simplification in Prooftoys is a mechanism that finds and applies
_rewriting_ rules, often repeatedly, to do inferences that are often
helpful in proofs, usually ones that look obvious to the human user.
Prooftoys often applies simplifications automatically, sometimes
behind the scenes, to save you from some degree of tedious work.
Prooftoys has a collection of simplification facts, and normally
tries any of them that match when doing simplification.

### Finding other substitutions (forward reasoning)

Rewriting only looks for a substitution into its rewrite rule, and
just in certain places, classically the left side of an equation.
Sometimes it is useful to prepare for replacement by finding a
substitution into the target step instead of the rewrite rule step.
Proofs using so-called forward reasoning often work this way, proving
first an instance of the left side of a tautology such as `(a => b) &
(b => a) => (a == b)`, and concluding an instance of `a == b`.

Other patterns of reasoning also work this way, including proof by
contradiction for example using the tautology `(not a => F) => a`.

### About true statements and T

Replacing an expression with something equal to it is a fundamental
concept in Prooftoys.  Replacement and rewriting always use an
equation as one of their inputs, but deductive reasoning is often done
without using equations.

Many reasoning steps in Prooftoys replace a true statement by `T`, or
replace `T` by a true statement.  If the true statement is conditional
(matching the pattern `A => B`) you can also replace any occurrence of
`B` with `T`, adding `A` as an assumption in the result.  It is also
possible to replace `T` anywhere with `B`, adding `A` as an assumption
in the result.

#### An example

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
| Step                             | Description                       |
| ----                             | -------                           |
| (1) `24 < 42 & 42 < x => 24 < x` | substitute for x, y, and z in _trans_|
| (2) `24 < 42          `          | True by arithmetic                |
| (3) `T & 42 < x => 24 < x`       | replace `24 < 42` with `T` in step (2) |
| (4) `T & A == A`                 | a tautology                       |
| (5) `T & 42 < x == 42 < x`       | substitute for A in tautology (4) |
| (6) `42 < x => 24 < x`           | replace `T & 42 < x` in (5)       |

Written in less detail, just replacing a true statement with `T`:

| Step                             | Description                       |
| ----                             | -------                           |
| (1) `24 < 42 & 42 < x => 24 < x` | substitute for x, y, and z in _trans_|
| (2) `T & 42 < x => 24 < x`       | replace `24 < 42` with T          |
| (3) `42 < x => 24 < x`           | replace `T & 42 < x` using `T & A == A` |

(Prooftoys states the transitive law with explicit conditions that
`x`, `y`, and `z` must be real numbers, but the ideas in the proof are
the same.)

#### Another example

Defining `odd` as a predicate that is true if its input is an odd
number, and having already proved that

{{% preblock %}}
`1) odd 17` (17 is an odd number) `and`
`2) odd i => odd (i * i)`
{{% /preblock %}}

We can take `i` to be 17 (substitute `17` for `i` in (2)), giving:

{{% preblock %}}
`3) odd 17 => odd (17 * 17)`
`4) T => odd (17 * 17)` (replacing odd 17 with T)
{{% /preblock %}}

The statement `(T => A) == A` is true (a tautology), and it matches all
of step 4, so we can replace that entire step, giving

{{% preblock %}}
`5) odd (17 * 17)`
{{% /preblock %}}
