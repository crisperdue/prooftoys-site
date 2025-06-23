---
title: HOL Zero primitives
---
## HOL Zero primitive inference rules

The descriptions below come from comments in the file thm.ml. The HOL
Zero primitive inference rules are very similar to the HOL Light
primitive rules, and both have exactly 10.

------------
<br>
HOL Zero has 10 primitive inference rules.  These give basic
properties about equality, lambda abstraction, propositional deduction
and instantiation, and correspond to classic rules of typed lambda
calculus and propositional logic.  All of these rules work modulo
alpha-equivalence.

The descriptions of these rules and the three axioms of HOL Zero are
by Mark Adams (mark@proof-technologies.com).

###### 1. prim_eq_refl_conv : term -> thm

This is the reflexivity rule for equality.  It takes a term, and returns a
theorem stating that this term is equal to itself, under no assumptions.
There are no restrictions on the supplied term.

~~~
      `t`
    --------
    |- t = t
~~~

###### 2. prim_beta_conv : term -> thm

This is the beta reduction conversion.  It takes a lambda abstraction
application term, and returns a theorem stating that the application is
equal to the lambda abstraction body but with all occurrences of the
binding variable replaced with the application's argument, under no
assumptions.

~~~
         `(λx. t) s`
    ---------------------
    |- (λx. t) s = t[s/x]
~~~

###### 3. prim_mk_comb_rule : thm -> thm -> thm

This is the equality congruence rule for function application.  It takes
two equality theorems, and applies corresponding sides of the first
theorem to the second, unioning the assumptions.  The first theorem's LHS/
RHS must be functions with domain type equal to the type of the second
theorem's LHS/RHS.

~~~
    A1 |- f1 = f2    A2 |- t1 = t2
    ------------------------------
       A1 u A2 |- f1 t1 = f2 t2
~~~

###### 4. prim_mk_abs_rule : term -> thm -> thm

This is the equality congruence rule for lambda abstraction.  It takes a
variable and an equality theorem, and abstracts the variable from both
sides of the theorem.  The variable must not occur free in the assumptions
of the supplied theorem.

~~~
       `x`   A |- t1 = t2        [ x cannot occur free within A ]
    ------------------------
    A |- (λx. t1) = (λx. t2)
~~~

###### 5. prim_assume_rule : term -> thm

This is the assumption rule.  It takes a boolean term, and returns a
theorem stating that the term holds under the single assumption of the
term itself.

~~~
       `p`
    --------
    {p} |- p
~~~

###### 6. prim_disch_rule : term -> thm -> thm

This is the implication introduction rule.  It takes a boolean term and a
theorem, and removes the term from the theorem's assumptions (if present)
and adds it as an antecedent of the conclusion.  Note that the term does
not have to be in the assumptions of the supplied theorem for the rule to
succeed.

~~~
      `p`   A |- q
    ----------------
    A\{p} |- p ==> q
~~~

###### 7. prim_mp_rule : thm -> thm -> thm

This is the modus ponens rule.  It takes an implication theorem and a
second theorem, where the implication theorem's antecedent is alpha-
equivalent to the conclusion of the second theorem.  It returns a theorem
stating that the implication theorem's consequent holds, under the unioned
assumptions of the supplied theorems.

~~~
    A1 |- p ==> q    A2 |- p
    ------------------------
          A1 u A2 |- q
~~~

###### 8. prim_eq_mp_rule : thm -> thm -> thm

This is the equality modus ponens rule.  It takes an equality theorem and
a second theorem, where the equality theorem's LHS is alpha-equivalent to
the conclusion of the second theorem.  It returns a theorem stating that
the equality theorem's RHS holds, under the unioned assumptions of the
supplied theorems.

~~~
    A1 |- p <=> q    A2 |- p
    ------------------------
          A1 u A2 |- q
~~~

###### 9. prim_inst_rule : (term * term) list -> thm -> thm

This is the variable instantiation rule.  It takes a variable
instantiation list and a theorem, and performs a single parallel
instantiation of the free variables in the theorem's assumptions and
conclusion, according to the instantiation list.  All free occurrences of
instantiation list domain elements in the theorem get replaced.  Each
instantiation list domain element must be a variable, and each range
element must have the same type as its corresponding domain element.

Binding variables in the resulting theorem are renamed as necessary to
avoid variable capture.  Note that instantiation list entries that do not
apply are simply ignored, as are repeated entries for a given variable
 (beyond its first entry).  If no instantiation list entries apply, then
the returned theorem is the same as the input.

~~~
        [(x1,t1);(x2,t2);..]    A |- p
    --------------------------------------
    A[t1/x1,t2/x2,..] |- p[t1/x1,t2/x2,..]
~~~

###### 10. prim_inst_type_rule : (hol_type * hol_type) list -> thm -> thm

This is the type variable instantiation rule.  It takes a type variable
instantiation list and a theorem, and performs a single parallel
instantiation of the type variables in the theorem's assumptions and
conclusion, according to the instantiation list.  All occurrences of
instantiation list domain elements in the theorem get replaced.  Each
instantiation list domain element must be a type variable.

Note that instantiation list entries that do not apply are simply
ignored, as are repeated entries for a given type variable (beyond its
first entry).  If no instantiation list entries apply, then the
returned theorem is the same as the input.

~~~
         [(tv1,ty1);(tv2,ty2);..]    A |- p
    ----------------------------------------------
    A[ty1/tv1,ty2/tv2,..] |- p[ty1/tv1,ty2/tv2,..]
~~~

### Comparison with HOL Light

HOL Light has a primitive <tt>TRANS</tt> rule (transitivity of
equality) and a primitve <tt>DEDUCT_ANTISYM_RULE</tt> that deduces
logical equivalence from deduction in both directions.

In place of these two, HOL Zero has a <tt>prim_mp_rule</tt> and a
<tt>prim_disch_rule</tt> as described above.

The remaining primitive rules are the same.

## HOL Zero axioms

The core of HOL Zero has 3 axioms.

###### 1. Eta axiom

This axiom states that, for any given function, the lambda abstraction
formed by applying the function to the binding variable is equal to
the function.

~~~
∀ f. (λx. f x) = f
~~~

###### 2. Implicational antisymmetry axiom

This axiom states the antisymmetry property for implication.

~~~
∀ p1 p2. (p1 ==> p2) ==> ((p2 ==> p1) ==> (p1 <=> p2))
~~~

###### 3. Axiom of choice

This axiom states a crucial property about the selection operator, namely
that any element satisfying a given predicate implies that the selected
element for the predicate satisfies the predicate.  Note that it says
nothing about when there is no element that can satisfy the predicate.

~~~
∀ x. P x ==> P ($@ P)
~~~

## HOL Zero core definitions

The axioms refer to the universal quantifier, <tt>∀</tt>, which is
defined as

~~~
∀ = λP. P = (λx. true)
~~~

meaning that the given predicate is true for all possible values of
its argument.

and <tt>true</tt> is defined as

~~~
true = ((λp. p) = (λp. p))
~~~

(where <tt>p</tt> is a boolean value), meaning that the identity
function on boolean values is equal to itself.
The biconditional (<tt><=></tt>) is an abbreviation for equality of
boolean values.

Some other defined constants are presented as part of
the HOL Zero core, but are not referenced by the core axioms or
primitive rules of inference.
