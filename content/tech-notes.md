---
title: Technical notes
---

# Prooftoys technical notes

## More on logic concepts

### Substitution and meaning

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

In a true statement, if we systematically replace every occurrence of
a variable with an expression (the same expression everywhere), the
result of this *substitution* is another true statement, because
the expression has the same value everywhere it appears.

The simple tautology `a ⇒ a` is a true statement,
since `true ⇒ true` and `false ⇒ false`.  A statement like
`(shining sun) ⇒ (shining sun)` is also
true whether the sun is actually shining or not.  The substituted
expression itself can have variables, as in
`x < y ⇒ x < y`.  No matter what values
`x` and `y` have, the value
of `x < y` is going to be the same in both spots, so the whole statement
is still true.

The result of substituting an expression for all instances of a
variable in a statement is called an *instance* of the original
statement, so we say that substituting one or more expressions for
variables in a tautology gives an *instance* of the tautology.

<b>Note:</b> If a mathematical statement has parts that use
"quantifiers" ("for all", "there exists", etc.), substitution has to be
done a bit more carefully, but the idea remains the same.

## Notes on inference

### Managing assumptions

Facts about real numbers are conditional.  For example the commutative
law of addition for real numbers is `R x & R y => x + y = y + x`,
which only asserts the equality for real numbers.  Most steps in
proofs about the real numbers are also conditional.  So when we apply
a fact about real numbers to a step in a proof about real numbers by
replacement or rewriting, often both of the inputs to the rewriting
are conditional.

After any substitution, the inputs to replacement have the form:
`a_1 => (t_1 = t_2)` and `a_2 => c`.  After replacing an occurrence
of `t_1` in `c`, the result looks like `a_1 => (a_2 => c_1)`, where
`c_1` is the result of the replacement in `c`.

Replacement and rewriting steps in Prooftoys use the tautology `(a ⇒
(b ⇒ c)) ≡ (a ∧ b ⇒ c)` to collect the assumptions together.

Also, most inference steps check if the result is conditional `(a =>
b)` and remove duplicated assumptions and any occurrences of `T` to
simplify the result.

### Managing type assumptions

When the result of rewriting has assumptions such as `R (x + y)`, that
the result of some arithmetic operations is real, it uses known
arithmetic facts to break it down into assumptions that the values of
each variable is real.  The example breaks down to `R x & R y`.  It
also can prove that numeric literals are real numbers, so `R (x + 3)`
breaks down into just `R x`.
