---
title: "Repetitious number"
menu: menu.md
---

## The problem of the repetitious number

In this parlor trick you ask *spectator A* to write down any three-digit
number, then to copy the number to a new piece of paper, followed by
the same digits again, making a six-digit number.  Without looking,
instruct *spectator A* to pass the paper to *spectator B* without
revealing the number to you.

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

{{% faded %}}

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

{{% /faded %}}

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
number, then the statement is true.  The <s>R</s> is for "real".  In
slightly different words, it expresses the usual assumption that
<s>x</s> is a real number.
	
#### Try the steps yourself

Can you build the same proof yourself from just the given statement?
Here is a workspace you can use to do the experiment.

<div class="proof-editor mb-4" data-steps='
(steps
(1 given (t ((((1001 * x) / 7) / 11) / 13)))
)'></div>

### Seeing details

Prooftoys encourages you to dig down into any step
to see details for it.  To see the next level of detail, click on the
blue text in the description of the step, in this case the text
starting with "standard form".  The display then expands vertically to
show you another level of detail.  Click on the same text again or on
the box labeled "hide" to hide the details again.  If there are many
levels of detail you can repeat this process on steps in the detailed
display.

If a step has the word "use" in its description, it means the step
applies a [rewrite rule](/inference/#replacement-and-rewriting).

### Is there an easier way?

If you are good at math and rarely make mistakes as you work a
problem, you probably find it easier to solve problems like this in
your usual way, and then you don't have to learn a new tool.

On the other hand, Prooftoys has a complete set of rules for
reasoning, and it won't goof if it gets a new kind of problem.

There is a quite different breed of computer tool for solving typical
textbook math problems, and they are called "computer algebra
systems".  With one of them you may be able to just enter a statement
of the problem, and it will crank out the answer.  For many kinds of
problems they are much more capable than Prooftoys, but you will not
learn nearly as much about proper mathematical reasoning by using one,
and they are not built to work collaboratively with the human user
as Prooftoys is.

### What's next?

The system and this website are both works in progress.  More problems
like this are on the way, so if you like what you see here, please --

> **<i>Say "Hello!"</i>**

If you are interested in using this website to work math problems or
learn more about mathematical reasoning, the author would love to
hear from you.  Please check out the [**about**]({{< relref "/about.md"
>}}) page for ways to get in touch.

### Challenge -- Can you tell how long is a "lunar"?

This problem comes from the same book by Martin Gardner.  He explains
that in H. G. Wells' novel, "The First Men in the Moon", the moon is
inhabited by intelligent natives who measure distance in lunars.

##### [How long is a "lunar"?](/lunar/) &#x27aa;
