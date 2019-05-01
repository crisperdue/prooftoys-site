---
title: extras
draft: true
---

### Functions

In mathematics a function named `f` is often defined
with a statement like this:

> `f(x) = x + 1`

In our notation we write:

<blockquote>
`(f x) = x + 1`<br>
</blockquote>

or omit the parentheses around the function call, like this:

<blockquote>
`f x = x + 1`<br>
</blockquote>

So:

<blockquote>
`f 0 = 1`<br>
`f 1 = 2`<br>
`f 2 = 3`
</blockquote>

and so on.  A function produces a result value given an input value or
values.  The addition function (`+`) for example
takes two numbers as input and gives a number as its result, as in
`3 + 5 = 8`.  The function `f` above takes a
number as input and produces a number as its result.  The value of a
function can depend only on its inputs, nothing else.  And given the
same inputs on different occasions any mathematical function must have
the same result each time.

A function can have the same result regardless of the input, for
example the function defined by `(f x) = 1`.  A function of
this sort is a <i>constant function</i> because its result does not
vary with different inputs.  But no function can give different
results given the same inputs twice.

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
