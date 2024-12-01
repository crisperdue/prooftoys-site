---
title: Goals - tutorial
menus:
  - menu-tut.md
description: >
  Working with goals and assumptions
---

### Goals and assumptions

> You've got to be very careful if you don't know where you are going,
> because you might not get there. -- Yogi Berra

#### Goals

Our proofs start with a **goal**, which is simply the statement to be
proved.  We usually start the proof in a standard way, using the
"start proof" rule.  This rule creates a step that is like the goal,
but with the conclusion part of the goal as an additional assumption.
Adding this as an assumption guarantees a true statement.  When all
assumptions not part of the goal are eliminated, the proof is
complete.  (To see this step proved, click on the words "start
proof of" in blue in the proof step.)

As you work toward a goal, the proof editor **<span
class=redBack>highlights in red</span>** the assumptions that do not
match any listed in the goal, to help you focus on transforming or
eliminating them.

#### Working with functions

This proof uses variables `x`, `y`, and `z`, with a function `f`.
Your mission this time is to combine the two function calls into
a single expression.

The fact to be proved has two assumptions: `f x = y` and `f y = z`.

<div class=proof-editor data-exercise="nat/nat0.2"></div>

#### Doing the two-step

Start by selecting the term `f x` in the assumption `z = f (f x)`.  In
the "Basic" menu down below you will see an item like `➭ y by assumed
((f x) = y)`.  (If you don't see an item like that, be sure to select
the Basic menu by hovering the mouse cursor over the word "Basic".
Also make sure the term `f x` is still selected!)  When you select
that menu item, the proof builder will display a new step:

**`[2]  f x = y  & f y = z & z = f y => z = f (f x)`**

This step introduces a new assumption `f x = y`, an expected part of
the desired result.  The step now looks almost the same as the goal,
but the proof is not yet flagged as complete, because there is still
one mismatch with the goal.  The term `z = f y` in step 2 is displayed
in red.  To exactly match the goal we will have to reverse the left
and right sides of this equation.

Select the term `z = f y` in step 2.  You will see an item in the
Basic menu like **`➭ f y = z using x = y == y = x`**.  When you select
that item, the term becomes `f y = z`.

You have proved the goal statement, and the proof editor responds
by reporting **"✓ Proof complete."**

#### Reading and writing function calls in Prooftoys

You may find that function calls have fewer parentheses than
you expect --- for example in the goal statement.  Here
instead of `f(x)` you will see `f x`, or `(f x)` when the function
call is parenthesized.  If a function takes more than one argument, as
perhaps a logarithm function `log` with an explicit base, we write it
as simply `log b x` rather than `log(b, x)`. The arguments follow the
function one after the other, separated with spaces rather than
commas.

When we use functions such as addition or subtraction written with
symbols such as `+` or `-`, we write them in the usual way, for
example `x + y`.  These operators obey the usual grouping rules of
textbook math, and terms like `f x + y` mean the same as `(f x) + y`
rather than `f (x + y)`.  You can check the groupings by hovering the
mouse cursor over different parts of a step.  The parts that belong
together will be highlighted together.

**Now let's start reasoning about numbers!**

#### ➭ [***Next***]({{< relref "/number-game/tutorial3.md" >}})

##### Optional bonus challenge: ➭ [<i><b>Working forward</b></i>]({{< relref "/number-game/tutorial2.5.md" >}})
