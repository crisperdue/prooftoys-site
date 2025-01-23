---
title: Quickref
menu: menu-docs-plus.md
---

# Prooftoys syntax quick reference

For more complete and precise information, see
[the full reference]({{< relref "/language-intro.md" >}}).

## Logic operators

| Concept           | English | Symbol        | Text entry |
| -----             | ------- | --------      | --------   |
| Untrue            | not     | `not`    | not        |
| At least one true | or      | `\|`     | \|         |
| Both true         | and     | `&`      | &          |
| Conditional       | implies | `=>`     | =>         |
| Equivalent        |         | `==`     | ==         |
| True for all      | for all | `forall` | forall     |
| True for some     | exists  | `exists` | exists     |

Precedence of infix operators in order from highest to lowest,
is `&, |, =>, ==`.

The rest are functions, which bind tighter than
infix operators, so `not a & b` means the same as `(not a) & b`.

## Basic math

Basic binary math operations are: <tt>+, -, *, /,
**</tt> (exponentiation). Exponentiation has the highest precedence,
followed by multiplication and division, followed by addition and
subtraction.  The negative of a number is expressed by the function
`neg`, which displays as a prefix `-`.

## Variables and constants

Variable names have a single alphabetic character, such as `x` or `A`.
The single letter may be followed by digits or a single underscore and
then digits.  A variable name may also begin with `$`, but these are
mainly intended to be introduced by the system.

Names with multiple alphabetic characters are always constants, and
may also include digits.

The characters <tt>".", ",", "(", "{", "["</tt> are reserved as parts
of the syntax. Sequences of characters that are not letters or digits
and not reserved for the syntax are also constants.

