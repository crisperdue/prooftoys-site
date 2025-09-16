---
title: "Repetitious number"
---

## The problem of the repetitious number

This puzzle comes from the book "My Best Mathematical and Logic
Puzzles" by the legendary <a target=_blank
href="https://en.wikipedia.org/wiki/Martin_Gardner">Martin
Gardner</a>, author of numerous books of entertaining and puzzling
mathematics and, for 25 years, the Mathematical Games column in
Scientific American magazine.

In this little parlor trick you ask *spectator A* to write down any
three-digit number, then to copy the number to a new piece of paper,
followed by the same digits again, making a six-digit number.  Without
looking, instruct *spectator A* to pass the paper to *spectator B*
without revealing the number to you.

*Spectator B* is to divide the resulting number by 7, and then pass the
result to a *spectator C*, who divides the result by 11. (Tell them not
to worry, there will be no remainder!)

*Spectator C* passes it to yet one final spectator.  This last
spectator is to divide the result by 13 and then read the resulting
quotient.  The result will be the original three-digit number.

**Problem:** Prove that this trick always works regardless of the
initially-chosen number.

**Hint:** The key to solving this problem is finding a simple
mathematical statement of it.

### Solution

The key to this problem is that writing down a three-digit number and
then making it into a six-digit number by appending the same three
digits has the same effect as multiplying by 1,001.

So we can ask, is it true that
`1001 * x / 7 / 11 / 13 = x`?

Here is a solution built with Prooftoys.

<div class="proof-display mb-4" data-steps='
(steps
(1 goal (t (R x => 1001 * x / 7 / 11 / 13 = x)))
(2 simplifySite (s 1) (path "/left/right")))
'></div>

**The steps.** A proof consists of a sequence of *true statements*
connected by inference rules, each producing a new step.  You can
produce this proof yourself using the proof builder tool, available
below

1. "Starting the proof" -- If this (step 1) does not appear
   automatically, press the button labeled "Clear Work" and confirm in
   the pop-up.

   In this step there are two assumptions: `R x` ("x is a real
   numbeer"), and the claim that `1001 * x / 7 / 11 / 13 = x`.  The
   claim statement also appears as the conclusion, following the `=>`.
   When you have demonstrated that the main claim is true, it need no
   longer be assumed, leaving you with just the desired statement.

2. "Simplify" -- When you hover the mouse over the step, the proof
   builder highlights in red the assumption to be removed.  In this case
   you can simply select the whole assumption.  Then in the menu choose
   "simplify &star;".  In this proof, simplification does the whole job,
   and you are done.
	
#### Try it yourself

Can you build the same proof yourself from just the given statement?
Here is a workspace you can use to do the experiment.

<div class="proof-editor mb-4" data-one-doc data-steps='
(1 goal (t (R x => 1001 * x / 7 / 11 / 13 = x)))
'></div>

### Seeing details

Prooftoys encourages you to dig down into any step to see details for
it.  To see the next level of detail, click on the blue text in the
description of the step, for example "simplifying".  The display then
expands vertically to show you another level of detail.  Click on the
same text again or on the box labeled "hide" to hide the details again.
If there are many levels of detail you can repeat this process on steps
in the detailed display.

### What's next?

There are more logical puzzles and examples in the
"[**hands-on**]({{< relref "/hands-on.md" >}})" section.

And if some things here interest you, please check out the
"[**about**]({{< relref "/about.md" >}})" page for ways to get in
touch.

<div class=footer-spacer>
