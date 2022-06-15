---
title: Home
description: >
  Reason logically with Prooftoys.  Learn and develop
  your skills in precise rational thinking.
---

## What is deductive reasoning?

Deductive reasoning starts with true statements, or at least ones
taken as hypothetically true, and follows precise rules to reach
conclusions that we take to be clear consequences of those initial
statements.  Mathematical reasoning, as in mathematical proof, is the
quintessence and the epitome of deductive reasoning.

Much as mathematics is an essential building material for science,
mathematical reasoning is an essential building material for
mathematics, that makes it possible to build sturdy mathematical
structures that reach all the way "**<a target=_blank
href="https://www.youtube.com/watch?v=2VSYmGSJtCA">to infinity and
beyond!</a>**"

### Why deductive reasoning?

Proof -- deductive reasoning -- is a cornerstone of mathematical
thinking.  So if mathematics applies to something you are trying
to do, you probably need skills in deductive reasoning.

Deductive reasoning is also key to solving a tremendous variety
of problems that can be stated precisely.  The problem could
be practical, or just entertainment for your brain.

### What is Prooftoys?
 
Prooftoys is an experimental computer tool that works with you
interactively to solve math problems -- or prove mathematical
statements.  It has correct rules for reasoning built into it, always
follows them, and does not make careless mistakes or forget the rules.

Prooftoys is built as an _interactive theorem prover_, or as more
commonly described these days, a _proof assistant_.  Among tools of
this kind, however, Prooftoys is different in that it is built -- from
the ground up -- for beginners, people who may have little background
in mathematics and no background in formal logic.  It uses a simple
form of logic (simple type theory) that is capable of developing quite
a bit of sophisticated mathematics, and it knows a bit about the real
numbers, based on standard axioms.

Prooftoys is also an ongoing series of experiments in the design and
implementation of such a basic proof assistant, seeking to make it
easier to learn, easier to use, and more effective for its users.  I
hope you will enjoy playing around with Prooftoys and look forward to
your feedback.  See the "[About]({{< relref "/about.md" >}})" page for
more information.

### Want to dive right in?

Head over to the **[proof builder]({{< relref "/proofbuilder.md"
>}})** page for the quickest start.

### Need some reasons?

**User interface.** Prooftoys works entirely through a Web-based
point-and-click graphical user interface.  You select a step or part
of a step.  Prooftoys offers you suggestions and lets you change your
mind as often as you like, encouraging you to "play around" with your
proofs.

**Simplicity.** The logic used by Prooftoys has also been chosen
specifically for beginners.  For example its rule of inference in
simple situations is just a modest generalization of what is taught in
any high school course in basic algebra.

Statements in the logic are simply formulas with constants, variables,
and functions.  There is no separate concept of hypotheses in the
language, though some simple automation in the inferences gives
similar effects.

* [About the language]({{< relref "/language-intro.md" >}})
* [About the logic]({{< relref "/inference.md" >}})

**Flexibility.** Prooftoys is well-suited to solving problems as well
as proving theorems.  For example it has no special adaptation to
working backward from a theorem statement.

**Familiarity.** Prooftoys makes extra effort to present its
mathematics in familiar, textbook-like style as much as possible.  For
example type conditions are stated as assumptions rather than type
annotations, and the result of division by zero is not a number.

**Transparency.** Prooftoys makes the details of every step in every
proof available in the proof builder and all proof displays.  A click
lets you drill down into the details of any step, to any depth.

**Website.** With this website you can see how it is done or learn
about the ideas behind the logic to build your skills and confidence
in solving mathematical problems through proof.

#### Some things Prooftoys is _not_

The Prooftoys implementation is built for learning and ease of use, not for
power and scale.  It is not:

- Built for large collections of theorems
- Built for editing mathematical theories
- Equipped with strong automation
- Meant for professional use

Even the specialized Prooftoys procedures (a.k.a. "tactics") for
working with real numbers are works in progress, not finished
products.

{{< comment >}}

The "Mutilated chessboard problem" is a fun one.

Here is a sample, a problem is from the book "My Best Mathematical and
Logic Puzzles" by the legendary <a target=_blank
href="https://en.wikipedia.org/wiki/Martin_Gardner">Martin
Gardner</a>, author of numerous books of entertaining and puzzling
mathematics and, for 25 years, the Mathematical Games column in
Scientific American magazine.

This is problem 20 in the book, a little mathematical parlor trick.

##### [The problem of the repetitious number](/rep-num/) &#x27aa;

{{< /comment >}}
