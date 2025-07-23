---
title: Proof builder
menu: menu-docs-plus.md
description: >
  The Prooftoys proof builder helps you interactively
  build proofs with its graphical user interface.
---

# Proof Builder

Note: <i>Proof displays and the Proof Builder are supported in recent
versions of Firefox, Chrome, and Microsoft Edge.</i>

The proof builder helps you interactively build proofs using all of the
publicly-available theorems and rules of inference.  It can make
working with proofs easier, apply rules of inference correctly, show
what inference rules do and how they work.

## Quickstart video

<div style="margin-bottom: 2em">
<a href="https://youtube.com/watch?v=WLvGFIHqL88">
{{< image src="ProofBuilderFrame.png" title="Youtube quickstart video" >}}
</a>
</div>

#### &#x27aa; [***Or read about it***]({{< relref
"/using-proofbuilder.md" >}})

{{% divstyle class="outdented" %}}

## The Proof Builder

{{% divstyle style="margin-top: 1.5em" %}}
<div id=proofEditor></div>
{{% /divstyle %}}

<div class=footer-spacer></div>

{{% /divstyle %}}

<script defer>
$(() => {
  // Do all of this "soon" after all ordinary Prooftoys initializations.
  Promise.resolve().then(() => {
    // The page might have a "fact=" query parameter.
    const fact_arg = Toy.rawQueryParams.fact;
    // Proof editor node
    const options = (fact_arg ? 
                     {docName: 'proofbuilder', loadDoc: false}
                     : {});
    var editor = new Toy.ProofEditor(options);
    window.proofEditor = editor;
    $('#proofEditor').append(editor.$node);
    if (fact_arg) {
      const rules = Toy.rules;
      // Convert "^" in the query string to '&' to support
      // facts with conjunctions in them.
      const fact = fact_arg.replace(/\^/g, '&');
      // If there is a "fact" query parameter, force the editor to
      // load the fact and ignore any existing "proofbuilder" document.
      // If "details" is also supplied, this forces the editor to
      // load a proof of the fact.
      console.log(fact);
      const result = rules.fact(fact);
      editor.addStep(result);
      const details = Toy.queryParams.details;
      if (details) {
        rules.inline(editor.steps[0].original);
      }
    }
  });
});
</script>
