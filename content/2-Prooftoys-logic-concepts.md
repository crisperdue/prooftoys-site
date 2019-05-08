---
title: 'Concepts'
date: 2019-02-11T19:27:37+10:00
weight: 2
---

# Prooftoys logic concepts

## Values and types

The fundamental kinds of things the logic works with are "true", "false",
 and *individuals*.  "True" and "false" are written as `T` and `F`. Individuals
are anything else that is not a collection or function of some sort..
In Prooftoys these are usually numbers.

### True and false

The values true and false, written `T` and `F`, are known as _truth values_.  These are often
referred to as boolean values in honor of
<a href="http://en.wikipedia.org/wiki/George_Boole" target=_blank>
George Boole</a>, a pioneer in the development of these ideas.

Prooftoys takes "not", for example, as a function that has
a truth value as input and a truth value as its output. In Prooftoys and most logics it is written as "¬". Suppose we say
that x is not less then ten: `¬(x < 10)`. In this example if `x < 10` is true,
`¬(x < 10)` is false.  if `x < 10` is false, `¬(x < 10)` is true.

Similarly, "and" is taken as a function
from two boolean values to a boolean value, and is written as "∧". So we express that idea that x is greater than zero and less than 10 by writing `x > 0 ∧ x < 10`.  This whole statement is true if it is true that `x > 0` and it is also true that `x < 10`.  If either of them is false, the whole statement is false.

### Functions, predicates, and relations

All values in Prooftoys are boolean values, individuals, or functions.

Functions
such as addition and multiplication have inputs that are numbers (individuals) and
outputs that are also numbers.

A *predicate* tests a value and gives a true/false result. For example, to test whether a number is even we can use a predicate, *even*.

A *relation* such as *less than* tests whether a number is less than another number, for example `x < y`. It has two inputs and gives a true/false result.

So predicates and relations are functions that produce values that
are `true` or `false`. 

A function can also have functions
as inputs and even functions as outputs.

Collections are functions whose values are boolean, so there
is no technical difference between a collection and a predicate or relation.

The next step is learning to [reading statements](/language-intro)
in the language.
