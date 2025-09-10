---
title: The country music theorem
description: >
  Prooftoys proof of the country music theorem
---

# The country music theorem

{{< TOC >}}

## Interactive Demo

Here is an interactive demo walkthrough of the proof with some
explanation.  You can refer to it as you work the proof yourself further
below using the proof builder tool.

<div style="position: relative; box-sizing: content-box; max-height:
80vh; max-height: 80svh; width: 100%; aspect-ratio: 0.7420435510887772;
padding: 40px 0 40px 0;
margin-bottom: 40px;">
  <iframe
  src="https://app.supademo.com/demo/cme06oavx008byjyix35lqinf?step=5"
  loading="lazy" title="Supademo Demo" allow="clipboard-write"
  frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true"
  allowfullscreen style="position: absolute; top: 0; left: 0; width:
  100%; height: 100%; border: 2px solid blue;">
  </iframe>
</div>

## What are we proving?

We will prove that in a world where everyone loves either rock music
or country music (or both), and there is someone who does not love
rock music, there is definitely someone who loves country.

In this proof the variables such as `x` represent people --
Garth, Jimmy, or Dolly, or whoever.

- `Rock x` means that person x loves rock music.  
- `Country x` means that person x loves country music.  
- `forall {x. Rock x | Country x}` means that every person loves rock
  music or country music (or both!). We read the symbol `forall` as
  "for all".
- `exists {x. Country x}` means that some person exists who loves
  country music.  We read the symbol `exists` as "there exists".  
  It is sometimes written as `exists Country`, but this way has a more
  familiar look.

## Doing it yourself

<div class=proof-editor data-exercise="nat/CountryMusic"></div>

## Step by step walkthrough

We start the proof in the usual way.  You should see a first step that
says:

{{% preblock %}}
`forall {x. Rock x | Country x} & exists {x. not (Rock x)} & exists
{x. Country x} => exists {x. Country x}`.
{{% /preblock %}}

If not press the "Clear Work" button.  Select the `exists {x. Country
x}` to the *left* of the `=>` in the formula (on the *first line*). It
is highlighted in red. Several options will show in the "Basic" section
of the menu as suggestions. Choose the one that uses the fact that:

`forall {x. p x => q x} & exists p => exists  q`

Wow, what does this mean?  It says, "suppose that everyone who has
property `p` also has property `q`, and suppose that someone has
property `p`.  If that is all true, then there is also someone with
property q.  In this situation property `q` is "person who likes country
music".

This step fills in `q` as `exists {x. Country x}`. Soon `p` will become
`{x. not (Rock x)}` ("person who does not love rock music"), but not
yet.

For the condition `exists p`, from the menu choose the item `exists {x.
not (Rock x)}`.  The result will not be highlighted because it is part
of the desired final result.

Finally, select the part of step 3 that says `not (Rock x) => Country
x`.  Now the menu offers "`not (not Rock) x | Country x`" as one of the
options.  When you select this, the proof editor will remove the "not
not" double negation by simplifying, and it should indicate "&check;
Proof complete.".

## Alternative

This proof works "backward", starting with the desired conclusion *(the
goal)*. It transforms the assumptions into the ones expected,
step-by-step removing ones that are not desired.  It is also possible to
work "forward", starting with the expected assumptions, e.g.

`((exists {x. (not (Rock x))}) & (forall {x. ((Rock x) | (Country x))}))
    => ((exists {x. (not (Rock x))}) & (forall {x. ((Rock x) | (Country x))}))`

and transforming the *conclusion* into the desired one.  Would
you be able to create a version of this proof that works forward?
