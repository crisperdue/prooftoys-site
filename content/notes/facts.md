---
title: Facts
menu: menu-docs.md
sitemap:
  disable: true
---
# Facts

In Prooftoys any statement with a proof is referred to as a fact.
Usually we don't worry about which axioms its proof relies on, but in
general theories with different sets of axioms have different facts.
In some sense a fact is the same thing as a theorem, but most facts
are just steps in a proof of something more important, so we use
a separate term for them.

An important concept in the Prooftoys proof builder is that
some facts are _registered_, meaning they are recorded in a registry
and can be looked up later by their statements.

A Prooftoys registered fact can be looked up using different variable
names than the ones in the statement originally recorded, and both
free and bound variable names can differ.
