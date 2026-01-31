---
title: Emulating logic textbooks
description: >
  Prooftoys is a simple, easy to learn and use use proof
  assistant for beginners.
---

# Emulating proofs from logic textbooks

If you are working with a logic textbook and it does not say what kind
of logic it uses, the book is more than likely presenting first-order
logic, starting with propositional logic.  It is straightforward to use
the Proof Builder to create proofs according to their rules.  You will
need to be careful though to limit yourself to the kinds of proof steps
your textbook includes.  You can be pretty sure that Prooftoys supports
more powerful inference steps than your textbook presents, and in fact
the logic of Prooftoys can express ideas that cannot be directly
expressed in weaker logics.  Again, to build proofs like theirs, as for
a course in logic, it is essential to follow their rules!

I have encountered references to a couple of textbooks with very similar
systems of logic --- "Introduction to Logic" by Copi and Cohen, and "A
Concise Introduction to Logic" by Patrick Hurley.  Here is a complete
list of their rules, as translated into the logic of Prooftoys.

1. **Modus ponens** (MP):\
  The Prooftoys logic also presents this as a rule of inference.

2. Modus tollens (MT):\
  `(p => q) & ∼q => ∼p`

3. Pure hypothetical syllogism (HS):\
  `(p => q) & (q => r) => (p => r)`

4. Disjunctive syllogism (DS):\
  `(p | q) & ~p => q`

5. Constructive dilemma (CD):\
  `((p => q) & (r => s)) & (p | r) => q | s`

6. Simplification (Simp):\
  `p & q => p`

7. **Conjunction** (Conj):\
  This translates into the "and" rule of inference

8. Addition (Add):\
  `p => p | q`

Rules of replacement:

9. De Morgan’s rule (DM):\
  `∼(p & q) == (∼p | ∼q)`\
  `∼(p | q) == (∼p & ∼q)`
10. Commutativity (Com):\
  `(p | q) == (q | p)`\
  `(p & q) == (q & p)`
11. Associativity (Assoc):\
  `[p | (q | r)] == [(p | q) | r]`\
  `[p & (q & r)] == [(p & q) & r]`
12. Distribution (Dist):\
  `[(p & q) | r] == [(p & q) | (p & r)]`\
  `[p | (q & r)] == [(p | q) & (p | r)]`
13. Double negation (DN):\
  `p == ∼∼p`

14. Transposition (Trans):\
  `(p => q) == (∼q => ∼p)` 

15. Exportation (Exp):\
  `[(p & q) => r] == [p => (q => r)]`

16. Material implication (Impl):\
  `(p => q) == (∼p | q)`

17. Material equivalence (Equiv):\
  `(p == q) == [(p => q) & (q => p)]`\
  `(p == q) == [(p & q) | (∼p & ∼q)]`

18. Tautology (Taut):\
  `p == (p | p)`\
  `p == (p & p)`

Copi and Cohen include "Absorption": `p => q == p => (p & q)`

## Translation into Prooftoys

In the Prooftoys logic (simple type theory) all of these except modus
ponens and conjunction are propositional statements rather than rules of
inference.

### Rules of replacement

Equality is a fundamental part of simple type theory, and logical
equivalence (`==`) is the equality relation for propositions.  In fact the
formulation of simple type theory that we use is replacement of a term
by an equal term, wherever it may appear, as conceived by Leibniz.
As a result, in Prooftoys all of the rules of replacement in the list
above become statements of equality / logical equivalence.  All such
statements can be used to replace an occurrence of the left side of the
equivalence with the right side, _wherever it may occur_, even as a part
of some more complex statement.

To use any of these replacement rules in Prooftoys, select any part of a
proof step matching the left hand side of one of them.  The Proof
Builder menu will offer to apply any matching equivalence to that term.

### Other elementary valid argument forms

In simple type theory most of the remaining "elementary valid argument
forms" become conditional statements with a conjunction on the left hand
side (antecedent).  Prooftoys makes modus ponens available as a rule of
inference, and the "conjunction" rule is also a rule of inference.

For the others, probably the most natural way to proceed in the Proof
Builder is to select one entire proved step, then choose the
[[appropriate!]] menu item and join the first step with another step,
creating a conjunction.  Select the entire resulting step.  The menu
should offer to apply any rule(s) with matching left hand sides.  Ask it
to apply the rule of your choice.

Prooftoys considers this to be "forward reasoning". [[Details??]]

Working this way inserts two smaller steps into your proof rather than
one somewhat larger step, but it is convenient to use because you don't
have to remember the name of any rule, and the user interface finds
correct matches for you, preventing user errors.

### General comments

Conditional proof (Hurley) is like proof from hypothesis in other
systems of logic.  Prooftoys also treats these as forward reasoning.
[[More details here]].





