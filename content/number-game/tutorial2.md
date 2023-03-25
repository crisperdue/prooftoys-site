---
title: Goals - tutorial
menu: menu-docs.md
description: >
  Working with goals and assumptions
---

### Goals and assumptions

#### Function calls

This proof uses variables `x`, `y`, and `z`, with a function `f`.

Notice that function calls have fewer parentheses than you may be used
to --- for example in the goal statement.  Here instead of `f(x)` you
will see `f x`, or `(f x)` when the function call is parenthesized.
If a function takes more than one argument, as perhaps a logarithm
function `log` with an explicit base, we write it as simply `log b x`
rather than `log(b, x)`. The arguments follow the function one after
the other, separated with spaces rather than commas.

When we use functions such as addition written with symbols such as
`+` or `-`, we write them in the usual way, for example `x + y`.
These operators obey the usual precedence rules of textbook math, and
terms like `f x + y` mean the same as `(f x) + y` rather than `f (x +
y)`.  You can check the groupings by hovering the mouse cursor over
different parts of a step.  The parts that belong together will be
highlighted together.

<div class=proof-editor data-exercise="nat/nat0.2"></div>

#### Doing the two-step

The fact to be proved has two assumptions: `f x = y` and `f y = z`.
Between the two assumptions is the operator `&`, mathematical notation
for *"and"*.  The proof will have two steps.

Start by selecting the term `f x` on the left side of the conditional.
In the "Basic" menu down below you will see an item like `➭ y assuming
((f x) = y)`.  (If you don't see an item like that, make sure the
Basic menu is selected by pausing the mouse cursor over the word
"Basic".  Also make sure the term `f x` is still selected!)  When you
select that menu item you will see a second proof step:

`f x = y ∧ z = f y ⇒ z = f (f x)`

This step introduces a new assumption `f x = y`, an expected part of
the desired result.  The step now looks almost the same as the goal,
but the proof is not yet flagged as complete, because there is still
one mismatch with the goal.  The term `z = f y` in step 2 is displayed
in red.  To exactly match the goal we will have to reverse the left
and right sides of this equation.

Select the term `z = f y` in step 2.  You will see an item in the
Basic menu like `➭ f y = z using x = y == y = x`.  When you select
that item, the term becomes `f y = z`, and the proof is complete.

Here `x = y == y = x` is an equation with `x = y` as its left side and
`y = x` as its right side.  `x = y` and `y = x` are terms with values
that are true or false depending on the values of `x` and `y`.  We use
the symbol `==` to represent equality of boolean (true/false) terms.
When you use this fact here, Prooftoys substitutes `f y` for `x` and
`z` for `y` giving `z = f y == f y = z`, and replaces the selected
term with the equation's right side: `f y = z`, as you see in step 3.

Now let's start working with natural numbers!

#### ➭ [***Next***]({{< relref "/number-game/tutorial3.md" >}})

<!--

{{< figure src="/images/rewrite-menu.png" alt="The action menu" >}}

The next proof is still just one step, but one that shows a lot about
about how you prove things with Prooftoys.

This one uses another very fundamental mathematical fact, that if you
apply the same function to values that are equal, the results are also
equal.  We can write this as `x = y => f x = f y`.  It is a very
general and fundamental fact about functions.

In step 1, select the term `f (f a) = f b` on the *left*
side of the conditional, and look in the "Basic" menu, where you
should see a menu with:


Choose the menu item `➭ T when ... using x = y => (f x = f y == T)`.

This should add a step to the proof display, like this:

{{< figure src="/images/rewrite-result.png" alt="The completed proof" >}}

This is a good example of rewriting.

#### Rewriting with assumptions

written as ` . . . == T` means "is true", it is a *convention*. 

XXX

(What if you write `f x + y`?  In Prooftoys and most proof
assistants this has the same meaning as `(f x) + y`, ***not***
`f (x + y)`.  Somewhat similarly, the fessor of the fessor of
x is written `f (f x)`, ***not*** `f f x`.)

(Notice that in the second line of the proof, the description says "use
`(x = x) == T`".  This is a mathematical fact in the form of an
equation, and it enables you to replace a term like `x + y = x + y`
with `T` anywhere it may appear.)

(You can read conditional statements like `A => B` as "A implies B".
It is a true statement because any mathematical statement implies
itself.)

(*assumptions* connected with _and_, written mathematically as `&`.)

(highlighted in red)

### Background on working with assumptions

In working with assumptions Prooftoys uses extensions of the basic
principles, applying them to new situations, but it mostly handles
these behind the scenes, so you just need to follow a few simple rules
to succeed.

opportunities to connect them back to basic principles later.

-->
