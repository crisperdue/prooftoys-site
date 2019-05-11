---
title: Real number facts
---

# Prooftoys real number facts

##### Table of contents

{{< TOC >}}

Prooftoys / Mathtoys started out with a relatively ad hoc collection
of facts about the real numbers, but these are being reorganized to
derive everything from an axiomatization of the real numbers as the
complete ordered field, the classic characterization of the reals.

Here is a partial list of the number facts that have been proved from
the axioms for the real numbers.  See below for the specific axioms
and definitions used.

## How to view the proofs

To see the proof of any of these facts to any desired level of
detail, click on the text in blue following the statement of
the fact.  Most of these are just the word "fact".  You can drill
down to any level of detail in the same way.

For a quick start on reading and understanding proofs like these, you
may want to get introduced to [reading the language](/language-intro/)
and [inference in Prooftoys](/inference/).

<div id=proofDisplay style="margin-bottom: 1em"></div>

## Definitions

All of the facts about real numbers rely on these constant
definitions.

{{% preblock %}}
~~isAddIdentity x == R x & forall {y. R y => y + x = y}
0 = the1 isAddIdentity
isMulIdentity x == R x & forall {y. R y => y * x = y}
1 = the1 isMulIdentity
addInverses x = {y. R x & R y & x + y = 0}
neg x = the1 (addInverses x)
mulInverses x = {y. R x & R y & x * y = 1}
recip x = the1 (mulInverses x)~~
{{% /preblock %}}

*Except for 0 and 1, the notations for numbers in Prooftoys do not
have this sort of definition.  Instead, it is accurate to think of
them as shorthands for expressions that build up the appropriate
number from 0, 1, addition, and multiplication.*

## Field axioms

The field axioms here are as stated in the book "Analysis with an
Introduction to Proof" by Steven R. Lay (third edition).  There are
other equivalent axiomatizations.

Each of these axioms assumes that the variables are real numbers.

{{% preblock %}}
~~R (x + y)
(x + y) + z = x + (y + z)
x + y = y + x
exists1 isAddIdentity
R (x * y)
(x * y) * z = x * (y * z)
x * y = y * x
exists1 isMulIdentity
x * (y + z) = x * y + x * z
R x => exists1 (addInverses x)
R x & x != 0 => exists1 (mulInverses x)
1 != 0~~
{{% /preblock %}}

## Ordering axioms

Again, each of these assumes that the variables are real numbers.

{{% preblock %}}
~~not (x < x)
x < y => not (y < x)
x < y | y < x | x = y
x < y & y < z => x < z~~
{{% /preblock %}}

Effects of addition and multiplication on ordering:

{{% preblock %}}
~~x < y => x + z < y + z
x < y & 0 < z => x * z < y * z
0 < x & 0 < y => 0 < x * y~~
{{% /preblock %}}


{{< hereScript >}}
// On DOM ready:
jQuery(function() {
  // Proof display
  const display = new Toy.ProofDisplay();
  window.proofDisplay = display;  // debugging
  $('#proofDisplay').append(display.node);

  function fact(statement) {
    display.addStep(Toy.rules.fact(statement));
  }
  fact('@ R x => x * 0 = 0');
  fact('@ R x => (neg 1) * x = neg x');
  fact('@ R x => -1 * x = neg x');
  fact('x = y == x + z = y + z');
  fact('@ R x & R y => (x * y = 0 == x = 0 | y = 0)');
  fact('@ neg 0 = 0');
  fact('@ R x => (x < 0 == 0 < neg x)');
  fact('@ R x & R y => (x < y == neg y < neg x)');
  fact('@ R x => (0 < x == neg x < 0)');
  fact('@ R x & R y & R z => (x < y & z < 0 => y * z < x * z)');
  fact('@ isAddIdentity 0');
  fact('@ R 0');
  fact('@ isMulIdentity 1');
  fact('@ R 1');
  fact('@ isAddIdentity x == x = 0');
  fact('@ isMulIdentity x == x = 1');
  fact('@ R x & R y & x + y = 0 == R x & neg x = y');
  console.log('Completed real facts');

  Toy.mathifyAll();  
});
{{< /hereScript >}}
