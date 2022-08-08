---
title: "Assumptions"
menu: menu-inference.md
description: >
  Prooftoys keeps assumptions organized and deduplicated.
---

# Managing assumptions

##### Contents

### About conjunctions

A term made by joining other terms with `&` is called a
_conjunction_, and we consider all of those terms to be part of the
conjunction.  For example `A & B & C & D` is commonly viewed as a
conjunction of four terms rather than three separate conjunctions.

If we make all of the parentheses explicit, the conjunction

{{% preblock %}}
`A & B & C & D`
{{% /preblock %}}

looks like this:

{{% preblock %}}
`(((A & B) & C) & D)`
{{% /preblock %}}

In this form we can see that there are really three conjunctions
there, one for each occurrence of the `and` operator.

If we rearrange the terms in these larger conjunctions, the same input
values still give the same result as before, so the conjunction is
equivalent (_equal_) to the original.  For example

{{% preblock %}}
`(A & (B & (C & D))) == ((C & D) & (B & A))`
{{% /preblock %}}

which is a tautology.  Also, if a conjunction has multiple occurrences
of the same term, the duplicates can be removed and the result is
still equivalent to the original.

