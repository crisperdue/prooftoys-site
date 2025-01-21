---
title: QuickStart
description: >
  Quick introduction to Prooftoys through basic algebra
---
# <center>The Computer as a</center>

## <center>Mathematics Partner</center>



The universe --- everything from the motions of the stars to the changing of the seasons to the functioning of every motor and electronic device --- is ruled by the power of mathematics.

Schools teach the subject, but unfortunately too much of the mathematics taught in schools is more like a book of recipes, and the instructions only help in solving a few kinds of simple problems. Even up to the college level, the precise reasoning behind it all is given little attention.

This need not be so. There are complete systems of mathematical reasoning that are powerful and practical enough to develop even advanced mathematics, and yet based entirely on principles introduced in any basic algebra textbook.

This website and the tools on it are dedicated to showing how you can approach your math challenges with a practical toolkit useful anywhere you may need to apply mathematics.
-->

## Basic algebra quick start

### The language

> "The universe ... cannot be understood unless one first learns
> to comprehend the language in which it is written.
> It is written in the language of mathematics." -- Galileo Galilei

Fortunately, the mathematical language used in basic algebra textbooks is just fine as far as it goes.  The operations of addition, subtraction, multiplication, division, equality, negation, and inequalities are all respected parts of mathematics, as are variables and constants. To make the jump to proper mathematical reasoning, we need just a handful of additional concepts and their notations. These are all familiar as well, though basic textbooks don't treat them as part of the language.

Let's introduce two of these symbols right now. One is commonly read as "if-then". For example, it is true that if `x < 2` then `x < 3`. We can write this in the language of mathematics as `x < 2 => x < 3`. It can also be read as "x is less than 2 implies x is less than 3". Any statement like this with left and right parts and `=>` in the middle is a **conditional** statement.

The other new symbol is often read as "if and only if", and we write it as `==`. For example `x < y == y > x` is a true statement about numbers. For any values of `x` and `y`, either `x < y`  is true and `y > x` is also true, or both of these statements are false. Either way they are *equally true* or not true. This operator is sometimes called *logical equivalence*.

 [Another section](http://localhost:1313/logic-pix-intro/) of this website has details on these symbols and more.

### Statements in the language

One typical statement in this mathematical language is the *commutative law* of addition, commonly presented in textbooks. It looks like:

{{% preblock %}}
`R x and R y => x + y = y + x`
{{% /preblock %}}

`R x` means "`x` is a real number", and `R y` means "`y` is a real number". Being on the left side of this conditional statement, they are known as the **assumptions** of the statement. We will sometimes refer to the right side of a conditional statement as its **conclusion**.

### Problem statements

A solution of an equation is a statement equivalent to it. The classic form of a solution is a term that looks something like `x = ... `, such as `x = 2` or `x = 2 * pi / 3`. Since our variables are usually real numbers, we normally start with a statement that the equation is equivalent to itself when the variables are among the real numbers.

Here is an example problem statement:

<div class="proof-display mb-4" data-require-reals data-steps='
(steps
(1 solveReal (t (((2 * x) - 13) = 9)))
)'>
</div>

It is a typical example of equation-solving problem statements.

If we are able by proof to transform one of those into something like `x = <some number>`,  we have solved the equation.  As we work on solving the problem step by step we transform the right side of the equivalence into the desired form, leaving the left side unchanged

For us a solution to this problem will look like:

{{% preblock %}}
`R x => 13 - 2 * x = 5 == x = 4`
{{% /preblock %}}

In traditional terms, the solution of this equation is `x = 4`.

### Solving the problem

The display just below is an instance of the Prooftoys proof builder. For now, see [this page](/number-game/tutorial1/) for an orientation to it.


<div class=proof-editor data-one-doc data-steps='
(steps (1 solveReal
            (t (13 - 2 * x = 5)))
)'>
</div>

Another page has [more problems like this one](/equations/). Or see [here](/hands-on/#algebra) for a bit wider variety of algebra (and other) problems and examples.