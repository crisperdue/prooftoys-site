---
title: Preview
---
# Previews and demos

##### **Contents**

{{< TOC >}}

## Video intro

<div style="margin-bottom: 2em">
<a href="/ProoftoysPreview.mp4">
{{< image src="ProofBuilderFrame.png" alt="Proof builder preview video" >}}
</a>
<!--
<video controls poster="/ProofBuilderFrame.png">
  <source src="/ProoftoysPreview.mp4">
</video>
 -->
</div>

## Reasoning forward

Here is the classic proof that the Greek philosopher Socrates is mortal,
starting from true statements.  They are already asserted to be true ---
without proof.  The descriptions for steps 1 and 2 show that they have
been asserted.

In step 1, `x` is a variable, and the proof will substitute the constant
`Socrates` for `x` there.

<h2 id="interactive-walkthrough" class="demo-link"
onclick="Supademo.open('cme06oavx008byjyix35lqinf')">
☞ Click for interactive demo
</h2>

## Reasoning backward

In Prooftoys, reasoning "backward" means reasoning based on a stated
goal.  The proof starts with a statement, known to be true, that is like
the goal statement, but with some unwanted assumptions.  The process
eliminates excess assumptions until what remains is the actual goal
statement.

The demo is a step-by-step walkthrough demo of of the <a
href="/country-music/">Country Music Theorem.</a>

Prooftoys generates an initial statement from a goal statement by
including the desired conclusion as an assumption.  This is guaranteed
to make it true, and Prooftoys proves it for you behind the scenes.

<h2 id="interactive-walkthrough2" class="demo-link"
onclick="Supademo.open('cme06oavx008byjyix35lqinf?step=5')">
☞ Click for interactive demo
</h2>

<script src="https://script.supademo.com/supademo.js"></script>
