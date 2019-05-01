---
title: 'Logic through pictures'
date: 2019-02-11T19:27:37+10:00
weight: 2.5
---

# Logic through pictures - introduction

{{< TOC >}}

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

## Logical functions

Our introduction to basic logic emphasizes these mathematical functions that
have truth values as their inputs and a truth value as their result.
They can also be referred to as *truth functions* or *logical
functions*.

### Untrue: "not" (`not`)

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
  <th colspan=2 style="text-align: center">`(E x)`
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2>`(D x)`
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

### Both true: "and" (`&`)

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
  <th colspan=2 style="text-align: center"><s>(E x)</s>
 <tr>
  <th y=true>true
  <th y=false>false
 <tr>
  <th rowspan=2><s>(D x)</s>
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

### Implication: "implies" (<s>&rArr;</s>)

Returning to functions with truth values as inputs and outputs, we
can see how to define one more key function.  This function enables us
to express statements like "all birds have wings" mathematically.  It
takes two truth values as inputs and produces true or false as its
value.  The previous example and pictures above apply here once again.

We call the function <s>implies</s> (alternatively
<s>&rArr;</s>), and it enables us to make statements that say
one thing implies another.  Here are two picture as before, but with
shading to show the areas where the expression
<s>(bird x) &rArr; (wings x)</s> has
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
such as `(D x)`, `(E x)`, or `(blue x)`.  It doesn't matter whether an input
is given by a variable or some expression.  All that matters is that
different expressions are handled as different inputs.  If an
expression (such as `(blue x)`) appears more than once in the full expression
(such as `(blue x) | (not (blue x))`, all of its
occurrences will have the same value when given the same value for `x`.  It is not possible for one occurrence to
have the value <s>true</s> and another one the value `false`.  They count as one input. Tautologies properly are expressions with just variables and logical
functions in them.  This is the simplest way to write down the
principle of a tautology, and more complex *instances* of
tautologies can be built from them by substitution. Just a few examples of commonly-encountered tautologies are: Assigning all combinations of <s>true</s> and <s>false</s>
to the variables in these expressions and checking that the value of
the expression is true will verify that these all really are
tautologies.

## Substitution

Substitution for variables is one of the fundamental operations in
virtually all forms of mathematical proofs and mathematical problem
solving.

If a mathematical statement has a variable in it, we say the statement
is true if it is true for all possible values of the variable;
otherwise we say it is not true.  If the variable is a boolean
variable, we say the statement is true if it is true regardless of
whether the variable is true or false.

So if a variable appears more than once in a true statement, we know
the statement will be true as long as each occurrence is assigned the
same value.  Since an expression with the same inputs always gives the
same result, substituting an expression for *every occurrence* of
a variable in a true statement gives another true statement.

In a true statement, if we systematically replace every occurrence of
a variable with an expression (the same expression everywhere), the
result of this *substitution* is another true statement, because
the expression has the same value everywhere it appears.

The simple tautology <s>a &rArr; a</s> is a true statement,
since <s>true &rArr; true</s> and
<s>false &rArr; false</s>.  A statement like
<s>(shining sun) &rArr; (shining sun)</s> is also
true whether the sun is actually shining or not.  The substituted
expression itself can have variables, as in
<s>x &lt; y &rArr; x &lt; y</s>.  No matter what values
<s>x</s> and <s>y</s> have, the value
of <s>x &lt; y</s> is going to be the same in both spots, so the whole statement
is still true.

The result of substituting an expression for all instances of a
variable in a statement is called an *instance* of the original
statement, so we say that substituting one or more expressions for
variables in a tautology gives an *instance* of the tautology.

<b>Note:</b> If a mathematical statement has parts that use
"quantifiers" ("for all", "there exists", etc.), substitution has to be
done a bit more carefully, but the idea remains the same.

{{< include "/pix.md" >}}
