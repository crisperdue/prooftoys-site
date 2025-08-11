---
title: 'Concepts'
description: >
  Concepts and terms used on the Prooftoys website
  to describe logic, the system, and its user interface.
---
# Prooftoys logic concepts and terms

### Types of values

The most basic kinds of things the logic works with are "true",
"false", and *individuals*.  In Prooftoys "true" and "false" are
written as `T` and `F`.

Numbers are the sorts of _individuals_ you will usually encounter in
Prooftoys.  Everything in the logic that is not a truth value or an
individual is a function, with input(s) and an output value.

Functions such as addition and multiplication have inputs that are
numbers (individuals) and outputs that are also numbers.  Function
inputs and outputs can also be boolean, and a function can even have a
function as its input or its value or both.

Much more explanation of functions with boolean inputs, or outputs, or
both, is in the section [Logic through pictures]({{< relref
"/logic-pix-booleans.md" >}}).

#### Terminology

<a id=boolean></a>
**Boolean value.** Simply either `T` (_true_)
or `F` (_false_), named in honor of <a
href="http://en.wikipedia.org/wiki/George_Boole" target=_blank> George
Boole</a>, a pioneer in the development of these ideas.  These are
also known as the _truth values_.

<a id=predicate></a>
**Predicate.** A *predicate* tests a value and gives a true/false
result. For example, a test whether a number is even is a predicate.
Every predicate can be thought of as a collection.  In Prooftoys there
is no technical difference between "the set of all positive numbers"
and the predicate that tests whether something is a positive number.

<a id=relation></a>
**Relation.** A *relation* such as "less than" tests whether a number
is less than another number, for example `x < y`. It has two inputs
and gives a true/false result.

<a id=collection></a>
**Collection.** Collections are functions whose values are boolean, so
there is no technical difference between a collection and a predicate
or relation.

<a id=fact></a>
**Fact.** In Prooftoys we refer to any proved statement as a _fact_.
Prooftoys has a registry of selected facts that are already proved
for you, and may offer to apply them for you.  Rules that are
described as using facts work with these "well known" facts.
Tautologies are also considered facts, because Prooftoys can prove
them on demand.

<a id=term></a>
**Term.** Mathematical statements have structure in which the
statement has parts and a part of a statement may also have parts.
For example the (true) statement `(x = y) == (y = x)` has three parts:
`x = y`, `==`, and `y = x`.  The part `x = y` also has three parts:
`x`, `=`, and `y`.  In the language of Prooftoys each of these parts,
whether large or small, is a _term_.  By design the proof builder only
ever highlights complete terms.

<a id=instance></a>
**Instance, substitution instance.** A _substitution instance_ of a
term is simply the result of applying some substitution to the term.
Every term is also a substitution instance of itself.  Documentation
of Prooftoys often uses just _instance_ with the same meaning.

<a id=conditional></a>
**Conditional.** A conditional term is any term that matches the
syntactic pattern `A => B`.  Many proof steps are conditional
statements, the whole statement having this form.

<a id=assumption></a>
<a id=antecedent></a>
<a id=condtion></a>
**Assumption(s), antecedent, condition.** The left side of a conditional
term is its *antecedent*, also known as its *condition*.  If the left
side has the form `A1 & A2 & ... => C`, all of the `A`s are
*assumptions*.

<a id=conclusion></a>
<a id=consequent></a>
**Conclusion, consequent.** The right side of a conditional term is
known as its *conclusion* or *consequent*.

#### Related to function terms

<a id=schema></a>
<a id=match></a>
<a id=pattern></a>
**Schema**, **pattern**.  A schema is a term in the Prooftoys language.
But if it is described as a _pattern_ to match, then the variables in
the pattern are like blank spaces in a form.  Any term in the language
that can be made by filling in those blanks matches the pattern if it
also satisfies any other requirements stated for it.

Sometimes in a pattern, instead of using variable names we use a
longer name or description, written between "<" and ">", for example:
`\<name>` instead of `X`.

<a id=function-term></a>
<a id=lambda></a>
**Function term.** A function term is any term that matches the
pattern `{x. X}`, where `x` is any variable and `X` is any term.  This
notation is like the "set notation" seen in textbooks, but generalized
to describe arbitrary functions, not just collections.

In more technical contexts, this is known as a _lambda term_, and is the
characteristic feature of logics and computational systems known under
the heading of _lambda calculus_ as first investigated by <a
href="https://wikipedia.org/wiki/Alonzo_Church">Alonzo Church</a> and
his students.

Prooftoys is based on *simple type theory*, which also supports function
constants and function variables in addition to function terms.

<a id=body></a>
<a id=function-body></a>
**Body** (of a _function term_). In a function term matching the
pattern `{x. X}`, the part matching `X` is the _body_ of the function
term.

<a id=binding></a>
**Binding**.  A _function term_ is also known as a _binding_.  In a
function term matching the pattern `{v. X}`, the variable `v` is
_bound_ in the function term, and every occurrence of that name in `X`
is a _bound occurrence_.

<a id=free></a>
**Free variable.** A free variable of a term is one that has an
occurrence somewhere in the term that is not a _bound occurrence_.
If a term contains no _function terms_, all of its variables are
free variables.

**Free occurrence.**  A _free occurrence_ of a variable name
in a term is an occurrence that is not a _bound occurrence_.

<a id=bound></a>
**Bound variable.** In a function term matching the pattern `{x. Z}`,
the variable that matches `x` in the pattern is the _bound variable_
of the function term.

**Bound occurrence.** Any appearance of the _bound variable_ of a
_function term_ in the _body_ of the term is a _bound occurrence_.
For example in `{x. x > 0}`, the one occurrence of `x` in `x > 0`
is a _bound occurrence_.
