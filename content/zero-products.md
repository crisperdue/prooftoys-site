---
title: "Direct proof"
---

# Direct proof in Prooftoys

Direct proof is the classic style familiar from mathematics textbooks
everywhere.

Here is a direct proof built with Prooftoys, proving an essential fact
about zero.  This fact, and the two that it depends on, are key to doing
things like solving polynomials.

<div class="proof-display mb-4" data-steps='
(steps
(1 xyzero)
(2 xoryzero)
(3 join (s 1) (s 2))
(4 rewrite (s 3) (path "/right") (t ((((a => b) & (b => a)) == (a == b)))))
)
'></div>

The first step here says that if either of two numbers is zero, their
product is zero.  The second step says that if the product of two
numbers is zero, then one or the other (or both) must also be zero. The
proved result is that the two conditions are mathematically equivalent.
	
#### Try it yourself

Can you build the same proof yourself from just the given statement?
Here is a workspace you can use to do the experiment.

**The steps.**. A proof consists of a sequence of *true statements*
connected by inference rules, each producing a new step.  You can
produce this proof yourself using the proof builder tool, available
below.

1. Recalling a fact.  In the "Basic" menu select the item "look up a
   fact".  We will use two named facts in this proof.  The first one is
   "xyzero".  Enter "xyzero" when prompted (without the quotes).  You
   will see the statement of this fact appear in the proof builder's
   proof display.  You could enter the statement of the fact instead,
   but this way saves typing.

2. Recalling another fact.  Again, the "Basic" menu select "look up a
   fact".  This time enter "xoryzero" when prompted (again without the
   quotes).  You will see the statement of this fact appear in the proof
   display, as step 2 of your proof.

3. Now select all of step 1.  You will know the whole step is selected
   when the entire step --- *including the step number* -- is
   highlighted.  Then in the "Basic" menu select "combine steps 1 and
   2".  This creates step 3, which says everything in both of the
   first two steps, joining them with "and".

4. Step 3 says that if either variable is zero, their product is zero.
   *And* if the product is zero, one variable or the other must be zero.
   So "A" implies "B" and "B" implies "A".  And when we have both of
   these, the two statements are logically equivalent.

   Select the "conclusion" of step 3 (everything after the arrow).  When
   you click, it will highlight and stay highlighted in blue.  Now go to
   the "Basic" menu again and ask it to use the fact that `a => b & b =>
   a == (a == b)`.  (This may be the very first item in the menu.) When
   you click on the menu item you will see step 4, which is what we were
   trying to prove.

   `R x & R y => (x = 0 | y = 0 == x * y = 0)`

   Congratulations!

<div class="proof-editor mb-4" data-one-doc></div>

### Seeing details

Prooftoys encourages you to dig down into any step to see details for
it.  To see the next level of detail, click on the blue text in the
description of the step, for example "theorem zyzero".  The display then
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
