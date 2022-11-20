---
title: Language summary
description: >
  Details of the Prooftoys language.
---

# The Prooftoys Language

The language is a computer-oriented notation for mathematical
formulas. It allows variables for functions and predicates as well as
individual values, so it is "higher-order". And it has notation for
anonymous functions, see below.

The language has only expressions.  The parser and printer both
support infix notation and precedence of operators, so for example it
fills in parentheses so `2*x + 3*y` means the same as `(2*x) +
(3*y)` and not `((2*x) + 3)*y` or even something different.

## Special characters and tokens

The characters `"`, `'`, `(`, `)`, `[`, `]`, `{`, `}`,
`\`, `#`, `` ` ``, `:`, and `.` are special 
and never part of any variable, constant, or operator name.

The token `->` is reserved for representation of lambdas (function
literals).

## Variables and constants

A letter optionally followed by any number of letters, digits, and underscores
is an identifier.

For example `a`, `b`, `x`, `x_1`, `P`, `PI`, `y0`,  `sin`, and `log10` are identifiers.

A variable name is a single letter optionally followed by an underscore and one or more digits. 
The identifiers `T`, `F`, `R`, and `e` however are reserved for names of commonly-used constants.

For example `a`, `b`, `x`, `x_1`, and `P` are variable names, but `PI`, `y0`,
`sin`, and `log10` are not.

Only variable names are allowed as the bound variable in a function literal, and substitution can only be applied to variables, not constants.

Any identifier that is not a variable name is a constant name. Also, any sequence of graphic characters other than alphabetics, numerics, underscores, dollar signs, parentheses, braces, brackets,
single- and double-quotation marks, backquotes, colons, semicolons, commas and dots is a constant name.

Sequences of characters that are not whitespace, not reserved as shown above, and not letters,
digits, or underscores are operator names.  All operator names are constant names.

All of `R`,  `pi`, `sin`, `log10`, `>=`, and `-->` are constant names.

Only constants can have definitions.

**Numeric literals.** Prooftoys treats the usual numeric literals as representing real numbers.  Currently
only integer literals are supported.  An expression such as `-2` is always an integer literal, so when subtracting be sure to leave a space between the `-` and a following literal number.

**Other literals.** The language has string literals beginning and ending with the quote character
("). Within a string literal, occurrences of backslash (\) followed by any other character are part
of the string literal.  So `"\""` is a string literal.

Literals of course have predefined values and cannot be defined by users.

## Operators

Names of the boolean operators favor programming language practice over mathematical logic, with &and | for _and_ and _or_.  The infix operators in order of increasing precedence are:

| *Symbol* | *Display* | *Typical usage* 
|----------|-----------|----------------
| `==` | ⇔ | Logical equivalence.  Note: currently same as = but lower precedence
| `=>` | ⇒ | implication
| `=, !=` | =, ≠ | equality and its negation
| <code>\|</code> | ∨ | or
| `&` | ∧ | and
| `<, <=, >, >=` | <, ≤, >, ≥ | inequality operators
| `+, -` | +, - | add and subtract
| `*, /` | ⋅, / | multiply and divide

## Functions

Functions with names that are identifiers, both constants and variables, have higher
precedence than any of these, so for example
```
f x * g y
```
is the same as 
```
(f x) * (g y)
```
and both of these have calls a function `f` and a function `g`, each taking one argument.

To call a function `f` with multiple arguments, simply write an additional expression for each
argument, like this:

    f (x + y) z (g w)

This represents a call to `f` with arguments `x + y`, `z`, and `g w`
Predicates use the same notation.

Writing `f(x)` means the same as `f x`, but `f (x y)` is a call to a function `f` of one
argument, the result of applying function `x` to `y`, *not* a call to a function `f`
of two arguments.

#### Special operators/functions

The logical "not" operator is just a function, so `not a | b` is the
same as `(not a) | b`.

Similarly, negative and reciprocal are represented by "neg" and "recip", which
are just functions.  So `neg x + y` is the same as `(neg x)  + y`.

#### Function expressions

The language has a form of the traditional "set notation" for
predicates, as in `{x. x < 10}` ("the set of x such that x is less
than ten").  In this example the first `x` is known as the bound
variable, and the `x < 10` is the body of the function.  The Prooftoys
language extends the notation to functions, for example `{x. x * x}`
for a function that computes the square of a number.  The key
difference from set notation is just that the body can have a value
that is not boolean.  Prooftoys may display a function of this kind
as `(x -> x * x)` if the type of its value is not boolean.

In Prooftoys the value of `{x. x < 10}` for example is a predicate,
like any other.  So it is not necessary to write something like
`z in {x. x < 10}`.  You can just write it like a predicate or function
call: `{x. x < 10} x`.
