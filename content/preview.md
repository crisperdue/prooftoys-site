---
title: Preview
---
# Previews and demos

##### **Contents**

{{< TOC >}}

## Video preview

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

<div style="position: relative; box-sizing: content-box; max-height: 80vh; max-height: 80svh; width: 100%; aspect-ratio: 0.7420435510887772; padding: 40px 0 40px 0;"><iframe src="https://app.supademo.com/embed/cme06oavx008byjyix35lqinf?embed_v=2&utm_source=embed" loading="lazy" title="Socrates redux" allow="clipboard-write" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

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
to make it true, and Prooftoys proves it for you behind the scenes

<div style="position: relative; box-sizing: content-box; max-height:
80vh; max-height: 80svh; width: 100%; aspect-ratio: 0.974293059125964;
padding: 40px 0 40px 0;
margin-bottom: 40px;">
  <iframe
  src="https://app.supademo.com/demo/cmczcu0sd009nzg0io848eqx1"
  loading="lazy" title="Supademo Demo" allow="clipboard-write"
  frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true"
  allowfullscreen style="position: absolute; top: 0; left: 0; width:
  100%; height: 100%; border: 2px solid blue;">
  </iframe>
</div>
