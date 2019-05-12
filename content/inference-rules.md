---
title: "Inference rules"
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

## Substitution

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