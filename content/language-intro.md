---
title: 'About the language'
---

# The Prooftoys Language

## Statements and expressions

The language has only expressions, which are often referred to as
_terms_.  A statement in the language is just an expression whose
value is boolean, so either true or false.  Given an expression and
the definitions of the names used in it, it is easy to tell if the
expression has a boolean value and so can be interpreted as a
statement.

## Expression syntax

The language syntax is pretty conventional.  It has infix operators,
each having a certain precedence, and function calls.  Recall that
predicates and relations are also functions.  There are only three
kinds of expressions: _atomic_ expressions, which are either a
variable or a constant; function calls, which are either in function
call form or infix form; and functional expressions.

### Constants and variables

The logic has two kinds of names: identifiers and operator names.  An
identifier is an alphabetic character possibly followed by additional
letters, digits, and underscores ("_").

All variable names are identifiers.  A name that is a single letter,
optionally followed by an underscore and one or more digits, is a
variable name.  If there are any digits, they will display as a
subscript on the identifier.  The names "T", "F", "R", and "e" are
specially reserved for constants and cannot be used as variable names.

Every variable has a type, such as boolean or individual.  Prooftoys
does not currently provide a way to declare the type of a variable or
constant, but infers them.  Types of some constants such as `T`, `F`,
and numeric literals, are predefined.

An operator name is a sequence of printing (currently ASCII)
characters that are not letters or digits, brackets, braces,
parentheses, colon (":") or (".").

Numeric literals are a sequence of digits optionally preceded by "-".
The "-" is an operator otherwise.  Numeric literals only exist
for integers.

### Operators and infix

Constants named as operators are treated as infix operators, and infix
expressions are parsed according to their precedence .  The system
also designates a few other constants such as `div` and `mod` as
infix.  For more details on the specific predefined names, precedences
and more, see the [language summary](Language-Summary).

To suppress the infix nature of an operator, enclose just its name in
parentheses, as in `(+)`.

### Function calls

Calls to other functions, using a constant or variable name, or a
functional expression (see below), use the ordinary function call
syntax.  In this syntax, to call a function `f` with argument `x`,
write `f x`, where `f` could be any expresssion, though it should have
a function as its value.  For example `R x` means "x is a real
number".  To call a function with more arguments, just write the
expressions for all the arguments following the expression for the
function, e.g.  `log x 10`.

Ordinary function calls have precedence over all infix operators,
so `sin x / 2` means the same as `(sin x) / 2`.

On the other hand, an expression `f g x` represents
a call to `f` with two argument, `g` and `x`.
Also be sure to be aware that a call
to `f` with argument `g x` is written as `f (g x)`.

For example, a statement that might be conventionally
written as

{{% preblock %}}
`f(x) = x + 1`
{{% /preblock %}}

would be written in Prooftys as

{{% preblock %}}
`(f x) = x + 1`
{{% /preblock %}}

or omitting the parentheses around the function call, like this:

{{% preblock %}}
`f x = x + 1`
{{% /preblock %}}


### Functional expressions

Any expression can be enclosed in parentheses to guarantee its
grouping, but an expression enclosed in brackets or braces always
represents a function.  For example a definition of a function that
squares a number might look like:

{{% preblock %}}
`square = [x. x * x]`
{{% /preblock %}}


Similarly, a predicate that is true just for positive numbers could be
defined as:

{{% preblock %}}
`positive = {x. 0 < x}`
{{% /preblock %}}

providing a conventional set notation.

**Note:** Brackets and braces are parsed exactly the same, but Prooftoys
_displays all functions and predicates_  using **braces**, e.g. `{x. x * x}`.

For a relation (e.g. two argument predicate), the logic uses nested lambdas.
So we define "greater than" in terms of "less than" like this:

{{% preblock %}}
greater = {x. {y. y < x}}
{{% /preblock %}}

With this definition it is true that `greater x y == y < x`.

This is comparable to notation you might see else where, such as

{{% preblock %}}
greater = {(x, y) | y < x}
{{% /preblock %}}

### Quantifiers

A typical statement with a universal quantifier has a form like:

{{% preblock %}}
∀ {x. p x}
{{% /preblock %}}

and a typical existential statement looks something like:

{{% preblock %}}
∃ {x. p x}
{{% /preblock %}}

**Explanation.** Quantifiers are not fundamental concepts in this logic.
They are defined predicates that take an argument that is a collection.
The universal quantifier predicate is named "forall" and displays as `∀`.
The existential quantifier is named "exists" and displays as `∃`.

The term `{x. p x}` can be read as set notation, as something like
"the collection of `x` that have the property `p`". 

The boolean term `∀ {x. p x}` is true exactly if
every possible value of `x` has property `p`.

### Quantifiers without braces

An expression of the form `{x. p x}` can be shortened to just `p`,
and in some situations you will see a statement such as:

{{% preblock %}}
∃ p
{{% /preblock %}}

## Next steps

A good next step might be to introduce yourself to
[inference in Prooftoys](/inference/).
