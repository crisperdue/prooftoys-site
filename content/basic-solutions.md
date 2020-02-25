---
title: "Basic examples - solutions"
menu: menu.md
---

# Prooftoys basic examples -- solutions

<a name=repetitious-number id=example></a>
## 1. The repetitious number

The key to this problem is that writing down a three-digit number and
then making it into a six-digit number by appending the same three
digits has the same effect as multiplying by 1,001.

So we can ask whether it is true that
<s>1001 * x / 7 / 11 / 13 = x</s>.

<div class="proof-editor mb-4" data-steps='
(steps
(1 consider (t ((((1001 * x) / 7) / 11) / 13)))
(2 simplifyFocalPart (s 1))
(3 arrangeTerm (s 2) (path "/right/right"))
(4 display (s 3))
)'></div>

This problem comes from the book "My Best Mathematical and Logic
Puzzles" (page 10) by the legendary Martin Gardner, author of numerous
books of entertaining and puzzling mathematics and, for 25 years, the
Mathematical Games column in Scientific American magazine.

**The steps.** A proof consists of a sequence of steps connected by
inference rules, each producing a new step, often with other steps as
inputs.  In this proof we have:

1. "Consider" -- we start by "considering" the expression that
   computes the result that hopefully is equal to the input, <s>x</s>.
   A Prooftoys step is always a true statement.  You can "consider" an
   arbitrary term, which can have any kind of value, for example
   numeric as here, or boolean, or any other kind.  The full content
   of the step is a statement that the term is equal to itself.

     If you hover the mouse over the small blank space between the step
   number and the expression for this step, Prooftoys will display the
   entire step for you.  In general, if you hover the mouse over this
   area, or an ellipsis (" &hellip; ") in this part of a step,
   Prooftoys will show you all of the parts of the step.
   
2.  "Standard form &hellip; " -- There are a few different ways to get
    Prooftoys to look at the expression here and cancel out the
    multiplication and the divisions.  This one handles all the
    details in one step.
	
3.  "Display fully" -- Prooftoys often just displays an ellipsis ("
    &hellip; ") if part of a step is the same as in the previous step.
    This step does no inference, but causes the system to show all
    parts of its input step.

Of these, only step 2 does any inference.  You may see it as a
relatively obvious step, but it has some internal complexity.

**Seeing details.** Prooftoys encourages you to dig down into any step
to see details for it.  To see the next level of detail, click on the
blue text in the description of the step, in this case the text
starting with "standard form".  The display then expands vertically to
show you another level of detail.  Click on the same text again or on
the box labeled "hide" to hide the details again.  If there are many
levels of detail you can repeat this process on steps in the detailed
display.

Most of the steps in the details for step 2 have the word "use" in
their description.  In descriptions the word "use" indicates that the
step is an application of a [rewrite
rule](/inference/#replacement-and-rewriting).




