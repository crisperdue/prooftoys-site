---
title: "Basic examples - solutions"
menu: menu.md
---

<a name=repetitious-number id=example></a>
# The repetitious number -- solution

The key to this problem is that writing down a three-digit number and
then making it into a six-digit number by appending the same three
digits has the same effect as multiplying by 1,001.

So we can ask, is it true that
<s>1001 * x / 7 / 11 / 13 = x</s>?

Here is a solution built with Prooftoys.

<div class="proof-display mb-4" data-steps='
(steps
(1 consider (t ((((1001 * x) / 7) / 11) / 13)))
(2 simplifyFocalPart (s 1))
(3 arrangeTerm (s 2) (path "/right/right"))
(4 display (s 3))
)'></div>

**The steps.** A proof consists of a sequence of steps connected by
inference rules, each producing a new step.  In this proof we have:

1. "Consider" -- we start by "considering" the expression in the
   problem statement.  Just under the hood, the full statement here is
   that <s>1001 * x / 7 / 11 / 13 = 1001 * x / 7 / 11 / 13</s>, and
   this is true because anything is equal to itself.  The full content
   of the step is a statement that the term is equal to itself.  This
   step was created using the menu, selecting "consider", and typing
   in `1001 * x / 7 / 11 / 13`.

     *Viewing the whole step.* If you hover the mouse over the small
   blank space between the step number and the expression for this
   step, Prooftoys will display the entire step for you.  In general,
   if you hover the mouse over this area, or an ellipsis (" &hellip;
   ") in this part of a step, Prooftoys will show you all of the parts
   of the step.

2. "Simplify" -- select the entire step by clicking on the checkbox.
   Then select "algebra: simplify" from the menu that pops up.
   
3. "Standard form &hellip; " -- select the term <s>1001 * x /
   1001</s>, then pick the item "algebra: standard form for term in
   sum" from the menu that pops up.
	
4.  "Display fully" -- 
    This step does no inference, but causes the system to show all
    parts of its input step.

**The display.** Prooftoys often just displays an ellipsis (" &hellip;
") if part of a step is the same as in the previous step.  If you
hover the mouse cursor over the " &hellip; ", Prooftoys displays the
entire step without omissions.  Or for step (1), hover over the blank
space after the step number.

If you hover the mouse cursor over one of the step numbers, Prooftoys
will highlight the part of the step that it worked on to get this
one.  If it worked on the whole step, it highlights just the number of
the step it used as its input.

What about <s>R x => . . . </s>?  This means that if x is a ("real")
number, then the statement is true.  The <s>R</s> is for "real".
Since we are working with numbers, you will see this often, and it
just means you are working with numbers.
	
**Try the steps yourself.** Can you build the same proof yourself
from just the given statement?  Here is a workspace you can use
to do the experiment.

<div class="proof-editor mb-4" data-steps='
(steps
(1 given (t ((((1001 * x) / 7) / 11) / 13)))
)'></div>

**Seeing details.** Prooftoys encourages you to dig down into any step
to see details for it.  To see the next level of detail, click on the
blue text in the description of the step, in this case the text
starting with "standard form".  The display then expands vertically to
show you another level of detail.  Click on the same text again or on
the box labeled "hide" to hide the details again.  If there are many
levels of detail you can repeat this process on steps in the detailed
display.

If a step has the word "use" in its description, it means the step
applies a [rewrite rule](/inference/#replacement-and-rewriting).
