---
title: "Definitions"
---

# Definitions

Definitions are essential parts of mathematics.
Definitions you will see here are simple equations
that have the form:

{{% preblock %}}
<name> = <term>
{{% /preblock %}}

The name is the name of a new constant, one that has
never appeared before in any axioms or definitions,
and the term is an expression with the one restriction
that every substitution leaves it unaltered.  Saying
this another way, the term has no free variables.

For example, let's look at the definitions of [zero]
({{< relref "/real-number-facts.md#definitions" >}})
and [additive identity]
({{< relref "/real-number-facts.md#definitions" >}}).

{{% preblock %}}
~~isAddIdentity x == R x & forall {y. R y => y + x = y}
0 = the1 isAddIdentity~~
{{% /preblock %}}

Although that is the presentation style on the website, internally,
additive identity is defined in a different form that is equivalent,
but less familiar from textbooks:

{{% preblock %}}
~~isAddIdentity = {x. R x & forall {y. R y => y + x = y}}~~
{{% /preblock %}}

This "internal" form has the variables `x` and `y` in it,
but both are bound in functional terms like `{x. ... }`
and `{y. ... }`, so substitutions leave them alone.

The two forms of definitions can be converted to each other
by [unbinding]({{< relref "/inference-rules.md#unbinding-an-equation" >}})
or [rebinding]({{< relref "/inference-rules.md#rebinding-an-equation" >}})
the equation.

Any definition of this kind can be treated as a true statement
(like an axiom), and using it in a proof can never result in
a contradiction -- unless a contradiction was already provable
without the new definition.
