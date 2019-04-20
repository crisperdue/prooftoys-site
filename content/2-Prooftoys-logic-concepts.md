---
title: 'Concepts'
date: 2019-02-11T19:27:37+10:00
weight: 2
---

# Prooftoys logic concepts

## Values and types

The fundamental types of things the logic works with are boolean values
(true and false written as `T` and `F`), and individuals.  Individuals
are anything else that is not a collection or function of some kind.
The individuals you will usually see in Prooftoys are numbers.

All values in the logic are boolean values, individuals, or functions
of some kind.  The boolean operator "not", for example, is a function that maps from
a boolean value to a boolean value.  The boolean operator "and" maps
from a pair of boolean values to a boolean value.  The function that
maps a number x to `x * x` maps from individuals (specifically numbers) to
individuals.

In the Prooftoys logic functions
such as addition and multiplication have inputs that are individuals and
outputs that are also individuals. 

Collections in this logic are functions whose values are boolean, so there
is no technical difference between a collection and a predicate or even
a relation.

There can also be functions that have functions
as inputs and even functions or collections as outputs.

The next step is [Reading statements](3+Reading+statements).
