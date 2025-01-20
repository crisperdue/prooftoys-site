---
title: Miscellaneous notes
sitemap:
  disable: true
---
## Tiny proofs

In this section are demonstrations of using the Prooftoys logic to accomplish
the same reasoning done by the traditional inference rules of Modus Ponens,
and Modus Ponens under assumptions, as you might see in a
textbook on logic.

Here we use some of the logical notation of Prooftoys.  If the notation
is unclear, consider reading some of the documentation on the
logical language.

Proof steps also often use the fact (a tautology) that any statement
`A` in the logic is equivalent to `A == T`.  So if a proved statement
`A` occurs within another proved statement, the occurrence can be
replaced with `T`.

### Forward reasoning with assumptions

In a similar way, if we know that:

{{% preblock %}}
`(1) A => B`
`(2) B => C`
{{% /preblock %}}

we can prove that

{{% preblock %}}
`A => C`
{{% /preblock %}}

The deduction goes like this:

| Step | Replace | Using |
| ---- | ------- | ----- |
| (3) A ⇒ (B ≡ T) | _all of step 1_ | (A ⇒ B) ≡ (A ⇒ (B ≡ T)) (_tautology_) |
| (4) A ⇒ (T ⇒ C) | _B in step 2_ | _step 3 (A becomes an assumption)_ |
| (5) A ⇒ C | T ⇒ C in step 4 | (T ⇒ C) ≡ C (_tautology_) |

In step 3, `B` is equivalent to `T` conditionally ("_if A then B ≡
T_"), so step 4 is conditional on `A`.

#### Unbinding an equation

{{% preblock %}}
_From:_ `g = {x. X}`
_To:_ `g x = X`
{{% /preblock %}}

This is useful for converting a definition from the basic form to the
usual form seen in first-order logics.  For a function `g` of more
than one variable, this rule can apply multiple times.

#### Rebinding an equation

{{% preblock %}}
_From:_ `g x = X`
_To:_ `g = {x. X}`
{{% /preblock %}}

This is useful for converting a definition from the basic
form to the usual form seen in first-order logics.  Like
unbinding, this rule can be applied multiple times for
functions of multiple arguments.

#### Replacing with T

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

## What is the proof builder?

The proof builder is an experimental computer tool that works with you
interactively to solve math problems -- or prove mathematical
statements.  It has correct rules for reasoning built into it, always
follows them, and does not make careless mistakes or forget the rules.

Prooftoys is built as an _interactive theorem prover_, or as more
commonly described these days, a _proof assistant_.  Among tools of
this kind, however, Prooftoys is different in that it is built -- from
the ground up -- for beginners, people who may have little background
in mathematics and no background in formal logic.  It uses a simple
form of logic (simple type theory) that is capable of developing quite
a bit of sophisticated mathematics, and it knows a bit about the real
numbers, based on standard axioms.

Prooftoys is also an ongoing series of experiments in the design and
implementation of such a basic proof assistant, seeking to make it
easier to learn, easier to use, and more effective for its users.  I
hope you will enjoy playing around with Prooftoys and look forward to
your feedback.  See the "[About]({{< relref "/about.md" >}})" page for
more information.
