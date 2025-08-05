---
title: News
description: >
  What is new and upcoming with Prooftoys
---

### News

##### 07/2024

- The entire proof builder system is now converted from JavaScript to Typescript and compiles with minimal errors.
- The axiom of induction now properly contains an internal quantifier.
- The inference rule / command that sets up an induction proof now imports relevant assumptions into the scope of the quantifier.
- In proofs that have a goal, steps with the goal's conclusion highlight undesired assumptions in red to indicate that they need to be proved true.
- There is now a formal "subgoal" rule. This allows induction proofs to stay the same as before except for use of an official subgoal in proving the inductive case.
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
