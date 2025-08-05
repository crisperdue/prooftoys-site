---
title: Prooftoys logic theorems list
description: >
  The main theorems of pure logic in Prooftoys
  with convenient access to all of their proofs.
  Theorems of pure logic apply to all branches
  of mathematics.
---

# Prooftoys logic theorem list

This page shows a set of basic theorems of the logic as rendered by
the Prooftoys/Mathtoys system.  A primary value of this page is for
anyone interested in seeing proofs of these theorems.  To view a proof
to any desired level of detail, click on one of the bits of text
displayed in blue like hyperlinks.

Furthermore, all tautologies are also theorems of the logic.

<div id=proofDisplay style="margin-bottom: 1em"></div>

<script>
// On DOM ready.  This initializer may run before jQuery or
// Prooftoys scripts are loaded.
document.addEventListener('DOMContentLoaded', event => {
  // Proof display
  const display = new Toy.ProofDisplay();
  window.proofDisplay = display;  // debugging
  $('#proofDisplay').append(display.node);

  function fact(statement) {
    display.addStep(Toy.rules.fact(statement));
  }
  fact('(x = y) == (y = x)');
  fact('x = y & y = z => x = z');
  fact('{x. p x} = p');

  fact('forall {x. T}');
  fact('exists {x. T}');
  fact('not (forall {x. F})');
  fact('forall p => p x');
  fact('p x => exists p');
  fact('forall {x. p x => q x} => (forall p => forall q)');
  fact('forall {x. p x => q x} & forall p => forall q');
  fact('forall {x. p x => q x} => (exists p => exists q)');
  fact('forall {x. p x => q x} & exists p => exists q');
  fact('forall {x. forall {y. p x y}} == forall {y. forall {x. p x y}}');
  fact('exists {x. exists {y. p x y}} == exists {y. exists {x. p x y}}');
  fact('forall {x. a | q x} == (a | forall q)');
  fact('exists {x. a & q x} == a & exists q');
  fact('forall {x. a => q x} == (a => forall q)');
  fact('forall {x. a} == a');
  fact('exists {x. a} == a');
  fact('forall {x. p x & q x} == forall p & forall q');
  fact('exists {x. p x | q x} == exists p | exists q');
  fact('forall p | forall q => forall {x. p x | q x}');
  fact('exists {x. p x & q x} => exists p & exists q');
  fact('forall {x. p x => q} == (exists p => q)');
  fact('exists p == not (forall {x. not (p x)})');
  fact('not (exists p) == forall {x. not (p x)}');
  fact('exists {x. not (p x)} == not (forall p)');

  fact('exists1 p == exists {x. p = {y. y = x}}');
  fact('exists1 p == exists {x. forall {y. p y == y = x}}');
  fact('exists1 p == exists {y. p y & forall {z. p z => z = y}}');
  fact('exists1 p => (p x == x = the1 p)');
  fact('p x & forall {y. p y => y = x} => exists1 p');
  fact('f x = the1 (Q x) & exists1 (Q x) => (Q x y == f x = y)');
});
</script>
