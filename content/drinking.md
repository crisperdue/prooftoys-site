---
title: The drinking theorem
description: >
  Prooftoys proof of the drinking theorem
---

# The drinking theorem

This theorem was popularised by
[Raymond Smullyan](https://wikipedia.org/wiki/Raymond_Smullyan).
Because its truth can seem puzzling, it is also known
as the ["drinker paradox"](https://wikipedia.org/wiki/Drinker_paradox).
It can be stated, "There is someone in the pub such that, if they are
drinking, then everyone in the pub is drinking."

The statement here is slightly simplified, with the universe taking
the place of the pub.  Mathematically we state:

```
exists {x. drinker x => forall {y. drinker y}}
```

Wikipedia points out that the mathematical statement does not mean
that there is a person who causes everyone else to drink when they
drink, nor does it mean that _whenever_ they drink everyone else
also drinks.

I think of this theorem as a variant of the statement that there is
someone who drinks as little as anyone else.  We can then consider
whether it is true when everyone drinks and whether it is true when at
least one person does not drink at all.  It turns out that every
non-drinker has the extraordinary property in the theorem's statement.

The proof converts the theorem as stated to a statement that
either there exists a person who does not drink, or everyone drinks.

Our computer-based proof works backward from the goal, transforming
the assumptions until they are known to be true.  It uses some of the
fancier quantifier laws known to Prooftoys.

Hover over step numbers to see highlighted the steps and parts of
steps that are affected by each inference.

<div class="proof-display mb-4" data-steps='
(steps
(1 assumeExplicitly (t (exists {x. ((drinker x) => (forall {y. (drinker y)}))})))
(2 rewrite (s 1) (path "/left/arg/body") (t ((a => b) == ((not a) | b))))
(3 rewrite (s 2) (path "/left/arg/body/right") (t ((forall p) == (not (exists {x. (not (p x))})))))
(4 rewrite (s 3) (path "/left") (t ((exists {x. ((p x) | (q x))}) == ((exists p) | (exists q)))))
(5 rewrite (s 4) (path "/left/right") (t ((exists {x. a}) == a)))
(6 simplifySite (s 5) (path "/left"))
)'></div>

#### About the proof

[1] Assume the theorem is true.  We will work backward from here,
modifying the assumptions part until it is just `T`.

[2] Rewrite the conditional into an "or".

[3] Convert the "forall" into "not exists".  This rewrites with the
rule `forall p == not (exists {x. not (p x)})`.  This successfully
uses higher-order matching of `p` with `{y. drinker y}`.  In the
result, `exists {x. not (p x)}` becomes `exists {y. not (drinker y)}`
because Prooftoys uses the variable name `y` from the target
step rather than `x`.  Click on the word "use" in line 3 to see
details.

[4] Distribute the "or" over the two existentially quantified terms.
This step also uses higher-order matching.

[5] Variable `x` does not occur inside the quantifier, so we can
remove the quantifier.  (The quantified term has the same value
regardless of the value of `x`.)  This also uses higher-order
matching.

[6] Simplify.  If you click on the word "simplify" on this line, you
can see that it rewrites using `A | not A = T`.

#### Try it yourself

Here is a worksheet you can use to try building this proof yourself,
or an alternate version.

<div class="proof-editor mb-4"></div>
