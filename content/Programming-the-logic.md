---
title: Programming the logic
draft: true
---

## Principles

The Prooftoys implementation is built around the ideas of a small kernel and extensibility.
The only primitive rule of inference is Rule R, which replaces any part of a proved formula (except
a formal parameter name) using a proved equation that has the same expression as its left-hand side.

The implementation of Rule R requires each of its input formulas to be justified either as an axiom or as a consequence of Rule R.  Thus in a fully safe language, only properly justified formulas would be identified as theorems.

Since every proved formula has a justification means that the correctness of all theorems is auditable by tracing back through all of the justifications and replaying the inferences.  This is not dependent
on any guarantees of security in the JavaScript computing environment.

## Paths

In the Prooftoys implementation, Path objects represent the location of a subexpression within a formula.  For example in an expression `expr` that is a function call, `/fn` is the function part and `/arg` is the argument part.  In an anonymous function (lambda), the bound variable is `/bound` and the body of the function is `/body`.

Paths have segments, and in almost all cases can be passed to functions as strings such as 
`/fn/body`, which would identify the function body in a call to an anonymous function, e.g. `({x. T} y)`.

## Building a proof

Invoking a rule of inference (or theorem) is done by calling `Toy.rules.<ruleName>` and passing all needed inputs as arguments.  In source files, normally a constant "rules" is defined with the value of `Toy.rules`. 
So for example if "equation1" and "step2" have been proved, and the variable "path" is a Path to the desired subexpression of step2, use of Rule R could look like:
```
var step3 = rules.r(equation1, step2, path);
```

The value of this function call is the result of applying Rule R to the arguments, and includes a justification.

There are numerous useful operations on expressions in the class `Expr` with its subclasses `Atom`, `Call`, and `Lambda`.

TODO: Link this information up with API docs.