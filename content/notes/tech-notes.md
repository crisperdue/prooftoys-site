---
title: Prooftoys technical notes
---
## Technical Notes

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 3.007 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Wed Jul 26 2023 22:20:00 GMT-0700 (PDT)
* Source doc: Mathtoys Technical Notes
----->




The notes here are generally on the fundamental concepts, terminology, mathematics, and system design to support the mathematics for Mathtoys. Notes on handling of numbers in Mathtoys, solving equations, and such are in the Mathtoys Algebra notes.

**See also:**



* [Mathtoys Algebra Notes](https://docs.google.com/document/d/167ZD4SS6d7TYupkL-8YSxLP30HsbADd5D385-wjJD9U/edit?usp=sharing)
* [Mathtoys Project Notes](https://docs.google.com/document/d/1z84aUw_5o5tyVYLz3jgOe5ya8k6CTFfVU0clEZDP6pE/edit?usp=sharing)
* [Creating Usable Computer Tools for Math](http://drive.google.com/open?id=1kodTzr0VsfaseUN-st5RGNkipPIFBc6nLQzPS-H7hhg)
* [Mathtoys Posts](http://drive.google.com/open?id=1YNwhhC0WApTCkKkFOhcDTlzrFRqgKqvif-uKvQMMow4)
* [Mathtoys Community](https://plus.google.com/communities/114988124375826899091)
* [Mathtoys folder](https://drive.google.com/open?id=0B0Lyx0sEqeeNcXFiaW5zdXZuSTQ)


### Terminology


#### Ideas for key terminology

**Function** − any function including ones that are not objects, e.g. singleton, powerset

**Mapping** − function object (function with domain that is an object), e.g. addition of reals

**Property (class)** − total boolean-valued function of 1 argument, e.g. isSingleton

**Set** − class that is an object (can be an argument or domain), e.g. ℤ, ℝ

**Relationship** − total boolean-valued function of 2 or more arguments, e.g. subset, equality

**Relation** − boolean-valued function that is also an object (thus true on a limited domain that is itself an object), e.g. ordering relationships on the real numbers

Statements about relationships sometimes need to be qualified with the domain, for example x &lt; y ∨ x ≥ y is true only if ℝ x ∧ ℝ y.

**Wider / narrower:**

"B narrower than A": A ⇒ B and not equal.  Notably when B is A ∨ C.

"B wider than A":  B ⇒ A and not equal. Notably when B is A ∧ C.

If potentially equal, then “as narrow/wide as”.


### Differences between this logic and Andrews’ Q<sub>0</sub>

This section covers semantic differences, not notational differences.

All of Andrews’ basic definitions are abbreviations in which a symbol (which may have type parameters) abbreviates a term with no free variables. In Mathtoys these are merely stated as identities, and there is no metalinguistic demonstration that they are eliminable.

Andrews’ Axiom 5 applies only to definite description for sets of individuals. For all other types the operator is defined, and proves the related properties metamathematically, outside Q<sub>0</sub> itself. Unlike Mathtoys, Andrews also defines ℩<sub>0(00)</sub> so the “null” boolean value is F, though this particular constant is never used.

Mathtoys (currently) has Andrews’ theorem 5300 as its Axiom 2, but this difference could easily be removed.

Andrews divides Axiom 4 into sub-cases, where Mathtoys does not. Furthermore, the Mathtoys substitution operation automatically renames bound variables to avoid capturing, avoiding some restrictions on substitution that Q<sub>0</sub> has. The automatically generated names in Mathtoys are reserved for bound variables only.

In Mathtoys, terms that differ only in names of bound variables are deemed to be equal without proving them to be so.

In general Mathtoys does not support metalinguistic reasoning. So where Andrews shows theorem schemas, in Mathtoys there are only rules of inference that generate instances of the schemas given actual terms.

Mathtoys is fundamentally a Hilbert-style system, where Andrews’ Q<sub>0</sub> becomes a natural deduction system with a deduction theorem.

Prooftoys has no deduction theorem.  Instead the Prooftoys version of Andrews' crucial Rule R' is a derived rule of inference that takes |- A => (t1 = t2) and |- A => C to |- A => D, where D is like C, with an occurrence of t1 replaced by t2 (under conditions described by Andrews). This description of course is metalinguistic. Prooftoys has no ability to reason metalinguistically.  All schemas in Andrews' description of Q0 become functions that generate theorems in Prooftoys.

Prooftoys does not reason from sets of hypotheses. Instead it uses formulas with "and" and "implies", and its version of rule R'.

In its implementation of Q0, Prooftoys is currently deficient in handling of types. Provers in the HOL family allow type parameters within the logic, and I wrote an algorithm for unifying type parameters. Unfortunately I found it to be rather inefficient in the implementation, and it is applied somewhat heuristically by the Prooftoys implementation.  Since I have not been able to show that the unification is done in all cases where it is needed, I assume it can be defeated.  In any case, my plan is to remove type parameters entirely and include type information in the internal name of every symbol.  This would result in both speed and safety.  Of course all statements with type parameters in Andrews' Chapter 5 become families of axioms or theorems.

Prooftoys currently takes Andrews' propositions 5300 and 5309 as axioms, as they generalize axioms 2 and 5 to higher types. With the removal of type parameters from the Prooftoys logic it would be possible for these to become families of theorems in Prooftoys. Note that a family of Prooftoys theorems is implemented by a function that accepts parameters, generating the various members of the family based on the values of the parameter(s).


### Core facts and rules for practical use

Andrews’ axioms (including axiom schema for substitution)

Rule of replacement (with assumptions as in R’)

Rules for “if T” and “if F”

Substitution for free as well as bound variables

Functions and predicates of multiple variables

Multi-variable substitution

Tautologies

Replacement of occurrences of T

Basic higher-order matching

Simple definitions

(Maybe constants based on non-unique existence)


### Partial functions and undefinedness

If we define for example a type R of real numbers, a function from R to R has a value of type R at every input of type R. This means in particular that the reciprocal of 0 is of type R. (HOL Light and presumably others define reciprocal of 0 as 0, retaining the property that reciprocal is 1:1 and its own inverse.)

For teaching and learning purposes this is unfortunate, because now division by 0 is clearly and explicitly defined, contrary to the usual textbook explanation that division by 0 is _undefined_.


#### Mailing list postings on division by 0 in the HOL family provers



* _From_: Johannes Hölzl &lt;[johannes.hoelzl at gmx.de](https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=johannes.hoelzl@DOMAIN.HIDDEN)>
* _Date_: Thu, 28 Feb 2019 10:30:13 +0100
* _Cc_: [cl-isabelle-users at lists.cam.ac.uk](https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cl-isabelle-users@DOMAIN.HIDDEN)

---



```
Am Mittwoch, den 27.02.2019, 17:00 +0100 schrieb Chun Tian (binghe):
> Hi,
> 
> despite the non-politeness in the original question, you also didn't
> answer it in a direct way.
> 
> Let's talk about the standard division constants defined for reals in
> Isabelle/HOL, the type used by almost all mathematics formalization of
> Analysis in Isabelle/HOL and AFP.
> 
> Is it true or false, that in Isabelle/HOL "x / 0 = 0" holds for whatever x?

Yes, "x / 0 = 0" for all "x : real".

> P. S. weeks ago I was a little surprised that, in HOL4 (and also HOL
> Light), one can prove ``0 / 0 = 0``, but ``x / 0 = 0`` remains false
> unless ``x = 0``.  Then I'm more surprised to know that Isabelle even
> allows "x / 0 = 0" for all x, just to make sure automatic rewrites can
> work. Yet Isabelle still has the largest portion of formal mathematics
> library among all other theorem provers.

Huh, why do you think that
  """``x / 0 = 0`` remains false unless ``x = 0``."""?
It can be easily proved in HOL4 and HOL Light.:

In HOL4:
  First, by definition: `x / y = x * inv y`
```


<code>   [ https://github.com/HOL-Theorem-Prover/HOL/blob/master/src/real/realScript.sml#L85](https://github.com/HOL-Theorem-Prover/HOL/blob/master/src/real/realScript.sml#L85)</code>


```
  and then `inv 0 = 0` (REAL_INV_EQ_0)
```


<code>   [ https://github.com/HOL-Theorem-Prover/HOL/blob/master/src/real/realScript.sml#L687](https://github.com/HOL-Theorem-Prover/HOL/blob/master/src/real/realScript.sml#L687)</code>


```
In HOL Light:
```


<code> [ https://github.com/jrh13/hol-light/blob/master/real.ml#L812](https://github.com/jrh13/hol-light/blob/master/real.ml#L812)</code>


```
    let REAL_DIV_EQ_0 = prove
      (`!x y. x / y = &0 <=> x = &0 \/ y = &0`,
    REWRITE_TAC[real_div; REAL_INV_EQ_0; REAL_ENTIRE]);;

  so to show that x / 0 = 0 it is enough to show that x = 0 \/ 0 = 0,
  which is obviously true.

 - Johannes
```



#### Advantages of null value(s) for definite description

Having at least one null value enables for example the reciprocal to have no real value given an input of 0. Otherwise some equations would have a real solution, but we would just not be able to determine what value it is.

Proposal: define the concept of range so a null value is never in the range of a function or mapping.

Let’s define the type R to include a single value that is not a real number?  (Call it "null" and write it as ⊥.) Defining the domain of a function f from R to R as the set of real numbers 

Then the reciprocal of 0 is ⊥, and similarly function values are null outside their domains of definition. As far as I can see, if we restrict our consideration to functions with reasonable behavior, the customary rules about defined and undefined in various cases would apply. (Reasonable behavior meaning for example that f(x) is undefined if x is undefined.)

Equality, which applies to objects across all domains, is also special in that x = x is true even if x is null.

_Question:_ Is it perhaps true that any (singleton set of) null value(s) is unique up to isomorphism in some useful sense.


#### Advantages of a single null value

Advantages of defining a form of definite description where the description operator yields the same value for all sets that are not singletons:



* Partial functions are equal iff their values are equal everywhere. (“Simple definition of extensionality”)
* In logics that join definite description with a null value, constructions of e.g. ℝ or ℕ continue to be isomorphic to each other after adding new functions and relations such as reciprocal using definite description.

Given that the usual null value is iota {x. F}, many function definitions result in this as the value everywhere the function is not defined; generally when a function is specified with a domain restriction.

Note that Metamath defines iota with a single null value.

**Numeric operations.** With only one “null” there are no “unusual” undefined values (not equal to iota {x. x ≠ x}). Many inverse functions are customarily and easily defined as f<sup>inv</sup> x = the {y. p x ∧ y = f x}.  For example square root uses p = {x. x ≥ 0}; sin<sup>-1</sup> uses p = {x. 0 ≤ x ∧ x ≤ π / 2}. Constructions of this sort result in the usual undefined value for all inputs that are not in the desired domain.

**Extensibility.** Using just one “undefined” value keeps definitions and facts simpler.

**Extensionality.** A single null value makes it simple to define single functions rather than classes of functions, defining the value outside the function domain to be ⊥, resulting in a simple extensionality principle for functions.

**Evaluation of terms.** With a single null value, expressions and subexpressions with “undefined” results evaluate specifically to ⊥, making evaluation easier to demonstrate in action.


#### Alternative: x / 0 = 0

From Mario Carneiro to the Metamath group (May 1, 2015):


    I am also reminded of a conversation I had with some of the folks on the Mizar team last year. I asked them what they did about division by zero, and they told me that they define division such that x/0 = 0. At first I thought that this was necessary because of the typing, to make division a total function, but they said that no, it was a possibility to define it as a partial function, but they made the definition this way simply because it is easier to work with, and I couldn't disagree - there are several theorems that lose the =/= 0 constraint under this definition, like x/-y = -x/y, 1/1/x = x, x*(1/y)=x/y and many others.

Mario had similar comments in the same forum on September 9, 2017:


    Even type theory, which was invented *specifically for avoiding junk theorems*, fought this demon and lost in some places, specifically division by zero. Most of the type theory systems I know, like Isabelle, Coq, and Lean, made the deliberate choice to totalize the division function so that x / 0 = 0, because it's just more convenient. Ironically, Metamath is one of the few systems that bucks this trend, and properly states that division is undefined at zero. For example, 1/(1/x) = x is true for x =/= 0, but is "coincidentally" true for x = 0 if you define 1/0 = 0, which saves you having to prove that x =/= 0 when applying this theorem. 

It is interesting to me that HOL Light (and probably HOL 4?) also treat division by zero this way, though I don’t think it is acceptable for Mathtoys, because it is too unconventional.


#### Alternative: null set as null value

Multiple expositions of set theory define the value of functions outside their domain as the empty set. (Mendelson, Introduction to Mathematical Logic, 1964, p. 168, Shoenfield, Mathematical Logic, 1967, p. 245, and I believe others). The empty set is a clearly distinguished value, and that surely must be the motivation.

So following tradition, 1/0 = ∅, which might or might not be 0, and thereby an integer, or not.


### Alternative logics

Note that a first-order logic whose theorems include all those of a basic FOL is complete. If it is also sound then it is good to go.

Rule R’ may be used in place of Rule R to accommodate explicit bounds on domains of variables.


#### Some logics compared

VDM (VDL) has a third truth value, and the law of excluded middle is not true.

Z is a similar language with a classical logic.

IMPS (Lutins) is a classical type theory modified with a concept of definedness. Predicates return false when the input is undefined.


### Mathtoys system notes


#### Using ES6 modules in Mathtoys

As of December 2017, Chrome, Safari, and Edge support modules, but Firefox and IE11 do not. Unfortunately at this time no browsers support modules for Web Workers, and in particular web workers can only use the importScripts function to load code, which means that they themselves are not modules and cannot consume modules either.

All of this suggests that Mathtoys will be using traditional JS scripts for some time to come.


#### Variable naming conventions for Mathtoys

All numbers are individuals and in that sense have the same type.

Real numbers: r − z?

Natural numbers / integers: (i, j?), k, m, n

We might wish to use the convention of Greek iota (_ι_) as the imaginary unit.

Then the description operator could be upper case iota (or latin I for simplicity).

Booleans: A, B, C, D

The following normally over individuals:

Predicates: p, q, perhaps also P, Q

(Binary) relationships: r, (R?)

Functions: f, g, h


#### Syntax Issues

How to write the equivalent of f(x + y, z + w) in Mathtoys?

f (x + y) (z + w)

f(x + y, z + w)

Or some other way? The latter seems more reasonable. The former is not at all traditional.

What is the meaning of f g x? Is it like f(g, x) or is it like f(g)(x)? This is important since currying looks unattractive due to its learning curve and its use of higher-order functions and predicates.

It will be hard to abandon invocation of 1-argument functions without parentheses, both because ℝ x has a cleaner look than ℝ(x) and because it helps keep use of functions like exists and forall clean and simple.


#### Matching and unification

These examples pose some challenges to the matching algorithm.


##### Example 1

It is possible to unify


    (1) y − 2 ⋅ x = 0

with (2) (x − x = 0).

But this requires substituting into (1) as well as (2); and furthermore both contain the same variable name, “x”, which must be kept distinct from the x in (1).


##### Example 2

Given the following:


    (1) ℝ x ∧ ℝ y ∧ x ≠ 0 ∧ y ≠ 0 ⇒ ∃!{z. y ⋅ z = x} and


    (2) ∃! p ⇒ ∀{x. p x ≡ x = ℩ p}

We wish to use (A ⇒ B) ∧ (B ⇒ C) ⇒ (A ⇒ C). Using the “fancy” substitution for p (with automatic beta reduction and renaming), we make the two occurrences of B identical and get:


    (3) ℝ x ∧ ℝ y ∧ x ≠ 0 ∧ y ≠ 0 ⇒ ∀{w. {z. y ⋅ z = x} w ≡ w = ℩ {z. y ⋅ z = x}

simplifying to:


    (4) ℝ x ∧ ℝ y ∧ x ≠ 0 ∧ y ≠ 0 ⇒ ∀{w. y ⋅ w = x  ≡  w = ℩ {z. y ⋅ z = x}


    (5) ℝ x ∧ ℝ y ∧ x ≠ 0 ∧ y ≠ 0 ⇒ y ⋅ w = x  ≡  w = ℩ {z. y ⋅ z = x}

This involves substituting for A, B, and C in (1), and a “fancy” substitution for p in (2). All free variables in the result come from (1).


##### Example 3

Similarly, aiming to use (A ≡ B) ∧ (B ⇒ C) ⇒ (A ⇒ C) with


    (1) ∃! p ≡ ∃ {x. p x & ∀ {y. p y => y = x}}


    (2) ∃ {x. p x & q x} => ∃ p & ∃ q

as the conjuncts, also requires substitution for q in (2) (followed by a beta reduction), not just for B in the tautology.


#### User interface notes


##### Selecting terms

Cases that are not handled well at present:



* Selecting just the named function in an ordinary function call of any number of arguments.
* Selecting the entire function call when the function is a lambda.
* Selecting just the unary or binary operator in an invocation of it.

One approach to these cases is to first highlight the larger term, i.e. the function call. Then after a few hundred milliseconds of hovering, narrow the proposed selection.


### Mathematical notes


#### Definite description

The iota operator differs from Hilbert’s epsilon when applied to a set with more than one element. The epsilon operator yields a value in the set. With a null/bottom value and “the” operator defined to yield the null/bottom value, “the” can be defined in terms of either epsilon or iota.


##### Defining iota for higher types

Andrews defines iota for type parameters other than the type of individuals. The definition looks like:


    i p = [x. the {z. ∃ f. p f ∧ f x = z}]

where p is a collection of items of the higher type.  For function (vs. predicate) types, the existential quantifier can admit multiple “f”s, giving the bottom value where there is more than one meeting the conditions. Consider the case where f is function from ind to ind.

For predicate types we get:


    ∃ p. q p ∧ p x and ¬ (∃ p. q p ∧ ¬ p x), equivalent to:


    ∀ p. q p ⇒ p x

which is true only where _all_ matching predicates yield true.

The existential statement(s) above come from the definition of iota:(bool−>bool)->bool being true iff the bool−>bool is the identity function; then extensionality and axiom 1 for booleans.


#### Useful logic facts

##### Tautologies


    (h ⇒ a) ∧ (h ⇒ (a ⇒ b)) ⇒ (h ⇒ b)


    (h ⇒ a) => (h ⇒ (a ⇒ b) ⇒ (h ⇒ b))

These two equivalent tautologies make Andrews’ proof of 2114 (Rule P with hypotheses) work with “⊢” defined to be the same as the conditional.

```
(b ⇒ c) ⇒ ((a ⇒ b) ⇒ (a ⇒ c))
```

Useful for converting tautologies to work smoothly with assumptions:


    (a ⇒ c) ∧ (b ⇒ c) ∧ (a ∨ b) ⇒ c


    (h1 ∧ a ⇒ c) ∧ (h2 ∧ b ⇒ c) ∧ (h3 ⇒ a ∨ b) ⇒ (h1 ∧ h2 ∧ h3 ⇒ c)

This together with forward chaining give the general rule of cases.


    (a ⇒ b ≡ a ⇒ c) ≡ (a ⇒ (b ≡ c))

This is part of the proof that Rule R’ works.

Equivalences useful for equation solving.

```
     a ⇒ (b ≡ c) ≡ (a ∧ b ≡ a ∧ c)
```

Working with conditional equivalences

```
    a ⇒ (b ≡ c) ≡ (a ⇒ b ≡ a ⇒ c)
    a ⇒ (b ≡ c) ≡ (a ∧ b ≡ a ∧ c)
```

Equivalences useful for solving rational equations.

```
    ¬a ⇒ (b ≡ a)  ≡  b ⇒ a 
```

(ruling out putative solutions, e.g. division by zero)

See also Algebra notes.


##### Facts with x not free in A

In Q0, substituting for a boolean variable cannot result in a term containing any variable bound at the site of any of its occurrences. As a consequence, a term with the variable appearing free cannot be a substitution instance of such a fact.


##### Similar facts, with predicate variables

Theorems in a system such as Q0 have no special “not free” condition. (That condition is still useful for matching instances of the theorem − a pragmatic consideration.)

∀ [x. p ⇒ q x] ≡ p ⇒ ∀ [x. q x]

∀ [x. p x ⇒ q] ≡ ∃ [x. p x] ⇒ q (“AE”)

You can prove the first form by cases on p, each case simplifying to an instance of a basic truth.

From AE and propositional calculus we get:

([∀ [x. p x ⇒ q] ∧ ∃ [x. p x]) ⇒ q

Thus if ⊢ ∃ x. B and ⊢ B ⇒ A and x not free in A, then ⊢ A.


##### Completely avoiding “not free” conditions

Metamath has the “turned F” operator ⅎ, which combines with a variable and a formula, indicating intuitively that the value of the formula is “not a function” of the variable. In Q0 we could make a definition:


    Ⅎ p ≡ ∀ x, y. p x ≡ p y

We should then have theorems like:


    (p x ⇒ q x) ∧ Ⅎ p ≡ p x ⇒ ∀ [x. q x]


    (p x ⇒ q x) ∧ Ⅎ q ≡  ∃ [x. p x] ⇒ q x

When a predicate has the form {x. A} with x not free in A, beta conversion immediately shows that the condition is met.


#### Illustrations of logic facts

Example statement of the form P x, y ⇒ Q x (y not free in RHS):

x + y &lt; 2 ∧ y ≥ 0 ⇒ x &lt; 2

This is equivalent to (∃ y : x + y &lt; 2 ∧ y ≥ 0) ⇒ x &lt; 2.


#### Real numbers proof(s)

Irrationality of square roots:

From Timothy Chow on the FOM mailing list:

Let q be the smallest positive integer such that q*sqrt(2) is an integer.

Then q*(sqrt(2) - 1) is a smaller one, contradiction.

(In a bit more detail: Because q*sqrt(2) is an integer, so are

q*(sqrt(2) - 1) and q*(sqrt(2) - 1)*sqrt(2) = 2q - q*sqrt(2).  The

other thing to check is that 0 &lt; sqrt(2) - 1 &lt; 1.  To generalize to

sqrt(n) we just replace "sqrt(2) - 1" with "sqrt(n) - floor(sqrt(n))".)

Tim


#### Common Core proof(s)

Common Core Standards for Mathematics, p. 65: Prove that, given a system of two equations in two variables, replacing one equation by the sum of that equation and a multiple of the other produces a system with the same solutions. (also California, p. 66).


### Foundations notes


#### Type theory vs set theory

“Retaining the type structure of HOL enables one to reason in a way that is independent of decisions about how to implement natural numbers and ordered pairs. Type theory captures what can be done in all implementations; set theory captures what can be done if one is allowed to choose one’s implementation.” −− Thomas Forster, “Weak systems of set theory related to HOL”

In the same document, consider “Kaye’s Lemma”, relating one-sorted set theories and type theories with ambiguity.


#### Practical axiomatizations

The 5 axioms, with Rule R and perhaps R’.

“If” by axioms for “if T” and “if F”.

Axiom: a ≡ b ≡ (if a b (not b))

Standard boolean functions defined from T, F, and “if”.

Or: Axioms T ≠ F and F ≠ T.

[We can get T ≡ T and F ≡ F through theorem 5200.]

[Work through logic.js up to rules.tautology to get tautologies.]


##### Practical rules and facts

Simultaneous substitution for free variables.

Rule R’.

Rewrite rules, including use of &lt;theorem> ≡ T and T ≡ &lt;theorem>.

Higher-order matching in rewrites.


#### Hypotheses and modus ponens

The main obstacle to removal of the Prooftoys distinction between antecedents and hypotheses is Modus Ponens, which has different meanings depending on whether there are hypotheses or not.  Schematically:

H ⇒ A

H ⇒ (A ⇒ B)

−−−−−−−−−−

H ⇒ B

versus

A

A ⇒ B

−−−−−−− 

B

But when working with hypotheses,

H ⇒ (A ⇒ B) ⇔ H ∧ A ⇒ B

so the rule with hypotheses can become:

H ⇒ A

H ∧ A ⇒ B

−−−−−−−−−

H ⇒ B

eliminating an unnecessary occurrence of A in the second implication.


#### Definitions as abbreviations

In logic abbreviations often have parameters that can be filled in (substituted with) terms or formulas depending on the context.  Let’s consider defining equality of functions. Using ≡ to indicate abbreviation, we have:

`Fun f ∧ Fun g ⇒ (f = g ≡ ∀ x: f x = g x)`, or:

`Fun f ∧ Fun g ⇒ (=) = (f, g: ∀ x: f x = g x)`, or:

`(=) = (f ∈ Fun, g ∈ Fun: ∀ x: f x = g x)`

#### Axiom 2 and Rule R’

Andrews’ Axiom 2 can be derived given Rule R’.

```
1. u = v ⇒ u = v
2. f u = f u
3. u = v ⇒ f u = f v	by Rule R’, replacing u with v on the right side of step 2
```

#### Equality of functions

Equality of functions: Conventionally equality of functions quantifies over all possible inputs.

Could equality of functions possibly be defined only relative to a domain, used here to mean simply a set?  So if “=R=” means “ pos =ℝ= pos2 ⇔ (∀ x ∈ ℝ) pos x = pos2 x.

Or: f = g ⇔ ∀ x ∈ dom f ∪ dom g: f x = g x


#### Defining properties and relations

Example definition of the property “positive”: positive = {x. x > 0}.

x &lt; y ⇔ ℝ x ∧ ℝ y ∧ ∃ ℝ z: positive z ∧ x + z = y

This is false if x or y is not real. This relation is a set (of ordered pairs), and can be extended to other domains by set union or restricted by set intersection.

ℝ x ∧ ℝ y ⇒ (x &lt; y ⇔ ∃ ℝ z: positive z ∧ x + z = y)

This is true if x or y is not real. It is not a set, but it is implied by the version above.


#### Introducing constants

A constant defined by simple equation (&lt;var> = &lt;term>) can be treated as an abbreviation. Every occurrence of the constant can be replaced by its expansion in any step, and occurrences of its expansion can be replaced by it in any step, without affecting the correctness of any following steps.

For this to work, the constant must be “new” (not used before), and the defining term must have no free variables.


#### Introducing structures

Many mathematical objects are described as structures, typically consisting of a carrier set containing the individuals of the structure, and one or more operations that apply to those individuals. The carrier set is not specified in such a structure, and useful structures apply to many different sets of individuals with suitable operations. Structures such as groups and fields are defined this way. Although the various sorts of numbers are treated as constants by research mathematicians and grade school children alike, they are specified mathematically as structures.

In Prooftoys a structure shows up in two ways: first as a definition of the structure itself, and then as suppositions that certain objects and operations satisfy the requirements of that structure.  Informally you see statements that, e.g. “the set G with operations “+” and “*” form a group. The Prooftoys definition of the structure has the form:

Group(G, op) ≡ closed(op, G) ∧ assoc(op, G) ∧ hasIdent(op, G) ∧ hasInverses(op, G)

Theorems about groups may then assume throughout that Group(&lt;term1>, &lt;term2>).

 In a case like this it is easy enough to see that assumptions are being stated. The Peano axioms, for example, also work this way, though we share certain intuitions that the set of all natural numbers is a constant in spite of this. When using the Peano axioms there is an assumption something like:

AreNaturals(ℕ, suc) ≡ &lt;Peano axioms applied to ℕ and suc>

Along with constants, structures have the characteristic that they can be eliminated from the assumptions supporting a conclusion if none of their free variables occurs free elsewhere in the step, provided that there exists an assignment to those free variables that satisfies the condition.  From ⊢ ∃ x. p x and ⊢ p x ⇒ q, we can deduce ⊢ ∃ x. q, and if x is not free in q, then  ⊢ q. 

The axioms for our datatypes intentionally apply to all sets of objects having the properties specified by the axioms. In that important sense, no particular set is “the natural numbers”.  So a statement about the natural numbers written in traditional notation something like:


#### Ordered pairs and such

The mathematical properties of things like ordered pairs involve the constructor functions for the type.  In the case of ordered pairs there is just one constructor, and the properties are

first (Pair x y) = x

second (Pair x y) = y

We can say that the ordered pair type is defined by the characteristics of the type’s constructor and accessor functions. Equivalently we could write

p = Pair x y ⇒ first p = x ∧ second p = y

and could say that if x is (an element) of an implementation of some type X, Y is of an implementation of some type Y, and if Pair, first, and second implement the ordered pair type, then p is of an implementation of the type Pair⟨X, Y⟩.  [[Perhaps we could model AreNaturals as an NBG-style (proper) class, Pair, first, and second as NBG-style (proper) class functions.]] 

We can implicitly assume “type” restrictions on variables if any set is OK.


#### Collapsing higher types into the individuals

The individuals can be extended to include all the members of any specific type, and the process can be iterated.  Thus if we exemplify the natural numbers as equinumerous classes of individuals and show that such classes (of classes) exist, we can add the natural numbers, to the individuals.

The process can be iterated any finite number of times.

If desired, the added objects can presumably be considered as distinct from any previously defined. (?)


#### Urelements

Suppes (1960, Axiomatic Set Theory, p. 19) defines “is a set” as:

y is a set ⇔ (∃ x) (x ∈ y ∨ y = 0)

Immediately following the definition he writes:

“As might be expected, the notion of being a set is needed every step of the way. Most of the definitions introduced, for instance, will be conditional ones intended intuitively to apply only to sets. In order to save the trouble of continually writing out the predicate “is a set”, we shall adopt the following convention regarding variables. Capital letters ‘A’, ‘B’, ‘C’, etc. shall be used only for sets. Lowercase italic letters ‘x’, ‘y’, ‘z’, etc, on the other hand, may take as their values either sets or individuals.”

Suppes defn of set notation: {x : phi(x)} ⇔ [(∀ x) (x ∈ y ⇔ phi(x) ∧ y is a set] ∨ [y = 0 ∧ ¬ (∃ B) (∀ x) (x ∈ B ⇔ phi(x))] (p. 34)

Potter (2004) has urelements, with discussion of them. He introduces a predicate U which is true of precisely the urelements.

Shoenfield (1967) has them: “We start with certain objects which are not sets and do not involve sets in their construction. We call these objects urelements. We then form sets in successive stages. At each stage we have available the urelements and the sets formed at earlier stages; and we form into sets all collections of these objects.” (p. 238)

Mendelson (1964) also mentions them, simply noting that he will not use them in his development of set theory because they are not required for it.


### Correspondence with programming language constructs


#### Global constants

Defined “constants” correspond to programming language defined constants. Any statement using a constant “c” effectively has the constants definition as an assumption, i.e.


    c = &lt;cdefn> ⇒ &lt;statement>


#### Local variables

Use of “let” in a functional programming language corresponds to using a local lambda expression (function literal). But if a programming language function were defined like:


    function(x) { let y = x + 1; return y + 1; }

a corresponding logic statement would be:


    [x. I z. ∀ y. y = x + 1 ⇒ z = y + 1]


#### Parameter and local variable type declarations

If we define a “?” operator as ? := [p, x. if(p, x, ⊥)], then a typed function declaration like:


    function(int x) = { return g(x); }

corresponds to:


    [x. ℤ x ? g x]

In other words, if x is an integer the result is the same as g(x), otherwise the null value. The logic can support a syntactic sugar for this, like:


    [ℤ x. g x]

Local variable definitions tend to be redundant in the logic, but can be stated similarly as extra conditions on a declared local variable.


### Set theory


#### Paradoxes of naive set theory

From [http://golem.ph.utexas.edu/category/2009/11/feferman_set_theory.html](http://golem.ph.utexas.edu/category/2009/11/feferman_set_theory.html).

There are three paradoxes of naive set theory:



* Russell’s paradox: the set {x | x ∉ x} is contradictory.
* Cantor’s paradox: for any set A, its power set PA is not a [subquotient](http://ncatlab.org/nlab/show/subquotient) of A; but if A were a set of all sets, then PA⊆A.
* Burali-Forti’s paradox: no well-ordered set can be isomorphic to an initial segment of itself; but if Ω were the set of all well-orders, then it would itself be well-ordered, hence isomorphic to an element of itself, and hence isomorphic to an initial segment of itself.


#### Type theory statements in set theory

In translated statements every free variable has a condition that it is an element of its type. To support partial functions, statements normally include a condition that each free variable is in the domain for the type, for example that its value is a real number, not just a member of the type that includes real numbers.

In translated statements every function body, and thus every bound variable (i.e. function argument) is explicitly restricted to be of the declared type (at least if not already sufficiently restricted in the type theory version).  The body is syntactically wrapped in a call to a function that behaves as follows:

If the input is of the function’s declared type, the value is the value of the function body. If the input is not of the declared type and the declared type is boolean the value is “false”. Otherwise the value of the function is a null value.

There is a tradition that sentences containing applications of functions to values outside their domains are considered “non-denoting”. The approach here gives the same theorems if we only consider sentences that avoid this defect. Throughout mathematics, these sorts of potentially non-denoting sentences are avoided, so the the approaches give the same results.


#### Set theory within type theory

I am mainly thinking of a set theory with urelements.

There is a predicate of individuals called “Set”, and a relationship “∈” between individuals, such that


    x ∈ A ⇒ Set A				// only sets have elements


    ∃ [x. Set x ∧ ∀ [y. y ∉ x]]		// empty set


    Set A ∧ Set B ∧ ∀ [x. x ∈ A ≡ x ∈ B] ⇒ A = B	// equality


    Note: If A and B are equal in type theory, they must have the same elements.


    ∃ [x. Set x ∧ y ∈ x ≡ ℕ y]		// there is a set containing ℕ.


    ∀ [p. Set x ⇒ ∃ [y. Set y ∧ z ∈ y ≡ z ∈ x ∧ p z]]	// separation


    x ⊆ y ≡ Set x ∧ Set y ∧ ∀ [z. z ∈ x ⇒ x ∈ y]	// definition of subset


    ∀ [x. Set x ⇒ ∃ [y. z ∈ y ≡ z ⊆ x]]	// axiom of power set (y)


    // Epsilon induction with multiple sorts (“equivalent to axiom of foundation”)


    ∀ [x. Set x ⇒ ∀ [y. Set y ∧ y ∈ x ⇒ P y] ⇒ P x] ⇒ ∀ [x. Set x ⇒ P x]


    // Speculative scribblings:


    Set x ∧ Set y ⇒ Set Funs(x, y)


    // where Funs(x, y) is the set of functions f from x to y


    // (where dom f ⊆ x ∧ rng f ⊆ y)


#### Universe issues with set theory

Functions of interest are not necessarily sets, for example set union, or the function that takes a set to the singleton containing it. These are proper classes.

A function can be mapped one-to-one with its domain, thus there is a one-to-one correspondence between any function whose domain is all sets and the universe of all sets. If such a function were a set (when viewed as a collection of ordered pairs), its power set would also be a set, but one larger than the universe of all sets, which would be a contradiction.

Such functions also themselves have properties and we can define functions with functional arguments. For example they have domains and ranges.  For example, the domains of the functions in the previous paragraphs are the entire universe of sets, and the range of set union is also the universe. The singleton function has an inverse, with domain of only singletons, and one can define a sort of “strictness” property, true if the empty set maps to itself.

There are more properties of sets than sets, so these collections must exist in a “higher” universe.

It is mathematical folklore that category theory cannot be done in ZFC.


#### Integrated type and set theory

The notations [&lt;set> x. φ] and {&lt;set> x. φ} represent individuals, where sets are individuals (so the bound variable is of type individual). The notations represent functions and sets respectively. Presumably in this context &lt;set> is syntactically an identifier, without loss of generality.  The “subsets” function (power set) and “funcs” functions),. Let’s imagine for the moment that the unrestricted notations are of higher type − functions from individuals to individuals or booleans respectively.

Note:  The “funcs” function takes a tuple of sets as its parameter (at least one set), and produces all functions with n arguments, each argument having its domain restricted to its given set.  In this case “n” is at least 1.

Given the potential for confusion caused by sets being individuals, we might want to call individuals “things” instead.  With that in mind -

Also (independently?) x ∪ y is a thing if x and y are things.

Each sort (such as Real, Integer, String, etc.) is a set. The null value then presumably has its own sort.

Individual sets and functions obey the usual extensionality principles.

Being a set or (individual) function would then be a property of certain things.  In particular the set builder and function builder notation produce sets and functions respectively. These properties might be named for example, Set and Fun.


#### Alternative set theory within type theory

Given the close connection between predicates and sets, it would be attractive to define a (partial) function from predicates to sets, such as “setOf”, whose domain is a subclass of the predicates and whose range is the class of all sets. This is a theory where urelements and sets are all individuals of the type theory.

Defining predicates:

U = the class of all urelements

q = (subsets p) ≡ ∀ [x. q x ⇒ … ]

∃ [x. x = setOf p] ≡ 


#### Scott’s axioms for logic and set theory

From “Existence and Description in Formal Logic”.

Here x, y, and z are metavariables ranging over variables of the object language, α and β are terms, φ and ψ are formulas, φ(x/α) represents proper substitution of α for x in φ.

(S0) φ, if φ is a tautology

(S1) ∀ x [ φ ⇒ ψ ] ⇒ [ ∀ x φ ⇒ ∀ x ψ ]

(S2) ∀ y ∃ x [ x = y ]

(S3) α = α

(S4) φ(x/α) ∧ α = β ⇒ φ(x/β)

(Q1) ∀ y [ y ∈ α ⇔ y ∈ β ] ⇒ α = β

(Q2) α ∈ β ⇒ ∃ y [ y = α ]

(Q3) ∀ y [ y ∈ { x : φ } ⇔ ∃ x [ x = y ∧ φ ] ]

where the variable y is not free in α, β, or φ.

Rules of inference:

(MP) If φ and φ ⇒ ψ then ψ

(UG) if [ φ ⇒ ψ ] and x is not free in φ then [ φ ⇒ ∀ x ψ ]