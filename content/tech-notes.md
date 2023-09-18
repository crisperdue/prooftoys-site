---
title: Technical notes
description: >
  More in-depth technical information about the operation
  of the Prooftoys web app and its logic.
---

# Prooftoys technical notes

##### Contents

{{< TOC >}}

### Replacement and types

The fundamental **replacement** inference rule replaces a term by
another that is equal to it.  Prooftoys is based on **simple type
theory**, so every term has a type, though we do not present the type
in Prooftoys.  Replacement (and substitution also) requires that
replacement is only done with terms of the same type.  Prooftoys
automatically matches types as needed.  At present manipulation of
types is treated as a more advanced capability not available to users
of the proof builder.

Types such as numbers are different concepts in Prooftoys than type
theory types.  Read on for information about managing types such as
numbers.

### Replacement and free variables

There is one somewhat technical limitation on the use of replacement.
When using a conditional equation of the form `A => (B = C)` to
replace some occurrence of `B` with `C` in a step `S`, every variable
that occurs free in `A` and free in `B = C` must also be free at the
spot in `S` where `B` is to be replaced by `C`.

### Automatic management of assumptions

When a proof step is conditional Prooftoys very often treats the
left side of the conditional as a set of _assumptions_.  A conditional
step is one where the entire step consists of a left side (the
assumptions), the _conditional operator_ (`=>`), and a right side (the
conclusion).  If the left side of a conditional contains multiple
terms connected with `&`, the "and" operator, we consider each of the
terms to be an assumption.

In both of the examples above, there is a step where an assumption has
been proved, so it is replaced by `T`, and then the assumption `T`
"disappears" in the next step.  If `T` is the only assumption, there
are no assumptions at all after it is removed.  This is a standard
part of managing assumptions.

Beyond this, when Prooftoys applies replacement or rewriting with a
conditional equation, it treats the left side of the conditional as a
set of assumptions.  If the target step is also conditional, it
combines the assumptions in both steps to keep them simple and tidy,
by:

- Regrouping
- Reordering
- Removing duplicates

Prooftoys uses rewriting and some simple tautologies to prove the
correctness of each transformation it does, and the resulting
assumptions are fully equivalent to the original ones.

##### Assumptions about numbers

There are a few more transformations of assumptions that are applied
very frequently, such as assumptions that expressions have numeric
values.  Prooftoys automatically applies some transformations to
simplify these assumptions, reducing complex terms, removing
duplicates, or in some cases removing assumptions entirely.

In all of these cases, if you dig down into the details of these proof
steps you will see that they use the same kinds of basic operations
that you see in most other proof steps.

### Substitution

Substitution for variables is one of the fundamental operations in
virtually all forms of mathematical proofs and mathematical problem
solving.  How can we understand that substitution is a valid
step in a proof?

If a mathematical statement has a variable in it, we say the statement
is true if it is true for all possible values of the variable;
otherwise we say it is not true.  If the variable is a boolean
variable, we say the statement is true if it is true regardless of
whether the variable is true or false.

So if a variable appears more than once in a true statement, we know
the statement will be true as long as each occurrence is assigned the
same value.  Since an expression with the same inputs always gives the
same result, substituting an expression for *every occurrence* of
a variable in a true statement gives another true statement.

In a true statement, if we systematically replace every free
occurrence of a variable with copies of a term, the result of this
substitution is another true statement, because the expression has
the same value everywhere it appears.

The simple tautology `a ⇒ a` is a true statement,
since `true ⇒ true` and `false ⇒ false`.  A statement like
`(shining sun) ⇒ (shining sun)` is also
true whether the sun is actually shining or not.  The substituted
expression itself can have variables, as in
`x < y => x < y`.  No matter what values
`x` and `y` have, the value
of `x < y` is going to be the same in both spots, so the whole statement
is still true.

The result of substituting an expression for all instances of a
variable in a statement is called an *instance* of the original
statement, so we say that substituting one or more expressions for
variables in a tautology gives an *instance* of the tautology.

#### Substituting for bound variables

Math textbooks commonly use "set builder" notations such as `{x. x <
10}`, meaning the set of all `x` such that `x` is less than 10.  A
variable like the `x` in this notation are known as a **bound
variable**.  It turns out that notations like this lead to another
form of substitution, very common in mathematics, but not really
defined in most math texts.

Type theory extends the concept to functions with values of all types,
not just boolean values, so Prooftoys uses the notation to describe
functions generally, for example using `{x. x * x}` for a function
that yields the square of its input numbers.  In both of these two
examples, `x` is the bound variable of the set or function.

In Prooftoys you can write that 5 is between 0 and 10 with `{x. 0 < x
& x < 10} 5 == T`, or just `{x. 0 < x & x < 10} 5`.  In other words,
"5 is in the set of things that are between 0 and 10."  The statement
`{x. 0 < x & x < 10} 5` is fully equivalent to `0 < 5 & 5 < 10` by
substitution.  Prooftoys also caters to the traditional set notation
by defining `in` so that `5 in {x. 0 < x & x < 10}` is also
equivalent.

#### More technical details

<a id=renaming></a>
##### Renaming of bound variables
Prooftoys treats terms the same if they differ only by harmless
renamings of bound variables.  Not all renamings are harmless,
but for example if a bound variable is given a new name that occurs
nowhere else in a statement, along with all the references to it,
that is a harmless renaming, one that does not change the meaning
of the statement.

##### Substitution and "capture"

Even though substitution only affects occurrences of free variables,
there is still a potential issue with the variables that are free in
the substitution's replacement terms: they must remain free after the
substitution.

Suppose a replacement term contains a variable name that is also
the name of a bound variable in the statement where the substitution
is to be applied.  Naive substitution would result in an occurrence of
the replacement variable becoming bound, though it needs to stay free.
(This undesirable phenomenon is known as _capturing_.)

A simple solution is to harmlessly rename any bound variables like
this before doing the substitution.

##### Substitution and types

In a substitution the variable and the substitute term must be of the
same type.  For example, if the variable is boolean, the term must be
boolean.  If the variable is an individual, for example a number, the
value of the term must be an individual, and so on.  Any variable can
be replaced everywhere in a statement by the same term, as long as it
is of the same type.

When substituting for the bound variable of a function term, as when
using the axiom of substitution, the substitution only applies to
occurrences of the variable that occur within that function term.
Considering just the body of the function term, but nothing
surrounding it, the occurrences must be free ones ("relative" to the
function body).

If a mathematical statement contains bound variables substitution has
to be done a bit more carefully, but the idea remains the same.

First, if the a variable `v` in the statement appears as a bound
variable, in a part that looks like `{v. <body>}`, `v` is left alone
and not changed in that part of the statement.

Second, any free variables in the _replacement term_ must remain free
after the substitution.  If we imagine doing substitution with paper
and scissors, and imagine that all copies of the replacement term have
their free variables marked with a highlighter before the
substitution, then the highlighted copies must also be free after
substitution.  This is always achievable, and Prooftoys ensures it by
automatically renaming bound variables in the original statement as
needed.

### Equality of formulas

Prooftoys considers statements containing bound variables to be "the
same" if the only difference is in the names of some bound variables.

Imagine finding all of the variable bindings in the two statements.
They all have the form `{<boundvar> . <body>}`.  Since the only
difference is in the names, the bindings occur in exactly the same
locations in each statement.

Now go through each of those locations, coloring the `<boundvar>` part
of each one.  Each location gets its own unique color, the same color
in both statements when the location is the same.  Within a binding
body, every place the name of the bound variable refers to the same
(bound) variable, unless it is within some inner binding of the same
name.

Imagine coloring all of these references to each bound variable with
the same color as the `<boundvar>` it refers to.  The two formulas are
equal exactly if everything not colored has the same text in the same
places, and the same colors appear in the places in each formula.

### Inference

#### Managing assumptions

Facts about real numbers are conditional.  For example the commutative
law of addition for real numbers is `R x & R y => x + y = y + x`,
which only asserts the equality for real numbers.  Most steps in
proofs about the real numbers are also conditional.  So when we apply
a fact about real numbers to a step in a proof about real numbers by
replacement or rewriting, often both of the inputs to the rewriting
are conditional.

After any substitution, the inputs to replacement have the form:

`a_1 => (t_1 = t_2)` and `a_2 => c`.  After replacing an
occurrence of `t_1` in `c`, the result looks like
`a_1 => (a_2 => c_1)`, where `c_1` is the result of the
replacement in `c`.

Replacement and rewriting steps in Prooftoys use the tautology
`(a => (b => c)) == (a & b => c)` to collect the assumptions together.

Also, most inference steps check if the result is conditional
`(a => b)` and remove duplicated assumptions and any occurrences
of `T` to simplify the result.

#### Managing type assumptions

When the result of rewriting has assumptions such as `R (x + y)`, that
the result of some arithmetic operations is real, it uses known
arithmetic facts to break it down into assumptions that the values of
each variable is real.  The example breaks down to `R x & R y`.  It
also can prove that numeric literals are real numbers, so `R (x + 3)`
breaks down into just `R x`.

### About the Prooftoys logic

The core of [Mathtoys](http://mathtoys.org) is a Web-based, visual
proof assistant based on [Alonzo Church's simple type
theory](http://plato.stanford.edu/entries/type-theory-church/) as
developed by [Peter Andrews](http://gtps.math.cmu.edu/andrews.html)
under the name [Q<sub>0</sub>](http://en.wikipedia.org/wiki/Q_zero).
Simple type theory is suitable for construction of most of
mathematics, comparable in this respect to first-order logic plus set
theory.  It uses a minimum of simple, understandable concepts,
expressing them with a handful of axioms and inference rules.

Prooftoys uses a slightly different axiomatization than Q<sub>0</sub>,
and will transition to definitions of boolean operators that directly
expose their truth tables. But the theorems and inference remain the
same as in Q<sub>0</sub>.

#### Logic links

For more information on Church's simple type theory one source is the
[Type Theory](http://en.wikipedia.org/wiki/Type_theory) article in
Wikipedia.  [This
description](http://plato.stanford.edu/entries/type-theory-church/#ForBasEqu)
of Andrews' formulation of type theory has more technical detail.

The well-established [HOL
family](http://en.wikipedia.org/wiki/HOL_theorem_prover) of theorem
provers are also based on simple type theory, though there are
significant differences as well, including major differences in the
style of proofs they are designed to support.

Project task tracking is in [Pivotal
Tracker](https://www.pivotaltracker.com/projects/248279), though
currently much out of date.

