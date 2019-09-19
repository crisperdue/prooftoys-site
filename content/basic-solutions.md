---
title: "Basic example solutions"
menu: menu.md
---

# Prooftoys basic examples -- solutions

<a name=repetitious-number id=example></a>
## 1. The repetitious number

Writing down a three-digit number and making it into a six-digit
number by appending the same three digits has the same effect as
multiplying by 1,001.

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
Puzzles" (page 10) by the legendary Martin Gardner, author of the
Mathematical Games column in Scientific American magazine for 25 years
and numerous books of entertaining and puzzling mathematics.

**The steps.** A proof consists of a sequence of steps connected by
inference rules, each producing a new step, often with other steps as
inputs.  In this proof we have:

1. "Consider" -- we start by "considering" the expression that
   computes the result that hopefully is equal to the input, <s>x</s>.
   A Prooftoys step is always a true statement.  You can "consider" an
   arbitrary term, which can have any kind of value, for example
   numeric as here, or boolean, or any other kind.  The full content
   of the step is a statement that the term is equal to itself.
   
2.  "Simplify" -- Prooftoys automatically tries
    [simplification](/simplification/) after most steps, to shrink the
    result.  Making a term (expression) smaller is the basic concept
    of simplification.
	
3.  "Standard form" -- There are a few different ways to get Prooftoys
    to look at the two occurrences of 1001 and cancel them out; and
    this is one of them.
	
4.  "Display fully" -- Prooftoys often just displays an ellipsis ("
    . . . ") if part of a step is the same as in the previous step.
    This forces it to show the whole of the solution step.
