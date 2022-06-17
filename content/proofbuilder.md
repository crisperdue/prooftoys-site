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

#### Quickstart demo

<div style="margin-bottom: 2em; border: 2px solid blue">
<a href="https://youtube.com/watch?v=WYcJBE6ZCgA">
{{< image src="QuickstartYoutubeImage.jpg" title="Youtube quickstart video" >}}
</a>
</div>

##### &#x27aa; [**Read about the proof builder**]({{< relref
"/using-proofbuilder.md" >}})

{{% divstyle class="outdented" %}}

### Proof builder

{{% divstyle style="margin-top: 1.5em" %}}
<div id=proofEditor></div>
{{% /divstyle %}}

<div class=dialogWrapper>
<div class="dialog" style="xmax-width: 100%">
<span style="flex: auto; margin: 0 1em">
Will you kindly help advance Prooftoys usability
by enabling detailed tracing of your usage?
<i>You can opt out at any time.</i>
For more information, see the
<a href="/privacy/">privacy information</a> page.
</span>
<input type=button class=buttonYes value=Yes
 onclick="Toy.setSessionRecording(true)">
<input type=button class=buttonNo value=No
 onclick="Toy.setSessionRecording(false)">
</div>
</div>

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
