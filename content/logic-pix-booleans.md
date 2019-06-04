---
title: "Pix - functions"
menu: "/menu-logic-pix.md"
---

## Logical functions

##### Table of contents

{{< TOC >}}

Our introduction to basic logic emphasizes these mathematical functions that
have truth values as their inputs and a truth value as their result.
They can also be referred to as *truth functions* or *logical
functions*.

### Untrue: "not" (<s>not</s>)

The simplest of these functions is called `not`, also known
as negation.  Negation provides a way to talk about things that do not
have a certain property, ones that are not in a certain set, or where
the value of a predicate is `false`.  In our logic, these
are all just different ways of expressing the same idea.

The next group of pictures illustrate negation.  The parts of the
pictures in the first group that were green, or blue, or yellow are
white in this group.  The areas that were white in the first group of
pictures are marked here with stripes, indicating that in the original
picture they had the property of being
*not* green, *not* blue, or *not* yellow.

<canvas id=canvasNotA width=210 height=210></canvas>
<canvas id=canvasNotB width=210 height=210></canvas>
<canvas id=canvasNotC width=210 height=210></canvas>

So every point that was colored (true) in the first set of pictures is
white (false) here and each point that was white (false) in the first
set is shaded (true) here.  we can treat `not` as a
function that takes `true` or `false` as its
input and produces a value of `true` or `false`.
This behavior can be defined with a table.  You can look up the value
of `not x` by going to the row labeled with the value of
`x`, either `true` or `false`.

<table class=binaryTruthTable id=negationTable>
 <tr>
  <th rowspan=2><code>x</code>
  <th x=true>true
  <td x=true class=falsy>
 <tr>
  <th x=false>false
  <td x=false class=truthy>
  </table>
  
To use the table, look up the row labeled with the value of the input
"X".  The value of the function is in that row under "not X".  So
`(not false) = true` and `(not true) = false`.
Moving the mouse over one of these pictures or touching it on a touch
screen will cause the truth table entries to highlight.

This kind of table that shows the truth value produced by true or
false inputs to a function is called a *truth table*.  The
entries where the value is true are shaded with blue lines to
highlight the difference between true and false.  We will use this
color scheme in other truth tables as well.

In our notation we write the property of not being blue as
`not(blue x)` or `(not(blue x))`.
Of course we can also read this as saying that the predicate blue is
not true for x, or that x is not in the set of things that are blue.
In mathematics a statement like `(not(A x))` is
commonly called the negation of a statement
`(A x)`.  The negated statement is true of
all the things where theoriginal statement `(A x)` is false.

Another notation sometimes used for negation is "~".

### At least one true: "or" (`|`)

As an example of our next function, suppose you are thinking what to
have for lunch, and decide it must either be delicious or easy.  In
the first picture let circle D represent things that are delicious and
circle E represent things that are easy.  The combined area then
represents things that are delicious or easy.  We can write that a
thing x is "delicious or easy" as `(D x) | (E x)`.
Everything in the parts of the picture that are shaded have this
property.

The shaded part of the second picture also represents things that are
delicious or easy, this time using the same shading for all of them
instead of separate shadings for D and E.

<canvas id=canvasOrDE width=210 height=210></canvas>
<canvas id=canvasOrDE2 width=210 height=210></canvas>

All areas of the first picture that are shaded yellow or green are
shaded blue in the second picture.  Once again we can use a function
to model this relationship.  This function has two inputs.  Each input
value is *boolean* (true or false) and so is the result.  Again,
hover the mouse over either of the pictures to highlight the
appropriate parts of the truth table for the function named
`or` (`|`).

<table class=binaryTruthTable id=disjunctionTable>
 <tr>
  <th colspan=2 rowspan=2>
  <th colspan=2 style="text-align: center"><code>(E x)</code>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2><code>(D x)</code>
  <th x=true>true
  <td x=true y=true class=truthy>
  <td x=true y=false class=truthy>
 <tr>
  <th x=false>false
  <td x=false y=true class=truthy>
  <td x=false y=false class=falsy>
</table>

This truth table is organized with a row for each value of the first
input and a column for each value of the second input.  The value of
the function is in the row for the value of the first input and the
column for the value of the second input.  So for example
`(false | true) = true`.

### Both true: "and" (<s>&</s>)

Suppose you are feeling more picky about your lunch, and decide it
must be both delicious and easy.  Only things in both of the circles
fit this description -- the small shaded area in the next picture.  In
Prooftoys we write `((D x) & (E x))`.

<canvas id=canvasAndDE width=210 height=210></canvas>

Once again, at each point "x" in the picture,
`((D x) & (E x))` is true exactly when `(D x)`
is true and `(E x)` is also true.  We can define a
function with this truth table:

<table class=binaryTruthTable id=conjunctionTable>
 <tr>
  <th colspan=2 rowspan=2>
  <th colspan=2 style="text-align: center"><code>(E x)</code>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2><code>(D x)</code>
  <th x=true>true
  <td x=true y=true class=truthy>
  <td x=true y=false class=falsy>
 <tr>
  <th x=false>false
  <td x=false y=false class=falsy>
  <td x=false y=true class=falsy>
</table>

What if there is nothing that is both easy and delicious?  A picture
for that situation could like this:

<canvas id=canvasAndDE2 width=210 height=210></canvas>

The picture has no shaded area because region D and region E do not
overlap; there is no part of the picture where <s>(D x)</s> and
<s>(E x)</s> are both true.  If that really is your
requirement, in this scenario there is no possible lunch for you!

A common notation for conjunction is "`&`", for example
`p & q`.

### Equality: (`=, ==`)

A simple yet important property of truth values is equality.  In this
case we will give the truth table immediately:

<table class=binaryTruthTable>
 <tr>
  <th colspan=2 rowspan=2>
  <th colspan=2>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2>
  <th x=true>true
  <td x=true y=true class=truthy>
  <td x=true y=false class=falsy>
 <tr>
  <th x=false>false
  <td x=false y=true class=falsy>
  <td x=false y=false class=truthy>
</table>

It shows that `true` is equal to `true`, false
is equal to `false`, and neither one is equal to the other,
all as you would expect.  For boolean values it is sometimes written
as `==`.

{{< include "/pix.md" >}}
