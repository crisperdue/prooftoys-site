---
title: "More reasoning"
menu: menu-docs-plus.md
description: >
  Digging a little deeper into practical deductive
  reasoning with Prooftoys.
---

# More reasoning with Prooftoys

##### Contents

{{< TOC >}}

In the descriptions of rules of inference, capital letters A, B, and C
are variables with boolean (true/false) values.  The letters x and y
are used for variables of any type.  You can supply any term you
choose for capital letters X and Y without the need to follow the
usual rules for substitution.

### Some basic facts

{{% preblock %}}
`x = x`
`A == A`
{{% /preblock %}}

The value of any expression is equal to itself.  This is often a good
way to start a proof that `A` is equal to something else.  Keep
replacing one side (usually the right) with something else that is
equal to it.

{{% preblock %}}
`x = y == y = x` (symmetry of equality)
`x = y & y = z => x = z` (transitivity of equality)
`f = g == forall {x. f x = g x}` (extensionality)
{{% /preblock %}}

When working with equality in Prooftoys it is important to remember
that equivalence (`==`) is the same concept as equality
applied to true/false values.

There are also numerous facts about quantifiers that work as rewrite
rules using an extended form of matching, described **TBD**.

### Tautologies

| Tautology                         | Use                           |
| --------                          | ------                        |
| `A => A`                          | starting various kinds of proofs  |
| `(A => B) & (B => A) == (A == B)` | proving an equivalence        |

### Proving _A and B_

If statements A and B are both proved, how can I prove the statement
`A & B`?



### Removing irrelevant assumptions

If a conditional fact has an assumption with a variable that only
appears (free) in that assumption and nowhere else in the statement of
the fact, that assumption can be safely be removed.  We can suggest
the working of the inference like this:

{{% preblock %}}
_From:_ `a_1 & a_2 & ... => C`
_To:_ `a_2 & ... => C`
{{% /preblock %}}

The one limitation is that there must be some value for the variable
that can make the irrelevant assumption true.  So to use this rule in
a proof, there must be a proof that such a value exists.  Prooftoys
currently supports a couple of common cases.  These are useful cases,
and Prooftoys can work out the existence fact on its own.  The cases
are:

{{% preblock %}}
`<var> = <term>`; and
`R <var>`
{{% /preblock %}}

In both cases, the variable `var` does not appear in the
fact outside this one assumption.

For every assumption of these kinds, the existence of a value
satisfying it is provable, so we can remove the assumption from the
proof step.

### Adding a new axiom

To add a new axiom, use the command "assert without proof".

### Definitions

Definitions can have the form

{{% preblock %}}
`<name> = <term>`
{{% /preblock %}}

The name must be a new constant name, one that has
never appeared before in any axioms or definitions,
and the term is an expression with the one restriction
that every substitution leaves it unaltered.  Saying
this another way, the term has no free variables.

For example, let's look at the definitions of _zero_ and
_additive identity_ in the fundamental facts about
[real numbers]({{< relref "/real-number-facts.md#definitions" >}}).

{{% preblock %}}
`isAddIdentity x == R x & forall {y. R y => y + x = y}`
`0 = the1 isAddIdentity`
{{% /preblock %}}

Although that is the presentation style on the website, internally,
additive identity is defined in a different form that is equivalent,
but less familiar from textbooks:

{{% preblock %}}
`isAddIdentity = {x. R x & forall {y. R y => y + x = y}}`
{{% /preblock %}}

This "internal" form has the variables `x` and `y` in it,
but both are bound in functional terms like `{x. ... }`
and `{y. ... }`, so substitutions leave them alone.

The two forms of definitions can be converted to each other
by [unbinding]({{< relref "/practical-reasoning.md#unbinding-an-equation" >}})
or [rebinding]({{< relref "/practical-reasoning.md#rebinding-an-equation" >}})
the equation.

Any definition of this kind can be treated as a true statement
(like an axiom), and using it in a proof can never result in
a contradiction -- unless a contradiction was already provable
without the new definition.
