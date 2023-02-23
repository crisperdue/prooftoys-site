---
title: Natural numbers - tutorial
menu: menu-docs.md
description: >
  Introducing the natural numbers game
---

## Welcome!

Welcome to the Prooftoys edition of the ***Natural Numbers Game***, a
series of puzzles in which you build up mathematical knowledge about
numbers step by step with computer guidance.

### What is this about?

In this game you will start with just the bare essentials of knowledge
about the natural numbers (the "counting numbers", 0, 1, 2, 3, and so
on up from there) and work your way up to more powerful knowledge
through mathematical proofs.

The structure of this game is largely a clone of the admirable
original [Natural Number
Game](https://www.ma.imperial.ac.uk/~buzzard/xena/natural_number_game/)
tutorial developed in England at Cambridge University using the [Lean
Theorem Prover](https://leanprover.github.io/).  This edition uses the
Prooftoys proof assistant, with its focus on graphical user
interaction, simplicity, and ease of use for beginners.

### Will it be hard?

***If you have studied basic high school algebra, you have used the
concepts you will need to play this game!*** We will review the
principles with you, and Prooftoys will provide you with the guidance
and suggestions to help you succeed.

*Your first mission, should you decide to accept it, is to prove that*
`x + y = x + y`.

The proof will use the principle that anything is equal to itself, a
basic principle of mathematical reasoning.

<div class=proof-editor data-exercise="nat/nat1"></div>

### What do I do now?

In front of you is a Prooftoys proof editor.  It displays a proof in
progress, and lets you interactively add to or modify the proof,
experimenting with different proof steps and approaches however you
wish.

You should see the beginning of a proof, with just one line, a
statement of the goal.  If not, try clicking on "Clear work", then
confirming that you do want to clear your work.  The goal statement in
this case is `(x + y = x + y) => x + y = x + y`.

This is a conditional statement, which you can read as "`x + y = x +
y` **implies** `x + y = x + y`", or "**if** `x + y = x + y` **then**
`x + y = x + y`".  The arrow (`=>`) in the middle is known as the
**conditional operator**.  This statement is mathematically true
because any statement imples itself.  "If it is true, then it is
true!"  We say that this statement has the form `A => A` because it
has the same statement on the left and on the right, with `=>` in the
middle.

Items on the left side of a conditional are considered _assumptions_.
This statement has only one.  The statement on the right side is the
**conclusion** (also known technically as the *consequent*).  When an
assumption is proved to be true (`T`), it can be removed, and when all
of the assumptions have been removed, only the conclusion remains, and
the proof is complete.

This proof has just one step, and the step has just one assumption.
Start by selecting the assumption, `x + y = x + y`.  As you hover the
mouse cursor over different parts of the statement they will highlight
to show that they can be selected.  Click to confirm the offered
selection <b videotip="/images/select-x-y.mp4">like this</b> (Hover
the mouse cursor to see a demonstration.)

Next look at the menu down at the bottom of the proof editor.  If the
"Popular" section of the menu is not already displayed, show it by
pausing the mouse cursor over the word "Popular".

The menu offers you choices for the next proof step.  You will want the menu item
that starts with ➭ <b>`T`</b>, meaning that the selected term will be
replaced with `T` (true).  When an assumption is proved to be true,
Prooftoys automatically drops it from the set of assumptions.

Go ahead and select that menu item. You should see a second step now
in the proof editor display, and the words "Proof complete" at the top
of the proof editor area.  The one assumption has been dropped leaving
just the goal, which was exactly what you wanted to prove.

{{< figure src="/images/proof-complete.png" alt="The completed proof" >}}

#### ➪ [***Next***]({{< relref "/number-game/tutorial2.md" >}})
