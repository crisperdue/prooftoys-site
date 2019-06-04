---
title: 'Pix - truth'
menu: "/menu-logic-pix.md"
---

## Statements that are always true

We will return soon to describe one more function that takes truth
values as inputs, but it may be easier to understand its importance
after some introduction to the idea of mathematical functions that
have the value `true` for all possible inputs, in other
words for all things in the universe.  These sorts of functions
are mathematically true statements.

Mathematics is especially interested in statements that are true by
mathematical reasoning -- in other words theorems.  If a mathematical
statement has variables in it, the statement is a true one if it is
true regardless of the values of the variables.  To emphasize that is
true for all possible values of the variables, these sorts of
statements are sometimes described as *universally* true.  We
will sometimes refer to them as "true everywhere".

### Statements with "or"

As an example let's consider the statement that every number is either
less than 100 or greater than 10.  We could state this as
`x < 100 | x > 10`.  In the picture for this
statement all shaded areas represent cases where the statement is
true.

<canvas id=canvasOrAll width=210 height=210></canvas>

This picture shows everything in the world (all numbers) in one or
both of the groups, and shows that some numbers are in both groups.

A more conventional and more informative picture might show a number
line and the values having both of the properties, like this:

<canvas id=canvasArrow width=310 height=100></canvas>

The statement `x < 100 | x > 10` is true regardless
of the value of `x`.  In mathematics, if the truth of a
statement does not depend on the values of variables in it, it
is considered simply a true or valid statement.

### Statements with "and"

For a statement with "and" to be true, both of its parts must be true.
In the statement's picture, both statements must be true at every spot
in the picutre.  Here is a picture illustrating a statement
`A & B` that is true, where A and B are both
true statements.

<canvas id=canvasAnd width=210 height=210></canvas>

### Statements like "all A are B"

Let's look at another typical kind of statement that has a logical
meaning, such as "all birds have wings".  We might also express this
as "if x is a bird then x has wings".  In our notation we can write
`(bird x) implies (wings x)` or alternatively
`bird x => wings x`.

The picture below illustrates a scenario where the statement is true.
The area representing all things with wings contains the entire area
that represents all birds.  There are also areas of the picture to
represent things with wings that are not birds, such as bats in the
real world, and flying insects.

<canvas id=canvasImplies width=210 height=210></canvas>

Any picture of this kind where one area encloses another (or occupies
the same area) illustrates a true statement of this kind.  But is
there a system for shading pictures like this so they are completely
shaded exactly when the statement is true?  It turns out there is.

Let's consider a picture where the statement is *not* always
true, like this:

<canvas id=canvasNotImplies width=210 height=210></canvas>

It is clear right away which part of the picture makes the statement
not always true -- the part of the "birds" circle outside the "wings"
area.

Anything in the picture that is not a bird does not affect the truth
of the statement.  If something is not a bird, it does not affect
whether this statement about birds is true.  If every part of the
picture is either in the "wings" circle or <b>not</b> in the "birds"
circle, the statement is true.

### Implication: "implies" (<s>⇒</s>)

Returning to functions with truth values as inputs and outputs, we
can see how to define one more key function.  This function enables us
to express statements like "all birds have wings" mathematically.  It
takes two truth values as inputs and produces true or false as its
value.  The previous example and pictures above apply here once again.

We call the function <s>implies</s> (alternatively
<s>⇒</s>), and it enables us to make statements that say
one thing implies another.  Here are two picture as before, but with
shading to show the areas where the expression
<s>(bird x) ⇒ (wings x)</s> has
<s>true</s> as its value.  First one where
it is true everywhere:

<canvas id=birdWingsTrue width=210 height=210></canvas>

Its truth table being:

<table class=binaryTruthTable id=implicationTable>
 <tr>
  <th colspan=2 rowspan=2>
  <th colspan=2 style="text-align: center"><b>wings</b>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2><b>bird</b>
  <th x=true>true
  <td x=true y=true class=truthy>
  <td x=true y=false class=falsy>
 <tr>
  <th x=false>false
  <td x=false y=true class=truthy>
  <td x=false y=false class=truthy>
</table>

In this scenario all birds do indeed have wings so the function is
behaving as intended.  And now a picture where the statement is not
true everywhere:

<canvas id=birdWingsFalse width=210 height=210></canvas>

The birds without wings are represented by the small white area with
no shading.  This is exactly the area where the value of the
<s>implies</s> function is false.  In this picture not all
birds have wings, so the function is indeed behaving as intended.

#### Vacuous statements

Special situations can lead classical logic to peculiar conclusions.
Can all birds larger than elephants fly to the moon?  In ordinary life
most of us would not say something like this because we know there are
no birds larger than elephants.  But nothing in our logic prohibits
such a statement, and if there are no birds larger than elephants in
our world, our logic takes this to be a true statement.

How can this be?  Consider that there are *no examples that break
the rule*, no birds that are larger than elephants but
cannot fly to the moon!  The truth table entries in the row where the
first input is <s>false</s> both have the value
<s>true</s>, so the <s>implies</s> function has the value
<s>true</s> everywhere.  If the there are no birds larger than
elephants, all of them can fly to the moon!

Mathematicians recognize that this is a strange situation and refer to
such as statements as *vacuously true*, meaning true but useless
because their conditions never apply.  In standard logic things that
do not exist can have *any* property, even contradictory
properties.  Taking our example a couple of steps further, all birds
larger than elephants are blue, and all birds larger than elephants
are also green.  This is possible only because these statements are
vacuous.

### Combining logical functions

The logical functions can be combined into complex expressions.  In
the lunch example, where D is an abbreviation for "delicious" and E is
an abbreviation for "easy", the expression
<s>(not ((D x) & (E x)))</s> refers to things that are
*not* easy and delicious.

<canvas id=DnandE width=210 height=210></canvas>

The value of this function at each point depends on the values of
<s>(D x)</s> and <s>(E x)</s> at the same point, and its
truth table can be computed by first looking up the value in the truth
table for <s>and</s>, then looking up the value of the result in
the table for <s>not</s>.

<table class=binaryTruthTable id=nandTable>
 <tr>
  <th colspan=2 rowspan=2>
  <th colspan=2 style="text-align: center"><s>(E x)</s>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2><s>(D x)</s>
  <th x=true>true
  <td x=true y=true class=falsy>
  <td x=true y=false class=truthy>
 <tr>
  <th x=false>false
  <td x=false y=true class=truthy>
  <td x=false y=false class=truthy>
</table>

The expression <s>(not (D x) & not (E x))</s> refers to things
that are neither delicious nor easy; unfortunate for the eater, but
fortunate for things that do not wish to be eaten.

<canvas id=DnorE width=210 height=210></canvas>

Once again we can build each entry in this truth table by looking up
the values of the subexpressions, first negating each input, then
looking up the results in the table for <s>and</s>.  Logical
expressions combine the same way arithmetic expressions do, but the
calculation is even easier because you only have to look up the
results of each part in a table.

<table class=binaryTruthTable id=norTable>
 <tr>
  <th colspan=2 rowspan=2>
  <th colspan=2 style="text-align: center"><s>(E x)</s>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2><s>(D x)</s>
  <th x=true>true
  <td x=true y=true class=falsy>
  <td x=true y=false class=falsy>
 <tr>
  <th x=false>false
  <td x=false y=true class=falsy>
  <td x=false y=false class=truthy>
</table>


## Tautologies

Some statements are not just true everywhere, they are true everywhere
in every possible picture.  Consider the statement
`(blue x) | (not (blue x))`, "either x is blue or x
is not blue".  It does not matter how many things are blue, or which
things are blue.  It doesn't even matter if any things at all are
blue.  If we make a picture with one area for blue things and the rest
for things that are not blue, every part of the picture will be in one
of these two parts, either inside the "blue" area or not inside it.

This is an application of a *tautology*. Tautologies are true
regardless of the truth of their parts.  Statements of this sort occur
constantly in normal mathematical reasoning, sometimes explicitly and
even more often implicitly behind the scenes.

If a statement is a tautology, this can be verified just by building
its truth table.  If all of the entries are <s>true</s>, it is a
tautology.  The statement `(blue x) | (not (blue x))` is
indeed a tautology, and its truth table has the value
<s>true</s> everywhere.  Although the expression is complex
this table has only two entries because it has only one variable,
which is either <s>true</s> or <s>false</s>.

<table class=binaryTruthTable id=tautology1>
 <tr>
  <th rowspan=2><s>(blue x)</s>
  <th x=true>true
  <td x=true class=truthy>
 <tr>
  <th x=false>false
  <td x=false class=truthy>
</table>

The inputs to some of the truth tables are labeled with expressions
such as `(D x)`, `(E x)`, or `(blue x)`.  It doesn't matter whether an
input is given by a variable or some expression.  All that matters is
that different expressions are handled as different inputs.  If an
expression (such as `(blue x)`) appears more than once in the full
expression (such as `(blue x) | (not (blue x))`, all of its
occurrences will have the same value when given the same value for
`x`.

Tautologies properly are expressions with just variables and logical
functions in them.  More complex *instances* of a tautology can be
constructed from it by substitution.

{{< include "/pix.md" >}}
