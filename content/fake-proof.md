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
sequence of proof steps applied to two arbitrary nonzero, equal
numbers `x` and `y`.  Although Prooftoys reaches something resembling
the incorrect conclusion, the end result is based on assumptions that
are false.  Prooftoys keeps track of them, and they turn out to be
important to the meaning.

<div class="proof-display mb-4" data-steps='
(steps
(1 assumeExplicitly (t (x = y)))
(2 consider (t (x * x)))
(3 rewriteFrom (s 2) (path "/main/right/right") (s 1))
(4 subtractFromBoth (s 3) (path "/right") (t (y * y)))
(5 rewrite (s 4) (path "/right/left") (t (((R x) & (R y)) => (((x * x) - (y * y)) = ((x + y) * (x - y))))))
(6 rewrite (s 5) (path "/right/right") (t ((((R a) & (R b)) & (R c)) => (((a * c) - (b * c)) = ((a - b) * c)))))
(7 rewrite (s 6) (path "/right/right") (t (((R x) & (R y)) => ((x * y) = (y * x)))))
(8 divideBothByThis (s 7) (path "/right/right/right"))
(9 rewriteFrom (s 8) (path "/right/left/left") (s 1))
(10 rewrite (s 9) (path "/right/left") (t ((R a) => ((a + a) = (2 * a)))))
(11 divideBothByThis (s 10) (path "/right/left/right"))
(12 rewrite (s 11) (path "/left/left/left/left/left/left/left") (t ((a != b) == (not (a = b)))))
(13 rewrite (s 12) (path "/left/left/left/right/arg") (t (((R a) & (R b)) => (((a - b) = 0) == (a = b)))))
(14 assumed (s 13) (path "/left/left/left/right/arg"))
(15 simplifySite (s 14) (path "/left"))
)'></div>

#### About the steps

Step 8, in which both sides of an equation are both divided by `x -
y`, is usually pointed out as the incorrect step because it uses
division by zero.  The Prooftoys rendition of it simply introduces an
assumption `x - y != 0`, which is inconsistent with the assumption
that `x = y`.

The proof here postpones showing that the assumptions cannot all be
true until after transforming the conclusion into `2 = 1`, but that
part could be done immediately after step 8.  All of the reasoning is
still correct in both versions --- just pointless, because *false*
implies anything.  The final step is an instance of the tautology `F
=> a` --- one typical result of trying fallacious reasoning in
Prooftoys.

In step 15, if you click on the word "simplify", the display will show
step by step how the assumptions reduce down to just `F`.

#### Playing around

Feel free to play around with the proof editor, below.

If you like, you can prove the final step above in just a step or two.
When nothing is selected in the editor, the basic menu lets you
`\check a tautology`.  Selecting that menu item and entering `\F => a`
will give you a general form, and you can then substitute for `a`.  Or
if you select `\check a tautology instance`, you could enter a more
specific formula immediately such as `\F => 2 = 1`, proving the final
result above in a single step.

<div class="proof-editor mb-4"></div>

