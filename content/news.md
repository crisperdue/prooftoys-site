---
title: News
description: >
  What is new and upcoming with Prooftoys
---

### News

#### 03/2026
- Significantly extended support for forward reasoning:
  - More flexible "forward chaining".  Starts from user-selected
    conjuncts in the conclusion of a step.
  - "Conclude" tactics to move assumptions into a step's conclusion.
  - "Splitting out" selected assumptions
- Extensions to support for numeric types
  - `QQ` / QQ (rationals)
  - `ZZ` / ZZ (integers)
  - `ZZ1` / ZZ1 (positive integers)
  - Simplification understands the subset/superset relationships among
    these.
- Initial "official" support for mod, div, divides, even, odd, floor.
- More exponent laws
- Forms data entry now makes it easier to correct your errors.
- Additional support for working with existential quantifiers.
  - New user interface for converting a term into a "redex" application
    of a lambda function to an argument.
- Various new measures to reduce over-enthusiastic auto-simplification
  in the user interface.
- Cleanup of parsing and its documentation.
- New rendering of lambda functions.
- For exponentiation, support for "**" is removed.  Use "^".
- New [**Wiki**](https://github.com/crisperdue/prooftoys/wiki) with
  drafts of notes and documentation in progress.<br>
  Community participation and questions encouraged!

#### 10/2025

- Interactive demo walkthrough of basic direct proof.
- New example of simple proof by cases.  This is part of work in
  progress toward additional styles of proof.
- Fix deficiencies in the "repetitive number" puzzle.

#### 09/2025

- Updated site structure for clarity of purpose and navigation.
- Proof builder performance and resource usage both greatly improved.
- Many incremental improvements in proof builder user interface.
- Full user interface support for exponentiation.  While '**' is still
  accepted, '^' is the official symbol for it.
- Interactive demos of forward and goal-directed proof.
- Miscellaneous updates to content.

##### 07/2024

- The entire proof builder system is now converted from JavaScript to
  Typescript and compiles with minimal errors.
- The axiom of induction now properly contains an internal quantifier.
- The inference rule / command that sets up an induction proof now
  imports relevant assumptions into the scope of the quantifier.
- In proofs that have a goal, steps with the goal's conclusion highlight
  undesired assumptions in red to indicate that they need to be proved true.
- There is now a formal "subgoal" rule. This allows induction proofs to
  stay the same as before except for use of an official subgoal in
  proving the inductive case.
- Improvements to manual and automatic simplification.
- Numerous improvements to presentation of rules in menus and proof displays.

##### 05/2024

- New "detach" inference rule.  Selecting the conclusion of a step
  searches for facts with assumptions it matches.  The rule
  substitutes into the fact, then removes it as true.

##### 09/2023

- New "[**Fake Proof**]({{< relref "/fake-proof.md" >}})" of `1 = 2`
- New "[**Drinking Theorem**]({{< relref "/drinking.md" >}})"
- New demonstrations of equation-solving with Prooftoys,
  links in the "[**Hands-on**]({{< relref "/hands-on.md" >}})" page.

##### 07/2023

- Focus on stable and predictable operations so proofs remain
  completely valid as the implementation changes.
- Extensive work on indenting proof steps for clarity and
  easy reading.

##### 04/2023

- [***Natural Numbers Game***]({{< relref "/number-game/tutorial1.md"
 >}}) extensive hands-on tutorial

### Upcoming

- Initial versions of other tasty example proofs, in the
  [hands-on]({{< relref "/hands-on.md" >}}) section of the site.
- Tidy up solutions for linear equations of 1 and 2 variables
