---
title: 'Elements of proofs'
date: 2019-02-11T19:27:37+10:00
weight: 4
---

# Prooftoys proofs

The logic underlying proofs in Prooftoys (and Mathtoys) use a very small number
of primitive concepts, with one simple rule of inference
and a bare handful of
axioms.  This has the advantage of simplicity, but the deductive steps
are small, so almost any proof needs many steps.

Proofs that you will actually work with also use a small number
of different concepts and operations, but they are at a higher level
so you can reason in bigger but still understandable steps.  The higher-level
deduction steps you use in a proof do their work using
the low-level primitives, so the correctness of proofs in Prooftoys
only depends on correct implementation of the basic primitives.

Most proof steps are of one of the following kinds, or combinations
of a handful of these.  They are: 

- proving a tautology
- substitution; and
- rewriting_ (finding a substitution, followed by replacement)_

When you understand how Mathtoys uses pattern matching to find and
apply substitutions, and follows them with replacement using equations,
you will understand at least 80% of Mathtoys inference steps.

## Replacement and rewriting

Inference by replacement allows an arbitrary term appearing anywhere in a proof step to
be replaced by another term known to be equal to it.  Equality
applies to individuals, functions, predicates, et cetera, and also to
boolean values.  Logical equivalence ("≡") is equality of truth values.

### Replacement

In the simplest case, we have an equality that is known to be true that looks like

> A = B   (or A ≡ B is also an equality)

An occurrence of A in any proof step can be replaced by B anywhere it occurs.

Alternatively we may have an equality that applies under assumptions, that
looks something like:

> You can write A ⇒ (B = C) (or as before, A ⇒ (B ≡ C)) 

Using an equation like this on a sentence S results in a sentence of the form:

> A ⇒ S'

where S' is like S, but with an occurrence of A replaced by B.  (_In more
advanced cases where S contains "binders", there are some limitations on
the use of replacement._)

### Rewriting

"Rewriting" is just a technical name for the kind of reasoning taught in
every high school algebra textbook.  Writing the commutative law of multiplication
as an equation `x * y = y * x`, and applying it to the term `x * 3` in
an equation such as `5 * x = 2 * x + x * 3`, a textbook gets `5 * x = 2 * x + 3 * x`.
This is exactly what rewriting does in Prooftoys.

The first part of the rewriting here is to make `x * y` in the statement
of the commutative law match the term `x * 3` in the example equation.
The `y` can match with `3`, so we _substitute_ `3` for `y` in
the commutative law, deducing that `x * 3 = 3 * x`.  Then we replace `x * 3`
in the example equation with `3 * x`, giving the textbook result.

In the actual Prooftoys system, axioms such as commutativity are expressed
as conditionals, e.g. `R x ⇒ x * y = y * x`, so the rewriting is conditional,
but the effect is essentially the same.

## Sample proofs

In this section are demonstrations of using the Prooftoys logic to accomplish
the same reasoning done by the traditional inference rules of Modus Ponens,
and Modus Ponens under assumptions, as you might see in a
textbook on logic.

Here we use some of the logical notation of Prooftoys.  If the notation
is unclear, consider reading some of the documentation on the
logical language.

Proof steps also often use the fact (a tautology) that any statement `A` in the logic
is equivalent to `A ≡ T`.  So if a proved statement `A` occurs within
another proved statement, the occurrence can be replaced with T.

### Modus Ponens

So if we have both:

> (1) A<br>(2) A ⇒ B

We can replace the `A` in step 2 with T, giving:

> (3) T ⇒ B

which is equivalent to just:

> (4) B

using the tautology (equation!) `(T ⇒ a) ≡ a`.

### Modus Ponens under assumptions

Here we are given:

> (1) A ⇒ B<br>
> (2) B ⇒ C

and will prove that

> A ⇒ C

We can proceed as follows:

| Step | Replace | Using |
| ---- | ------- | ----- |
| (3) A ⇒ (B ≡ T) | _all of step 1_ | (A ⇒ B) ≡ (A ⇒ (B ≡ T)) (_tautology_) |
| (4) A ⇒ (T ⇒ C) | _B in step 2_ | _step 3_ |
| (5) A ⇒ C | T ⇒ C in step 4 | (T ⇒ C) ≡ C (_tautology_) |

In step 3, `B` is equivalent to `T` conditionally ("_if A then B ≡ T_"), so step 4 is
conditional on `A`.

## About the notation

Before learning about more handy rules of inference, let's clarify
a bit the notation in the next sections.

Capital letters A, B, and C here are not variables in the logic.
They are pattern variables to be replaced with arbitrary boolean
terms (with true/false values).  Capital letters X and Y are also
pattern variables, for arbitrary terms of any type.

## More rules of inference

Here are some useful derived rules of inference.  They are all implemented
by repeated use of the fundamental rules of inference.

### Substitution

#### Substitution for free variable(s)

> _From:_ any proof step with one or more free variables.  
> _To:_ a similar proof step with arbitrary terms substituted for
> each variable. 

#### Universal instantiation

> _From:_ forall {x. A}.  
> _To:_ A with a term of your choice substituted for `x`.

#### Beta reduction (substitution into a function body)

> _From:_ {x. A}  X.  
> _To:_ `A`, with term `X` substituted for `x` throughout

This can be done anywhere in any formula.

#### Note on substitution

In the simple cases, all forms of substitution above work in the
way you might expect from examples in any high school math
textbook.  There is a bit more to be said in cases where the
term undergoing substitution contains "bound" variables
of its own.

For details on this see [link TBD](http://prooftoys.org/TBD).

### Other rules

#### Self-equality
> X = X

The value of any expression is equal to itself.

#### Universal quantifier elimination
> _From:_ forall {x. B}<br>
> _To:_ B

(Result of instantiating with `x`.)

#### Binding an equation
> _From:_ X = Y<br>
> _To:_ {x. X} = {x. Y}

(Consequence of `{x. X} = {x. X}`, then replacing the second `X` with
`Y`.)

#### Unbinding an equation
> _From:_ g = {x. G}<br>
> _To:_ g x = G

This is useful for converting a definition from the basic
form to the usual form seen in first-order logics.

#### Universal quantifier introduction
> _From:_ B  
> To: forall {x. B}

## Using what you have learned

### Proofs of real number facts

You can find a "live" list of basic facts about the real numbers and their proofs,
with the axioms and definitions that support them, on the Prooftoys website at 
http://prooftoys.org/real-number-facts.html.
The page also gives access to the proof of each of the theorems.
(Just click on the word "fact" or "theorem" in blue to the right of any
item in the list!)

### Logic examples

For these and more examples "live", see <http://prooftoys.org/introduction.html>.

For a list of additional theorems of pure logic currently available
in Prooftoys see the [list of logical axioms and theorems](Logical-axioms-and-theorems).
