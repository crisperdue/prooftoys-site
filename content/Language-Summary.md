---
title: Language Summary
draft: false
weight: 5
---

# The Prooftoys Language

The language is a computer-oriented notation for mathematical formulas. It allows variables for functions and predicates as well as individual values, so it is "higher-order". And it has notation for anonymous functions, see below.

The language is entirely based on expressions.  The parser and printer both support infix notation and precedence.  Internally though all functions take exactly one argument, so in an expression such as `x = y`, the `x = ` part represents a function that returns T exactly when given an argument that is equal to x.  In other words, functions are
"[curried](http://en.wikipedia.org/wiki/)".

## Special characters

The characters `"`, `'`, `(`, `)`, `[`, `]`, `{`, `}`,
`\`, `#`, `` ` ``, `:`, and `.` are special 
and never part of any variable, constant, or operator name.

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
| `\|` | ∨ | or
| `&` | ∧ | and
| `<, <=, >, >=` | <, ≤, >, ≥ | inequality operators
| `+, -` | +, - | add and subtract
| `*, /` | ⋅, / | multiply and divide

Negation and reciprocal are represented by `neg` and `recip`, which are unary operators,
which have higher precedence than binary operators, but lower precedence than named functions.

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

Like most other higher-order logics, our system is built on lambda calculus, in other words anonymous functions with named variables.
These are enclosed in braces a bit as in code blocks as seen in the
[Ruby](http://en.wikipedia.org/wiki/Ruby_(programming_language)#Blocks_and_iterators)
programming language or function blocks in the Smalltalk programming language,
like this: *`{x. x}`* for an identity function, with a dot (".") following the name of the
formal parameter.
