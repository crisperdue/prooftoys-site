---
title: Simplification
---

# Simplification in Prooftoys

Simplification is not really a new or different form of inference in
Prooftoys, but it is a very useful convenience.

Simplification is a process that works on some part of a step, making
it, shall we say, simpler, and this generally means making it smaller.
When you use the proof builder, it automatically applies certain
simplifications to the results of most steps for you, since that is
usually desirable.

Simplification is done by finding opportunities to use some rewrite
rules, and applying the rules, repeatedly if possible, to simplify
those parts.  When doing math by hand, we often apply simplification
with hardly a thought.  For example if we see a term `2 * x + 0`
anywhere, we mentally erase the 0 and change it to `2 * x`.  This is
an application of the rewrite rule `x + 0 = x`, which is a fact about
the real numbers.

Usually simplification looks for opportunities to apply any rule in a
whole set of rewrite rules.  The rewrites that are useful can vary
from one situation to another, but the process is still the same.
