---
title: ITP Paper
draft: true
---

# Abstract 

Prooftoys is an interactive deductive tool with a true
visual interface, written in JavaScript
to run in modern web browsers.  It is the result
of the author's belief that it is time for
computer tools to become a welcome replacement for
pencil and paper in in basic mathematical reasoning
and problem-solving.

As a consequence, the design of Prooftoys has been
driven by an overriding concern for simplicity and 
a less difficult learning process, including a high degree of compatibility
with presentations of mathematical
concepts in high school and lower-level college textbooks.

This paper summarizes the system and its use.

# System structure

## Mathematical content

- Underlying logic with simple definition capability
- Convenience layer of inference techniques and logic facts
- Axioms for the real numbers as the complete ordered field
- Convenient real number facts

## Inference engine

- Parsing
- Logical kernel
- Functions for derived rules
- Metadata
- Fact registration and lookup
- Tautology checking
- Basic one-way matching to find eligible rewrites
- Simplification

Axioms apply to values of all types

Varies slightly from Q0, but same theorems

## User interface

- Proof display with ability to "drill down" into steps to
  all levels of detail
- Elision of assumptions and repeated left sides of equivalences

## Automation

## Proof editing

- "Point and click" selection -- of steps and arbitrary terms
- 
- Simple editing of existing proof, with deletion and inlining of details

# The logic

Simple type theory

## Notation

Avoiding presentation of types, using "ind".

# The real numbers

# The implementation

Axioms, definition, rule of inference.

Derived rules of inference

## Rewriting

Explicit with equations and equivalences; implicit with theorems.

## Convenient inference

## Facts

## Simplification

# User interface

Selecting, drilling down.
Viewing proofs

## Menu

## Matching

# Sample applications

System is self-applied to implement derived rules of inference.

Individuals aspire to relate better to mathematics.

## Logic facts

All from logical axioms.

Some layering.

## Real number facts

From axioms of complete ordered fields.

# Comparison with other tools

Metamath, Mizar, (no tactic proofs)

