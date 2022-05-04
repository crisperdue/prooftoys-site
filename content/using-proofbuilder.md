---
title: "Using the Proof Builder"
menu: menu-inference.md
description: >
  Reason logically like an expert with Prooftoys
  simple and powerful techniques.
---

# Using the Proof Builder

##### Contents

{{< TOC >}}

### The worksheet

The first time you visit a page with a proof builder, the proof
builder looks a bit like a window onto a blank sheet of paper with a
few controls.  This window will display proof steps once you have
some, but it starts out empty and blank.  You will fill it in with
deduction steps by selecting steps or parts of steps, menus and
entering terms in the language of the Prooftoys logic.

The worksheet displays the steps of your proof in progress with a
brief description of each step.  Each time your worksheet changes, it
is stored persistently in your web browser, so you can navigate to
other pages and return, or even power off your computer, and still
keep your work as long as you like.  Just remember that worksheets are
not shared across different web browsers, even on the same computer.

You can have many worksheets, and switch back and forth between them
with the proof builder, using the "Worksheets" button.  The name of
your current worksheet is displayed at the top of the proof builder
display.  You can also browse a list of all of your worksheets.
Clicking on the "Worksheets" button shows you additional controls, and
choose "Open" to see the list.

### Starting a proof

You can hover the mouse over the worksheet area, and an additional
area with menus will appear at the bottom:

{{< image src="WorksheetMenu.png" title="proof builder image">}}

The "General" menu is initially active with its heading highlighted,
but you can activate any menu by hovering over its heading.  The menus
are sensitive to your selection of a step or term (expression) within
a step, but since there are no steps to select, the menu shows only
actions that create a new step from just your input.

Selecting any one of these prompts you to enter a term in the
[Prooftoys language]({{< relref "/symbols-quickref.md" >}}).

**assume** and **assume explicitly**.  These create an "assumption"
step, which is just an example of that fact that any statement implies
itself.  The only difference is in the display.  Enter any term with a
boolean value.

**consider a term to transform**.  This creates an example of the true
statement that any term is equal to itself.  Enter any valid term.

**look up a fact**.  This helps you enter a statement that Prooftoys
knows to be true.  Prooftoys works hard to help you work without
having to type in the statement of a fact, but sometimes this is
useful.

Prooftoys has a number of axioms and theorems with names, and you can
enter the name to add the axiom or theorem as a proof step.  Prooftoys
also knows numerous other mathematical facts, and you can add one of
them by entering its statement through the keyboard.  In addition you
can enter a tautology or a trivial arithmetic fact such as `2 + 2 = 4`
or `0 < 3`.

Prooftoys tries to help you avoid the need to type in statements of
facts by finding facts relevant to your current selection and offering
menu items that use them in standard proof steps.

Prooftoys can also prove an arbitrary tautology or a *substitution
instance* of a tautology through this menu item.

**prove a tautology**.  This attempts to prove the input statement as
a tautology.  It currently supports boolean functions "and", "or",
"not", boolean equality (either "=" or "==" each with its own
precedence), and the conditional ("=>").

**prove a tautology instance**.  This checks whether the formula you
enter is the result of a substitution into a tautology.  If so it
proves the tautology and does the substitution for you.

***Example.*** Select "consider a term to transform".  Prooftoys will
prompt you for a "term to consider".  Enter `\x * x = x` and press the
_<tt>Return</tt>_ key or click on the _<tt>Go</tt>_ button next to the
input field.

*Start with commutative law for equality.*

The proof builder always adds a new step at the end of the proof.

### Inference steps

Most steps in proofs build from one step to another step.  In the
proof builder you generally start by selecting the step or part of a
step you want to build on.

#### Selecting a step or term

Most actions in Prooftoys are done by selecting a step or term, then
selecting a menu item from one of the menus.  To select a _step_,
click on its step number, or on the checkbox adjacent to the step
number. You will see the step highlight, and the highlight will remain
until you click somewhere else, either clearing it or selecting
something different.

If you hover the mouse over different parts of a step, the different
terms in the step will highlight as you hover.  If you click while a
term is highlighted, the highlight appearance will change, and will
remain as you move the mouse elsewhere.  As with a step, a term
remains selected until you click somewhere else, either clearing it or
selecting something different.  You can only select one thing at a
time in Prooftoys.

The content of the menus is sensitive to the selection.  When you
select a step or term you will usually see the visible menu change
accordingly.

**Example.** Select the last `x` in `x * x = x`, the one on the right
side of the equation.

#### Entering a fact

Certain kinds of commonly-occurring assumptions can be omitted when
you enter a fact using the keyboard.  In particular you can omit
assumptions that variables must be real numbers, such as `R x` ("x is
a real number") and conditions that a variable cannot be zero, as in
`x / x = 1`.  In many simple cases this means you do not need to enter
any assumptions at all.

For example the commutative law for real numbers can be entered as
simply `x + y = y + x`.

It doesn't matter which names you use when entering a fact.  Entering
the fact as `w + z = z + w` would have the same effect.

#### Inference through the menus

The proof builder searches through its library of registered facts and
through the steps in your proof so far for ones it can use with its
standard types of inferences.  It shows information about the action
in the menu, and if you hover over the item, it shows exactly what the
result would be.

See XXX for details.

**Example:** For our example we will subtract `x` from both sides of
the equation, which is a simple _algebra_ step.  This will allow it to
be removed from the right side of the equation.  Use the "algebra"
menu, and _hover_ over the menu item labeled "subtract &star; from
both sides". The proof builder will preview the result of the step
near the bottom of the worksheet display.  Now _choose the menu item
with a click_.

Prooftoys will show you the result of this step and automatically add
a "simplify" step that cancels out the resulting `x - x` term on the
right hand side.

- Specialized proof procedures, such as typical steps in solving
  equations.
- Facts that match.
- Standard inferences where you enter information (such as a suitable
  fact) instead of asking the proof builder to find it for you.

### About menu items

Some rules such as "consider" take input from you, as we saw above.
When you hover the mouse over one of these menu items, the preview
area shows a message like "needs user input".

Note that the menu items offered are sometimes based on estimates that
their action makes sense and can be done.  When you hover over the
item the proof builder tries actually performing the action.  If the
action cannot actually be done, the preview may be a message like
"nothing to do", and choosing the item does nothing.

### The menus

**Algebra.** Many of the items in the algebra menu, like "subtract
from both sides" in the example, do proof procedures that are useful
in manipulating equations, as in basic textbook math.  The algebra
menu also presents a few facts about real numbers that are often
useful in basic algebra.  These are available in the "general" menu as
well.

**General.** When a step or term in the proof is selected, the
_general_ menu offers to apply commonly useful facts that can operate
on that step or term in the ways Prooftoys uses facts in proofs.

**Other.** More matches of the selection with steps in your proof and
standard inferences that can use them.  These are estimated to be less
often useful or more advanced than ones in the _general_ menu.

**Edit.** Basic proof editing commands.

### About step displays

- dependencies
- omitted or elided assumptions
- full display
- viewing levels of proof detail
- deleting

### Managing worksheets

### Notes

"pointless" rewrites

### Video

- Resizing the proof display
- Selection
- The menu
- Deleting steps
- Replacing steps
- Inlining

[[Talk about it, and the simplification rules]]

