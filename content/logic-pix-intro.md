---
title: "Pix - introduction"
menu: "/menu-logic-pix.md"
---

# Logic through pictures - introduction

## Introduction

This page is about fundamental building blocks of
<a href="http://en.wikipedia.org/wiki/Classical_logic" target=_blank>
classical logic</a> -- *true*, *false*, and functions that
have these values as inputs and outputs.  We will focus on the
functions *and*, *or*, *not*, and *implies*.

This page uses pictures of mathematical worlds or universes that have
things in them.  The things can have properties.  A property is
something like being red, being new, or being a member of some group.
Numbers can have properties such as being even, odd, positive, or
prime.  In classical logic, a thing either has a particular property
or it does not, and there is no middle ground.

The logic concepts described here through pictures are enough to make precise virtually
all of the reasoning needed by students of high school algebra and
trigonometry. (Calculus needs a bit more.)  Adding suitable
rules of inference and axioms for logic and numbers gives a precise
system that can be used to solve a great many math problems at this
level.

This is also the kind of logic used in the Prooftoys automated proof
assistant.

### Summary for the impatient

The basic logical concepts of *and*, *or*,
*not*, and *implies* can
all be expressed as functions from boolean values to boolean values,
and truth tables capture their essence as functions.

Implication in particular is more familiar in statements that also
include predicates, such as "all multiples of 10 are multiples of 5",
or "if it rains the street will be wet".

A mathematical statement is considered true if it
is true in all possible cases.  Imagine assigning all possible
combinations of values to the variables in the statement and checking
the truth of the statement in each of these cases.  We say the statement is
true if it is true in every case. For example if we take `x` to be an integer, the statement `x is even or x is odd` is true, because it is true for every possible value `x` can have.

If you are satisfied with this summary and don't like looking at
pictures about abstract mathematics you might prefer to skip reading
the rest of the page.

### About the pictures

In the pictures a mathematical world is shown as a circle.  The world
has various things in it, each of those things having a particular
spot in the picture.

Mathematical writing, instead of saying a point of a picture is blue,
or has the property of being blue, often says it is a member of the
set of points that are blue.  In mathematics, properties are also
often referred to as *predicates*.  These are all just different
ways of describing the same situation.  (A predicate can also
express a relationship between two or more things, as in
`x < y`.  A predicate like `<` is also commonly called a *relation*, because it expresses a *relationship* between `x` and `y`.)

Collections of things with some common property are shown as a circle, part
of a circle, or other region of this world, shaded with a particular
color or pattern.  Each set is labeled with a name.  Each contains the
things inside its shaded circle or part circle, but nothing ouside of
that.  In the diagrams below, areas where some statement is true are
generally colored.  Areas where a statement is *not true* are
usually white or gray.

In our version of mathematical notation we are going to write
`(green x)` to mean that x is green,
`(blue x)` to mean that x is blue, and so on.

Some of the pictures are near tables that define key functions.
Moving the mouse over one of these pictures or touching it on a touch
screen will cause the relevant table entries to highlight themselves.

<canvas id=canvasA width=210 height=210></canvas>
<canvas id=canvasB width=210 height=210></canvas>
<canvas id=canvasC width=210 height=210></canvas>

{{< include "/pix.md" >}}
