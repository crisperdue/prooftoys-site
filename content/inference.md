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

- substitution
- tautologies
- replacement / rewriting
- simplification
- forward chaining

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

### Replacement and rewriting

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

**Replacement.**
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

**Rewriting.**
Mathtoys does rewriting by using pattern matching to find
substitutions that make the left side of an equation match some term,
then applies the substitution and replace the term with the equation's
right side after the substitution.  The equation is often conditional
as described above.

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
rewriting adds an assumption, but otherwise it is the same.

### Simplification

Simplification in Prooftoys is a mechanism that finds and applies
_rewriting_ rules, often repeatedly, to do inferences that are often
helpful in proofs, usually ones that look obvious to the human user.
Prooftoys often applies simplifications automatically, sometimes
behind the scenes, to save you from some degree of tedious work.
Prooftoys has a collection of simplification facts, and normally
tries any of them that match when doing simplification.

### Forward chaining

Part of rewriting is finding a substitution into the equation
step. (Or recall that Prooftoys can convert any theorem into an
equation by adding `== T` in a suitable location.)

Sometimes though, substitution is needed in some part of a step that
it cannot use as part of an equation.  Forward chaining can help with
automatic matching to find the needed substitution.

Forward chaining finds a substitution into the left side of a
conditional statement `A => C` to make it the same as your
already-proved proof step.  Being the same, Prooftoys replaces it with
`T` giving `T => C`, which it replaces with just `C` since
`T => C == T`.

### True statements and `T`

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

###### An example

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

| Step                             | Description                       |
| ----                             | -------                           |
| (3) `24 < 42 & 42 < x => 24 < x` | substitute for x, y, and z in _trans_|
| (2) `24 < 42          `          | True by arithmetic                |
| (4) `T & 42 < x => 24 < x`       | replace `24 < 42` with `T` using (2) |
| (5) `T & A == A`                 | a tautology                       |
| (6) `T & 42 < x == 42 < x`       | substitute for A in tautology (5) |
| (7) `42 < x => 24 < x`           | replace `T & 42 < x` in (4)       |

Written in less detail, just replacing a true statement with `T`:

| Step                             | Description                       |
| ----                             | -------                           |
| (1) `24 < 42 & 42 < x => 24 < x` | substitute for x, y, and z in _trans_|
| (2) `T & 42 < x => 24 < x`       | replace `24 < 42` with T          |
| (3) `42 < x => 24 < x`           | replace `T & 42 < x` using `T & A == A` |

(Prooftoys normally states the transitive law with explicit
conditions that `x`, `y`, and `z` must be real numbers, but the ideas
in the proof are the same.)

###### Another example

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

##### Matching of terms

Matching in Prooftoys means finding a substitution that makes
two terms the same.  Prooftoys does a lot of matching behind the
scenes when applying rewrite rules, and even more when working
with you interactively.

In fact, in many cases two terms just differ in the names of some
bound variables can still be considered the same.  Prooftoys
recognizes these situations.  See the [technical notes]({{< relref
"/tech-notes.md#renaming" >}}) for some further detail.

Rewriting substitutes into the left side of an equation to make it
match a term to be replaced.

### Advanced techniques

Some proofs require more advanced techniques.  You will need them for
example if a proof requires use of quantifiers such as "forall"
(`forall`) and "exists" (`exists`).  And you will probably want to
learn more about _bound variables_, which naturally accompany use of
quantifiers.

You might also want to learn how to introduce new constants and how to
work with definitions.  Some definitions use the _definite description
operator_, another fundamental concept of the Prooftoys logic.

Mathematical concepts combine in endless amazing and powerful ways, so
there is always more to learn long after you have seen the fundamental
principles.

