---
title: The country music theorem
description: >
  Prooftoys proof of the country music theorem
---

# The country music theorem

### Rocking proofs backward and forward

This little example demonstrates "forward" proof as well as our usual
goal-oriented proof --- and it is our first proof of existence.

### What are we proving?

We will prove that in a world where everyone loves either rock music
or country music (or both), and there is someone who does not love
rock music, there is definitely someone who loves country.

In this proof the variables such as `x` represent people such as
Garth, or Jimmy, or Dolly.  `Rock x` means that person x loves rock
music.  `Country x` means that person x loves country music.  `forall
{x. Rock x | Country x}` means that every person loves rock music or
country music (or both!).  We read the symbol `forall` as "for all".
`exists {x. Country x}` means that some person exists who loves
country music.  We read the symbol `exists` as "there exists".

<div class=proof-editor data-exercise="nat/CountryMusic"></div>

We start the goal in the usual way, and several options show up as
suggestions.  We are going to choose the one that uses

`forall {x. p x => q x} & exists  p => exists  q`

Wow, what does this one even mean?  It says, "suppose that everything
with property `p` also has property `q`, and suppose that something
exists with property `p`.  If that is all true, then there also exists
something with property q.

In this situation, `p` will be `{x. not (Rock x)}`.

----

We proceed here by asserting these two facts about our universe and
proving the consequence.  `Rock x` means "x loves rock music", and
`Country x` means "x loves country music".

<div class="proof-display mb-4" data-steps='
(steps
(1 assumeExplicitly (t (forall {x. ((Rock x) | (Country x))})))
(2 assumeExplicitly (t (exists {x. (not (Rock x))})))
(3 rewrite (s 1) (path "/right/arg/body") (t ((a | b) == ((not a) => b))))
(4 chain1 (s 3) (t ((forall {x. ((p x) => (q x))}) => ((exists p) => (exists q)))))
(5 rewrite (s 4) (path "/right/arg") (t (p = {x. (p x)})))
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
1. This is a _consequence_ of step 4, where step 4 matches the pattern
   `forall {x. p x => q x}`.  This is justified by the fact that
   `
1. This uses step 2 to conclude that the assumption 
   `exists {x. not (Rock x)}` is true.  It internally simplifies,
   removing the `T =>`.  The statement `exists  Country` means that
   the predicate `Country` is true for someone.
1. This is the customary way of writing an existential statement,
   equivalent to the previous step.

#### Try it yourself

You can use this space to practice building your own proof.  You might
like to start by recreating the proof shown above.

<div class=proof-editor data-noload></div>
