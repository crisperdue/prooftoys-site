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

The statement here is slightly simplified, not mentioning the pub
explicitly, just drinkers and non-drinkers:

`exists {x. drinker x => forall {y. drinker y}}`

Wikipedia points out that the mathematical statement does not mean
that there is a person who causes everyone else to drink when they
drink, and it also does not mean that _whenever_ that person drinks
everyone else also drinks.

I think of this theorem as a variant of the statement that there is
someone who drinks as little as anyone else.  We can then consider
whether it is true when everyone drinks and whether it is true when at
least one person does not drink at all.  In fact, every non-drinker
has the extraordinary-sounding property in the theorem's statement.

Our computer-based proof works backward from the goal, transforming
the assumptions until they are known to be true.  It uses some of the
fancier quantifier laws known to Prooftoys --- so you will probably
find it a harder proof than the 
[Country Music Theorem]({{< relref "/country-music.md" >}}).

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
rule `forall p == not (exists {x. not (p x)})`, matching `p` with
`{y. drinker y}`.  Click on the word "use" in line 3 to see details.

[4] Distribute the "or" over the two existentially quantified terms.
This step uses a fancier kind of matching, known as "higher-order"
matching.  To see it in action, click on the word "use" in line 4.

[5] Variable `x` does not occur inside the quantifier, so we can
remove the quantifier.  (The quantified term has the same value
regardless of the value of `x`.)

[6] Simplify.  If you click on the word "simplify" on this line, you
can see that it rewrites using `A | not A == T`, leaving just `T`
as the only assumption, which it removes with another rewrite.

**Technical notes on steps 4 and 5:** Step 5 uses the fact that
`exists {x. a} == a`.  This fact looks as if it can remove any
existential quantifier anywhere, but it can't.  It does let you remove
the quantifier --- if the bound variable (e.g. `x`) does not appear in
the term that substitutes for `a`!  This is one of the fine points of
[substitution]({{< relref "/tech-notes.md#substitution" >}}) for bound
variables such as `x` in step 4.

Then if you look carefully at the inference in step 4, you may notice
that step 4 substitutes for `p` and `q`.  The result looks as if it
substitutes for `p x` and `q x`.  In fact it does a maneuver in the
substitution that gives this effect, and also makes it possible to
bring in terms with the variable `x` even though `x` is bound at the
target site.  If you use the Proof Builder to dig down into the
details of these steps, you can see this maneuver at work.

#### Try it yourself

Here is a worksheet you can use to try building this proof yourself,
or your own alternative proof.

<div class="proof-editor mb-4" data-steps='(steps
(1 assumeExplicitly (t (exists {x. ((drinker x) => (forall {y. (drinker y)}))})))
)'></div>
