---
title: "Inference rules"
menu: menu-inference.md
---

# More common inference rules

##### Table of contents

{{< TOC >}}

## About the notation

Before learning about more handy rules of inference, let's clarify
a bit the notation in the next sections.

Capital letters A, B, and C here are not variables in the logic.  They
are pattern variables to be replaced with arbitrary boolean terms
(with true/false values).  Letters F and G represent terms whose
values are functions.  Capital letters X and Y are also pattern
variables, for arbitrary terms of any type.

## Rewriting and replacement

Rewriting and replacement are core parts of inference in Prooftoys,
and have [their own page]({{< relref "/inference.md" >}}).

## Variations on substitution

### Substitution for free variable(s)

{{% preblock %}}
_From:_ Proof step with one or more free variables.
_To:_ Proof step with a term substituted for each variable.
{{% /preblock %}}

### Universal instantiation

{{% preblock %}}
_From:_ `forall {x. A}`.
_To:_ A with a term of your choice substituted for `x`.
{{% /preblock %}}

### Substitution into a function body (beta reduction)

{{% preblock %}}
_From:_ `{x. A} X`.
_To:_ `A`, with term `X` substituted for `x` throughout
{{% /preblock %}}

This can be done anywhere in any formula.

#### Note on substitution

In the simple cases, all forms of substitution above work in the way
you might expect from examples in any high school math textbook.
There is a restriction in cases where the term undergoing substitution
contains "bound" variables of its own.

For details on this see [link TBD](http://prooftoys.org/TBD).

## Other rules

### Self-equality

{{% preblock %}}
`X = X`
{{% /preblock %}}

The value of any expression is equal to itself.

### Universal quantifier elimination

{{% preblock %}}
_From:_ `forall {x. B}`
_To:_ `B`
{{% /preblock %}}

(Result of instantiating with `x`.)

### Universal quantifier introduction

{{% preblock %}}
_From:_ `B`
_To:_ `forall {x. B}`
{{% /preblock %}}

### Binding both sides of an equation

{{% preblock %}}
_From:_ `X = Y`
_To:_ `{x. X} = {x. Y}`
{{% /preblock %}}

(Consequence of `{x. X} = {x. X}`, then replacing the second `X` with
`Y`.)

### Unbinding an equation

{{% preblock %}}
_From:_ `g = {x. X}`
_To:_ `g x = X`
{{% /preblock %}}

This is useful for converting a definition from the basic form to the
usual form seen in first-order logics.  For a function `g` of more
than one variable, this rule can apply multiple times.

### Rebinding an equation

{{% preblock %}}
_From:_ `g x = X`
_To:_ `g = {x. X}`
{{% /preblock %}}

This is useful for converting a definition from the basic
form to the usual form seen in first-order logics.  Like
unbinding, this rule can be applied multiple times for
functions of multiple arguments.

### Removing irrelevant assumptions

If a conditional fact has an assumption with a variable
that only appears (free) in that assumption and nowhere
else in the statement of the fact, in almost all cases,
that assumption can safely be removed.  We can suggest
the working of the inference like this:

{{% preblock %}}
_From:_ ~~a_1 and a_2 and ... ⇒ C~~
_To:_ ~~a_2 and ... ⇒ C~~
{{% /preblock %}}

The one limitation is that there must be some value for the variable
that can make the irrelevant assumption true.  So to use this rule in
a proof, there must be a proof that such a value exists.  Prooftoys
doesn't yet support this rule in its general form, but it supports a
couple of common cases.  These are useful cases, and Prooftoys can
work out the existence fact on its own.  The cases are:

{{% preblock %}}
<var> = <term>; and
R <var>
{{% /preblock %}}

In both cases, the variable `var` does not appear in the
fact outside this one assumption.

For every assumption of these kinds, the existence of a value
satisfying it is provable, so we can remove the assumption from the
proof step.

### Some fancy forms of rewriting

A couple of often-useful inference rules in Prooftoys combine a couple
of steps together and rewrite the result.  These may take two steps
and "conjoin" them using the boolean "and" operation.  Then they
rewrite a tautology to make it match the conjunction and infer a
conclusion.

Proof steps that use these rules tend to have the word "consequence"
in their description.

[[More to be written here.]]
