---
title: A fake proof
description: >
  Prooftoys reveals fallacies.
---

## A fake proof

Prooftoys does not fall into mathematical fallacies, and will prevent
you from doing so when you use it.  In cases like this one, the steps
are all allowable, but the end result only superficially looks like
the one you may have imagined!

Here is a Prooftoys version of a fake "proof" that `2 = 1` based on
fallacious reasoning.  This one seems to have originated in Michael
Spivak's <u>Calculus</u> (1967).  It is customarily described as a
sequence of proof steps applied to two arbitrary nonzero, equal numbers
`x` and `y`.  Although Prooftoys reaches something closely resembling
the incorrect conclusion, the end result is based on assumptions that
are false.  Prooftoys keeps track of them, and they turn out to be
important to the meaning of the proof. proving the final result above in
a single step.

Here is the entire proof in glorious detail:

<div class="proof-display mb-4" data-doc-name="/fake-proof/"></div>

The final result above is "trivially true", because `\F` implies
anything. You can prove this with the proof builder in just a step or
two. When nothing is selected in the editor, the basic menu lets you
`\check a tautology`.  Selecting that menu item and entering `\F => a`
will give you a general form, and you can then substitute for `a`.  Or
if you select `\check a tautology instance`, you can enter a more
specific formula immediately such as `\F => 2 = 1`,

#### About the steps

The step where both sides of an equation are both divided by `x - y`, is
usually pointed out as the incorrect step because it uses division by
zero.  The Prooftoys rendition of it simply introduces the assumption
that `x - y != 0`, which is inconsistent with the assumption that `x =
y`.  The combination of the two is always false.

The proof here postpones showing that the assumptions cannot all be
true until after transforming the conclusion into `2 = 1`, but that
part could be done immediately after dividing by `x - y`.  All of the
reasoning is still correct in both versions --- just pointless,
because *false* implies anything.  The final step is an instance of
the tautology `F => a` --- one typical result of trying fallacious
reasoning in Prooftoys.

Remember, when viewing a simplification step, if you click on the word
"simplify", the display will show step by step how the simplification
is done.

#### Playing around

Feel free to play around with the proof editor, below.  Pressing the
"Solve" button enters the entire proof into the proof builder.  That may
take a moment, so be patient.

<div class="proof-editor mb-4"></div>
