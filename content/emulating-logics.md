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
expressed in weaker logics.  Again, to build proofs like theirs, for
example if you are taking a course in logic based on one of them, it is
essential to follow their rules!

## Proving tautologies

A statement that is true by logic alone, especially propositional logic,
is known as a tautology.  The system summarized below is for reasoning
in propositional logic.

Tautologies are very useful as part of reasoning in any classical logic,
which is what is presented in almost any textbook and used by the great
majority of mathematician.

Because propositional statements can be analyzed with a finite truth
table covering their finite number of possible cases, it is possible to
systematically determine whether such a statement is a tautology.  The
Prooftoys tautology verifier proves tautologies internally using the
Prooftoys logic.  If the statement is not true, it reports that, too.

## Modus ponens in ordinary mathematics

Modus ponens is a concept distinct from the hypothetical reasoning
outlined below.  In ordinary mathematics a simple example modus ponens
would be: `ZZ 1` (1 is an integer); also `ZZ x => R x` (if x is an
integer, it is a real number); thus `R x`.  ("Thus x is a real number.")

In set theory notation this is `1 in ZZ`; `x in ZZ => x in R`; thus
`x in R`.  The reasoning is the same.

This is not hypothetical reasoning --- each step in the proof is a true
statement, not a hypothesis.

Prooftoys can do exactly this chain of reasoning.

- Ask the proof builder to "look up a fact", and type in `\ZZ 1`.  This
  will create the first line of the proof.
- Again ask the proof builder to "look up a fact", and enter `\ZZ x => R
  x`.  This will create the second line of the proof.
- In the first step select the term `ZZ 1`.  Don't make the proof
  builder select the step with its step number, just `ZZ 1`.  Then in
  the menu ask to "chain with step 2".  Chaining or forward chaining is
  how we refer to inferences like modus ponens in Prooftoys.
- You should see the conclusion of the proof: `R 1` as the third line.

You can also build the same proof with just two commands rather than
three.  For this:

- Ask the proof builder to "look up a fact", and type in `\ZZ 1`.  This
  will create the first line of the proof, as before.
- The proof builder has an internal database of useful facts that it
  knows ways to match with your selection.  Select the term `ZZ 1` as
  you did before.  This time, in the menu find the option to "chain with
  `(ZZ x => R x)` and select it.  The proof builder will produce `R 1`
  as the next proof line without making you enter the fact first.  The
  line description will say "reasoning forward from step 1 with `ZZ x =>
  R x`".

## A specific (pair?) of systems

I have encountered references to a couple of textbooks with very similar
systems of logic --- "Introduction to Logic" by Copi and Cohen, and "A
Concise Introduction to Logic" by Patrick Hurley.  Here is a complete
list of their rules, as translated into the logic of Prooftoys.

### Elementary valid argument forms

These almost-identical systems include eight or nine "elementary valid
argument forms".  Two of them are rules of inference in Prooftoys as
well: modus ponents and conjunction, also known as "_and_ introduction".

The remaining ones translate into conditional statements with a
conjunction on the left hand side (the antecedent).  
For these, perhaps the most natural way to proceed in the Proof
Builder is to select one entire proved step, then choose the
[[appropriate!]] menu item and join the first step with another step,
creating a conjunction.  Select the entire resulting step.  The menu
will offer to apply any rule(s) with matching left hand sides.

1. Modus ponens (MP):\
  **This is also a rule of inference in Prooftoys.**

2. Modus tollens (MT):\
  `((p => q) & ∼q) => ∼p`

3. Hypothetical syllogism (HS):\
  `(p => q) & (q => r) => (p => r)`

4. Disjunctive syllogism (DS):\
  `(p | q) & ~p => q`

5. Constructive dilemma (CD):\
  `((p => q) & (r => s)) & (p | r) => q | s`

6. Simplification (Simp):\
  `p & q => p`

7. Conjunction (Conj):\
  **This translates into the Prooftoys "and" rule of inference.**

8. Addition (Add):\
  `p => p | q`  ??

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

### Translations into the Prooftoys logic

In the Prooftoys logic (simple type theory) all of these except modus
ponens and conjunction are propositional statements rather than rules of
inference.

If Prooftoys does not have one you need already built in as a registered
"fact", you can use the "check tautology" menu item to add it.  It
becomes a proof step of its own, and also available to use in other
proof steps.  The menu system will even check automatically to see cases
where it may be applicable.

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

Prooftoys treats this as "forward reasoning". [[Details??]]

Working this way inserts two smaller steps into your proof rather than
one somewhat larger step, but it is convenient to use because you don't
have to remember the name of any rule, and the user interface finds
correct matches for you, preventing user errors.

### Working with quantifiers

**Universal instantiation.** Suggestion: select the entire (quantified)
step of interest, and with it selected choose the menu item `[forall {v.
p v}] to [p v]`.  You may then select an occurrence of the variable and
request instantiation in the next step.

**Universal generalization / introduction.** Suggestion: select the
entire step, and with it selected choose the menu item  `[A] to [forall
{v. A}]`.  Choose the name of the variable you wish to quantify over.

**Existential quantifiers.**  [[There are multiple options here.  Choose
one or more and discuss.]]

### Conditional proof

Conditional proof (Hurley) is like proof from hypothesis in other
systems of logic.  Prooftoys also treats these as forward reasoning.
[[More details here]].





