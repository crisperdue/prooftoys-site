---
title: Quickref
---

# Prooftoys language quick summary

For more complete and precise information, see
[the full reference]({{< relref "/language-intro.md" >}}).

## Logic operators

| Concept           | English | Display  | Text entry |
| -----             | ------- | -------- | --------   |
| Untrue            | not     | `not`    | ~ or `not` |
| At least one true | or      | `\|`     | \|         |
| Both true         | and     | `&`      | &          |
| Conditional       | implies | `=>`     | =>         |
| Equivalent        |         | `==`     | ==         |
| True for all      | for all | `forall` | forall     |
| True for some     | exists  | `exists` | exists     |

Precedence of infix operators in order from highest to lowest,
is `&, |, =>, ==`.

Prefix operators are syntactically the same as functions, which bind
tighter than infix operators, so `~ a & b` means the same as `(~ a) &
b`.

## Basic math

Basic binary math operations are: <tt>+, -, *, /,
^</tt> (exponentiation). Exponentiation has the highest precedence,
followed by multiplication and division, followed by addition and
subtraction.  The negative of a number is expressed by the function
`neg`, which displays as a prefix `-`.

You can enter a negative number in the usual way like `x + -6`.  As an
argument of an ordinary function call, enclose it in parentheses, like
`f (-6)` to clearly distinguish it from subtraction.

## More math

The language has terms that represent sets and functions, expressed in a
form like `{x. x * 2}`, which represents a function that multiplies a
number by 2.

Prefix operators such as `~` follow the same syntactic rules as ordinary
function calls, and there are additional infix operators each with its
own predefined precedence, always left-associative.

## Variables and constants

Variable names start with a single alphabetic character, such as `x` or
`A`. The single letter may be followed by digits, e.g. `x1`, which will
display as `x_1`; and
optionally ended with one or more underscores, which display as
"prime"s, like `x'`.

Names with multiple alphabetic characters are always constants, and
may also include digits.

The characters <tt>".", ",", "(", "{", "["</tt> are reserved as parts
of the syntax. Sequences of characters that are not letters or digits
and not reserved for the syntax are also constants.

This is only an introduction.  See [the full reference]({{< relref
"/language-intro.md" >}}) for more.

