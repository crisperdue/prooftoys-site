---
title: Proof builder
menu: menu-docs.md
---

# The proof builder

<style type="text/css">
/* Set the proof editor below the sidebar, but moved
   to the left to give it a wider space to work in. */
.outdented {
  margin-top: 3em;
  margin-left: -12em;
  margin-bottom: 5em;
}

/* Use normal positioning so the proof editor won't
   overlap the sidebar. */
div.sidebar {
  position: static;
}
</style>

Note: <i>Proof displays and the Proof Builder are supported in recent
versions of Firefox, Chrome, and Microsoft Edge.</i>

The proof builder lets you interactively build proofs using all of the
publicly-available theorems and rules of inference.  It can make
working with proofs easier, apply rules of inference correctly, show
what inference rules do and how they work.

{{% divstyle style="border: 1px solid gray" %}}
{{< youtube id="WYcJBE6ZCgA" title="Proof builder quickstart video" >}}
{{% /divstyle %}}

{{% divstyle class="outdented" %}}

### Proof builder

##### &#x27aa; [**Read about the proof builder**]({{< relref
"/using-proofbuilder.md" >}})

{{% divstyle style="margin-top: 1.5em" %}}
<div id=proofEditor></div>
{{% /divstyle %}}

{{% /divstyle %}}

<script defer>

$(() => {
  // Do all of this "soon" after all ordinary Prooftoys initializations.
  Promise.resolve().then(() => {
    // The page might have a "fact=" query parameter.
    const fact_arg = Toy.rawQueryParams.fact;

    // Proof editor node
    const options = fact_arg && {docName: 'proofbuilder', loadDoc: false};
    var editor = new Toy.ProofEditor(options);
    window.proofEditor = editor;
    $('#proofEditor').append(editor.containerNode);

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
