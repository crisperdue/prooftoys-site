---
title: Solving equations
menu: menu-eqns.md
description: >
  Solve algebra problems with help from Prooftoys.
---

# Prooftoys basics: solving equations

Along with its other mathematical abilities, Prooftoys is good for
solving equations.  If you are brand new to using Prooftoys, solving a
couple of equations can be a good way to get used to the Prooftoys style
of working.

For basic algebra problems, the process for solving an equation with
Prooftoys is very much the same as what you would see described in a
textbook, and Prooftoys presents your progress toward the solution much
like a textbook would do.

Perhaps the biggest difference is that Prooftoys works entirely with
statements it knows to be true, not just some of the time, but always
for any values of the variables in it.  An equation like `x + 1 = 3` is
not always true -- it is true exactly when x is 2.  Any other value for
x gives the two sides of the equation different values, making the
equation false.

## About the notation in the proof builder

When using Prooftoys, if you are given an equation to solve, the steps
along the way often say that some statement is true exactly when the
"problem" statement is true.  This will look something like `<problem
statement> == <solution statement>`.  The "triple equals" (`==`),
known technically as *logical equivalence*, means that the left side is
true for exactly the same values of its variables that make the right
side true.

Almost all statements will also have asssumptions and resemble
`<assumptions> => (<problem statement> == <other statement>)`. The
double arrow `=>` is usally read as "implies", and the meaning of the
whole statement is that the problem statement and the other statement
are both true or both false whenever the assumptions are true.

Most often you will see assumptions that look like `R x`.  The use of
`R` makes it mean "x is a real number".  Since all numbers in basic
algebra are real numbers, it is reasonable for you to ignore assumptions
of this kind for now.

## Reading solution steps

A typical

## Basic linear equations

All of these have solutions of the usual kind. Solving any kind of equation with one variable consists of transforming the right side of the main equivalence ("`==`").  Each of the ones in this set has a single solution, so the right side will have the form `x = . . . `, where `x` is the equation's variable.

Pressing "Clear work" removes all but the problem statement, and "Solve" generates a pre-made solution. You can still edit the proof after that.

### Linear equation

<div class=proof-editor data-one-doc data-steps=
 "(steps (1 consider
            (t (((4 * ((2 * x) - 3)) + 7) = ((3 * x) + 5)))))"
></div>

### Another linear equation

<div class=proof-editor data-one-doc data-steps=
 "(steps (1 consider (t (8 * (2 - t) = -5 * t))))"
></div>

### Working with fractions

<div class=proof-editor data-one-doc data-steps=
 "(steps (1 consider (t (5 * x - 6 = 2 / 3))))"
></div>

### Common denominators

<div class=proof-editor data-one-doc data-steps=
 "(steps (1 consider (t (((5 * x) - (5 / 4)) = (2 / 3)))))"
></div>

<div class=footer-spacer></div>
