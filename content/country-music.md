---
title: The country music theorem
description: >
  Prooftoys proof of the country music theorem
---

# The country music theorem

In which we prove that in a world where everyone loves either rock
music or country music (or both), and there is someone who does not
love rock music, there is definitely someone who loves country.

We proceed here by asserting these two facts about our universe and
proving the consequence.  `Rock x` means "x loves rock music", and
`Country x` means "x loves country music".

<div class="proof-display mb-4" data-steps='
(steps
(1 assert (t ((Rock x) | (Country x))))
(2 assert (t (exists {x. (not (Rock x))})))
(3 rewrite (s 1) (path "/main") (t ((A | B) == ((not A) => B))))
(4 toForall0 (s 3) "x")
(5 forwardChain (s 4) (t ((forall {x. ((p x) => (q x))}) => ((exists p) => (exists q)))))
(6 rewriteFrom (s 5) (path "/left") (s 2))
(7 rewrite (s 6) (path "/main/arg") (t (p = {x. (p x)})))
)'></div>

#### About the steps

In this proof we prove that `exists {x. Country x}` without any
conditions, based on two facts about our mathematical world.

1. Everyone loves rock music or country music, or both.
1. Some person exists who does not love rock music.
1. Result of rewriting all of step 1 to an equivalent statement using
   the fact that `A | B == (not A => B)`, which is a *tautology*, as
   explained as part of [inference]({{< relref
   "/inference.md#tautologies" >}}) and [through pictures]({{< relref
   "/logic-pix-truth.md#tautologies" >}}).
1. Add "forall" quantifier.
1. This is a _consequence_ of step 4, where step 4 matches the
   pattern `forall {x. p x => q x}`.
1. This uses step 2 to conclude that the assumption 
   `exists {x. not (Rock x)}` is true.  It internally simplifies,
   removing the `T =>`.  The statement `exists Country` means that
   the predicate `Country` is true for someone.
1. This is the customary way of writing an existential statement,
   equivalent to the previous step.

#### Try it yourself

You can use this space to practice building your own proof.  You might
like to start by recreating the proof shown above.

<div class="proof-editor mb-4"></div>

