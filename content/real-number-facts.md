---
title: Real number facts
description: >
  Summary of theorems about real numbers available
  in Prooftoys.
---

# Prooftoys real number facts

##### Contents

{{< TOC >}}

Prooftoys / Mathtoys started out with a relatively ad hoc collection
of facts about the real numbers, but these are being reorganized to
derive everything from an axiomatization of the real numbers as the
complete ordered field, the classic characterization of the reals.

Here is a partial list of the number facts that have been proved from
the axioms for the real numbers -- most of them from the famous "field
axioms".  See below for the specific axioms and definitions used.

## How to view the proofs

To see the proof of any of these facts to any desired level of
detail, click on the text in blue following the statement of
the fact.  Most of these are just the word "fact".  You can drill
down to any level of detail in the same way.

For example let's look at a proof of item 6 in the main list below.
You can see this same proof by clicking on the word "fact" on line 6
of the list of proofs.

### Example proof

This is a proof that the negative of zero is zero.  It uses the fact
that a real number plus its negative is zero, but both of these facts
ultimately rely only on standard axioms for the real numbers: the [field
axioms]({{< relref "/real-number-facts.md#field-axioms" >}}). The
conclusion may feel obvious, but we don't just assume it is true.

<div id=demoProof style="margin-bottom: 1em"></div>

Hovering the mouse over a step's step number gives you some
information about how Prooftoys got to that step.  For example if you
hover the mouse cursor over the `[2]` in the second step you will see
`x` highlighted everywhere in step 1, and the occurrences of `0`
highlighted in step 2 to show that `0` is substituted for `x`.

If you hover the mouse cursor over the `[3]` in the third step, you
will see the term `0 + -(0)` highlighted in step 2.  Step 3 applies
the fact that `0 + a = 0` to step 2, using `-(0)` as the value for
`a`, and replacing `0 + -(0)` with `-(0)` to get step 3.  (Unless you
look into more levels of detail, Prooftoys does not show you that it
knows that `R 0`, which simply means that `0` is a real number.)

To see a level of details behind the operation of step 2, you can
click on the words "substitute for x" in the description of step 2.
To see the details behind the operation of step 3, click on the word
"use", in blue, in the description of step 3.

## Proof list

For a quick start on reading and understanding proofs like these, you
may want to get introduced to [reading the language](/language-intro/)
and [inference in Prooftoys](/inference/).

<div id=proofDisplay style="margin-bottom: 1em"></div>

## Proof playground

Here is a proof builder tool you can use to try replicating some of the
proofs above, or otherwise playing around with the real numbers.

{{% divstyle style="margin-top: 1.5em" %}}
<div class=proof-editor></div>
{{% /divstyle %}}

## The real number axioms

The axioms for the real numbers here are as stated in the book "Analysis
with an Introduction to Proof" by Steven R. Lay.

### Definitions

All of the facts about real numbers rely on these definitions.

{{% preblock %}}
`isAddIdentity x == R x & forall {y. R y => y + x = y}`
`0 = the1 isAddIdentity`
`isMulIdentity x == R x & forall {y. R y => y * x = y}`
`1 = the isMulIdentity`
`addInverses x = {y. R x & R y & x + y = 0}`
`neg x = the (addInverses x)`
`mulInverses x = {y. R x & R y & x * y = 1}`
`recip x = the1 (mulInverses x)`
{{% /preblock %}}

*Except for 0 and 1, the notations for numbers in Prooftoys do not
have this sort of definition.  Instead, it is appropriate to think of
them as shorthands for expressions that build up the appropriate
number from 0, 1, addition, and multiplication.*

### Field axioms

Many important mathematical structures obey the field axioms.  In
addition to the real numbers, the rational numbers, the complex numbers,
and even polynomials follow these laws.  There are other possible
axiomatizations, all equivalent.

Each of these axioms assumes that the variables in it are elements of
the field, in this case the real numbers.  Those assumptions are omitted
in the presentation here.

{{% preblock %}}
`R (x + y)`
`(x + y) + z = x + (y + z)`
`x + y = y + x`
`exists1  isAddIdentity`
`R (x * y)`
`(x * y) * z = x * (y * z)`
`x * y = y * x`
`exists1  isMulIdentity`
`x * (y + z) = x * y + x * z`
`exists1 (addInverses x)`
`x != 0 => exists1 (mulInverses x)`
`1 != 0`
{{% /preblock %}}

### Ordering axioms

Again, each of these axioms assumes that the variables are members of
the field, in this case the real numbers.  Adding these axioms to the
first set makes the domain into an _ordered field_.  Not all fields
are ordered.  For example the complex numbers form a field, but not an
ordered field.

{{% preblock %}}
`not (x < x)`
`x < y => not (y < x)`
`x < y | y < x | x = y`
`x < y & y < z => x < z`
{{% /preblock %}}

Effects of addition and multiplication on ordering:

{{% preblock %}}
`x < y => x + z < y + z`
`x < y & 0 < z => x * z < y * z`
`0 < x & 0 < y => 0 < x * y`
{{% /preblock %}}

Ordering: more definitions

{{% preblock %}}
`x <= y == x < y | x = y`
`x > y == y < x`
`x >= y == x > y | x = y`
{{% /preblock %}}

### Dedekind completeness axiom

This additional axiom distinguishes the real numbers from all other
mathematical structures.  Any structure obeying the full set of real
number axioms is known to behave exactly like the real numbers, no
matter how it is built.

Definition of upper bound

{{% preblock %}}
`isUB x S == R x & S subset R & S != emptyset & forall {y. S y => y <= x}`
{{% /preblock %}}

Definition of least upper bound

{{% preblock %}}
`isLUB x S == isUB x S & forall {y. isUB y S => x <= y}`
{{% /preblock %}}

Definition of supremum

{{% preblock %}}
`sup S == the {x. isLUB x S}}`
{{% /preblock %}}

Completeness axiom

{{% preblock %}}
`S subset R & S != emptyset & exists {x. isUB x S} => R (sup S)`
{{% /preblock %}}

#### For the ultra-picky

You might wonder what is the supremum of a set of real numbers that has
no upper bound, like the set of real numbers itself.  If there is no
upper bound, then there cannot be a least upper bound either.  In that
case what is the supremum?

Mathematics textbooks universally skirt this isssue, but computer-based
systems cannot.  In Prooftoys the _definite description_ operator, shown
here as `the`, yields a special value when given an empty set.  This
special value is not a number of any kind --- in effect something not
useful for any other purpose.  And that is the supremum of a set with no
upper bound.

{{< hereScript >}}
// On DOM ready:
jQuery(function() {

  const rules = Toy.rules;
  
  // Proof display
  const display = new Toy.ProofDisplay();
  window.proofDisplay = display;  // debugging
  $('#proofDisplay').append(display.node);

  function fact(statement) {
    display.addStep(rules.fact(statement));
  }
  Toy.requireScript(Toy.realNumbersScript).then(() => {
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
  fact('divisionIsInverse');
  console.log('Completed real facts');

  const demo = new Toy.ProofDisplay();
  window.demoDisplay = demo;
  $('#demoProof').append(demo.node);
  
  const step1 = rules.fact('x + neg x = 0');
  const step2 = rules.instVar(step1, '0', 'x');
  const step3 = rules.rewrite(step2, '/right/left', '0 + a = a');
  demo.setSteps([step1, step2, step3]);
  });
});
{{< /hereScript >}}
