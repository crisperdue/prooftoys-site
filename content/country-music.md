---
title: The country music theorem
description: >
  Prooftoys proof of the country music theorem
---

# The country music theorem

In which we prove that in a universe where everyone loves either rock
music or country music (or both), and there is someone who does not
love rock music, there is definitely someone who loves country.

We proceed here by boldly asserting these two facts about our universe
and proving the consequence.

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

[1] In this proof we prove that `exists {x. Country x}` without any
conditions, based on two facts about our mathematical world.

[2] The second assertion about our imagined universe.

[3] Result of rewriting all of step 1.

[4] Add a universal quantifier.

[5] This is a _consequence_ of step 4, where step 4 matches the
pattern `forall {x. p x => q x}`.

[6] This uses step 2 to conclude that the assumption 
`exists {x. not (Rock x)}` is true.  It internally simplifies,
removing the `T =>`.  The statement `exists Country` means that
the predicate `Country` is true for someone.

[7] This is the customary way of writing an existential statement,
equivalent to step 6.

#### Try it yourself

You can use this space to practice building your own proof.  You might
like to start by recreating the proof shown above.

<div class="proof-editor mb-4"></div>

