---
title: Prooftoys intro video -- script
---
## Prooftoys intro script

Prep: I will walk you through setting up the first two steps and make sure you can operate the Proof Builder; also I will show you how to adjust the size of the Proof Builder display.

Note that for items marked as "visual" I am envisioning a momentary display in a smallish part of the screen.

Grace, any and all input from you is encouraged. Please feel free.

*(Show a Prooftoys intro slide:)*

> Prooftoys: a proof assistant for beginners
>
>  (https://prooftoys.org/)

Audio: *(brief pause, then:)* Prooftoys is a fast track for beginners to understanding and constructing meaningful, correct proofs with computer assistance. It includes a website and Proof Builder web application. Both the tool and its logic are heavily oriented toward simplicity and an easy learning curve.

*(During the narration above, show:)*

- Just two basic inferences: 
  - Substitution for variables
  - Replacement of a term with an equal term

*(Perhaps slide in the two kinds of inference.)*

*(Then show:)*

- Typical simple proof step:
  1. Matches part of a known true statement with the selection
  1. Substitutes*( to make those parts the same
  1. Replaces the selection

*(Perhaps fade in the numbered points.)*

*(Initial Proof Builder display:)*

[1] `x * x = x == x * x == x` consider (A = A)

[2] `R x => (x * x = x == x * x == x)` add assumption `R x` in step 1

Audio: We have the start of a proof, with two numbered steps, each a true statement with a brief description. Step 2 says that if x is a real number, then the statement that x times x equals x is equivalent to itself, which is definitely true. 

Visual: Step 2 depends on step 1.

Audio: Most proof steps use a selection. (*Select the rightmost x*) We are going to subtract `x`from both sides of the equation using the "Tactics" menu. Menu items show a preview of the result. Click to lock in your choice.*(Click on "Subtract &star; from both sides" .*)

Visual: "Simplification automatically inserted"

Then Visual: "The dot-dot-dot in step 3 means that it has the same assumptions as step 2."

Audio: We will apply a known fact about numbers. (*Show hovering, then select `x * x - x`.) Finally in the "Tactics" menu choose"&rArr; (x - 1) &sdot; x".*)

Visual: "Highlighting and indentation are smart about syntax"

*(Note that step 5 uses the fact that for real numbers `a` and `b`, `a * b - b = (a - 1) * b`. Click on the word "use" on line 5 to display details.)* Audio: In step 5 click on the word "use", in blue, to see the details of the inference, including a substitution and a replacement. *(Slight pause, then click again on the word "use" in step 5 to hide the details again.)*

Audio: Now we apply a fact about multiplication. (*Select the `(x - 1) * x = 0`, then in the "Basics" menu, the first item.*)

(*Select `x - 1 = 0`, then choose &rArr;  `x = 1` in the menu.*)

Visual: "Integer arithmetic is built in"

(*At some convenient point in the proof, increase the height of the proof builder window and say that is what you are doing.*)

Audio: This proof solves an equation. The solution is that `x = 0` or `x = 1`, so two alternative solutions.  (*Select that part of the step.*) The Prooftoys website explains basic logic including the operations "and", "or", "not", "equivalence", and the conditional arrow.

(*Display a section of the "logic through pictures" tutorial, including some graphics.*)

Audio: For some classic simple proofs by induction, visit the "Natural Numbers Game" tutorial on the `prooftoys.org` website.

*(Display:)*

**Proudly open-source**

`https://prooftoys.org/`

