---
title: Goals - tutorial
menu: menu-docs.md
description: >
  Working with goals and assumptions
---

### Goals and assumptions

> You've got to be very careful if you don't know where you are going,
> because you might not get there. -- Yogi Berra

#### Working with goals

All of our proofs start with a goal.  The first step also has the
desired conclusion as an assumption, and later steps transform the
assumption(s) into ones in the goal statement.  This is a
tried-and-true approach to proof, but it is not the only way.
Textbook proofs tend to work forward toward the goal, and solutions to
algebra problems also tend to work forward from the givens.

As you work this way toward a goal, the proof editor highlights in red
the assumptions that do not match any listed in the goal, to help you
focus on transforming or eliminating them.

#### Working with functions

This proof uses variables `x`, `y`, and `z`, with a function `f`.
Your mission this time is to combine the two function calls into
a single expression.

The fact to be proved has two assumptions: `f x = y` and `f y = z`.
Between the two assumptions is the operator `&`, mathematical notation
for *"and"*.  This can be done in two steps plus the initial setup.

<div class=proof-editor data-exercise="nat/nat0.2"></div>

#### Doing the two-step

Start by selecting the term `f x` on the left side of the conditional.
In the "Basic" menu down below you will see an item like `➭ y assuming
((f x) = y)`.  (If you don't see an item like that, make sure the
Basic menu is selected by pausing the mouse cursor over the word
"Basic".  Also make sure the term `f x` is still selected!)  When you
select that menu item you will see a second proof step:

`f x = y & z = f y => z = f (f x)`

This step introduces a new assumption `f x = y`, an expected part of
the desired result.  The step now looks almost the same as the goal,
but the proof is not yet flagged as complete, because there is still
one mismatch with the goal.  The term `z = f y` in step 2 is displayed
in red.  To exactly match the goal we will have to reverse the left
and right sides of this equation.

Select the term `z = f y` in step 2.  You will see an item in the
Basic menu like `➭ f y = z using x = y == y = x`.  When you select
that item, the term becomes `f y = z`.

You have proved the goal statement, and the proof editor responds
by reporting **"✓ Proof complete."**

Here `x = y == y = x` is an equation with `x = y` as its left side and
`y = x` as its right side.  `x = y` and `y = x` are terms with values
that are true or false depending on the values of `x` and `y`.  We use
the symbol `==` to represent equality of boolean (true/false) terms.
When you use this fact here, Prooftoys substitutes: `f y` for `x`; and
`z` for `y` giving `z = f y == f y = z`.  It then replaces the
selected term with the equation's right side: `f y = z`, as you see in
step 3.

#### Reading and writing function calls in Prooftoys

You may have noticed that function calls have fewer parentheses than
you are used to --- for example in the goal statement.  Here
instead of `f(x)` you will see `f x`, or `(f x)` when the function
call is parenthesized.  If a function takes more than one argument, as
perhaps a logarithm function `log` with an explicit base, we write it
as simply `log b x` rather than `log(b, x)`. The arguments follow the
function one after the other, separated with spaces rather than
commas.

When we use functions such as addition written with symbols such as
`+` or `-`, we write them in the usual way, for example `x + y`.
These operators obey the usual precedence rules of textbook math, and
terms like `f x + y` mean the same as `(f x) + y` rather than `f (x +
y)`.  You can check the groupings by hovering the mouse cursor over
different parts of a step.  The parts that belong together will be
highlighted together.

##### Now let's start working with numbers!

#### ➭ [***Next***]({{< relref "/number-game/tutorial3.md" >}})

##### Or optional bonus challenge: ➭ [<i><b>Working forward</b></i>]({{< relref "/number-game/tutorial2.5.md" >}})

<!--

### Background on working with assumptions

In working with assumptions Prooftoys uses extensions of the basic
principles, applying them to new situations, but it mostly handles
these behind the scenes, so you just need to follow a few simple rules
to succeed.

opportunities to connect them back to basic principles later.

-->
