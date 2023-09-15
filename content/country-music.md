---
title: The country music theorem
description: >
  Prooftoys proof of the country music theorem
---

# The country music theorem

### What are we proving?

We will prove that in a world where everyone loves either rock music
or country music (or both), and there is someone who does not love
rock music, there is definitely someone who loves country.

In this proof the variables such as `x` represent people such as
Garth, or Jimmy, or Dolly.

- `Rock x` means that person x loves rock music.  
- `Country x` means that person x loves country music.  
- `forall {x. Rock x | Country x}` means that every person loves rock
  music or country music (or both!). We read the symbol `forall` as
  "for all".
- `exists {x. Country x}`
  means that some person exists who loves country music.  We read the
  symbol `exists` as "there exists".

<div class=proof-editor data-exercise="nat/CountryMusic"></div>

We start proof in the usual way.  You should see a first step that
says `exists {x. Country x} => exists {x. Country x}`.  If not press
the "Clear Work" button.  Selecting the `exists {x. Country x}` on the
**left** side of the formula, several options show up as suggestions.
Choose the one that uses the fact that:

`forall {x. p x => q x} & exists  p => exists  q`

Wow, what does this mean?  It says, "suppose that everything with
property `p` also has property `q`, and suppose that something exists
with property `p`.  If that is all true, then there also exists
something with property q.

This step fills in `q` as `exists {x. Country x}`.
Soon `p` will become `{x. not (Rock x)}`, but not yet.

For the condition `exists p`, choose specifically
`exists {x. not (Rock x)}`, one of the two conditions
expected to be in the result of the proof.  This choice is
offered in the menu.

Now check the tautology that `not a => b == a | b` with the plan
to use it in the next step.  You will need to enter the formula,
typing `\not a => b == a | b`.

Finally, select the part of step 3 that says `not (Rock x) => Country
x`.  Now the menu should offer "`Rock x | Country x` using step 4" as
one of the options.  Selecting this, you should get the desired
result, and the proof editor should indicate "&check; Proof
complete.".

#### Alternative

This proof works "backward", starting with the desired conclusion.
It transforms the assumptions into the ones expected, step-by-step
removing ones that are not desired.  It is also possible to work
"forward", starting with the expected assumptions, e.g.

`((exists {x. (not (Rock x))}) & (forall {x. ((Rock x) | (Country x))}))
    => ((exists {x. (not (Rock x))}) & (forall {x. ((Rock x) | (Country x))}))`

and transforming the *conclusion* into the desired one.
Can you do a version of this proof by working forward?

