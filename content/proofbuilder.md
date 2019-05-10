---
title: Proof playground
---

# Proof playground

<style type="text/css">
.proofEditor {
  margin-top: 15em;
  margin-left: -10em;
</style>

The proof builder lets you interactively build proofs using all of the
publicly-available theorems and rules of inference.  It can make
working with proofs easier, apply rules of inference correctly, show
what inference rules do and how they work.

Note: <i>Proof displays and the Proof Builder are supported in recent
versions of Firefox and Chrome.</i>

<div id=proofEditor></div>

<script>

// On DOM ready:
jQuery(function() {
  // The page might have a "fact=" query parameter.
  const fact_arg = Toy.rawQueryParams.fact;

  // Proof editor node
  const options = fact_arg && {docName: 'proofbuilder', loadDoc: false};
  var editor = new Toy.ProofEditor(options);
  window.proofEditor = editor;
  editor.setEditable(true);
  editor.setRulesMode('general');
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

</script>