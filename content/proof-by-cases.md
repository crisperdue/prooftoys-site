---
title: Proof by cases
description: >
  A proof by cases breaks the possible scenarios down into a finite
  number, proving the same result in each case.
---

# Proof by cases

##### Contents

{{< TOC >}}

## Introduction

To prove a mathematical fact by cases, we break down the possible
scenarios into a finite number, and prove the desired conclusion in each
of these cases.

Straightforward [direct proof]({{< relref "/direct-proof.md" >}})
shows that

```R x & R y => (x = 0 | y = 0 == x * y = 0```

That proof used the fact that

```R x & R y & (x = 0 | y = 0) => x * y = 0```

which is a natural one to approach by cases.  One case is where `x = 0`,
and the other is where `y = 0`.  We prove the desired conclusion in each
of these scenarios, and then combine the two results into a single
statement.

## The logical basis

The core mathematical fact behind proof by cases is that

```(A => C) & (B => C) == A | B => C```

The idea is to prove `A => C` and `B => C` separately, combine
them into a single statement `(A => C) & (B => C)`, then to replace that
single statement with `A | B => C`.

## The proof

<div class="proof-display mb-4" data-steps='
(steps
  (1 consider (t ((x * y))))
  (2 andAssume (s 1) (t ((x = 0))))
  (3 applyAsmHere (s 2) (path "/right/right/left") (t ((x = 0))))
  (4 simplifyFocalPart (s 3))
  (5 andAssume (s 1) (t ((y = 0))))
  (6 applyAsmHere (s 5) (path "/right/right/right") (t ((y = 0))))
  (7 simplifyFocalPart (s 6))
  (8 join (s 4) (s 7))
  (9 cases (s 8))
)
'></div>

## Using the proof builder

**Proving:** `R x & R y & (x = 0 | y = 0) => x * y = 0)`.

<div class="proof-editor mb-4" data-one-doc></div>

<div class=footer-spacer>
