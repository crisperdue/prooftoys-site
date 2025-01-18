---
title: Simplification
menu: menu-docs.md
---
# Simplification in Prooftoys

Simplification is a process that works on some part of a step, using
basic inference rules.  It generally makes the step smaller (shorter),
and generally makes it look simpler to the human eye.  When you use
the proof builder, it automatically applies certain simplifications to
the results of most steps for you, since that is usually helpful in
solving problems and proving theorems.

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
