---
title: Proof playground
menu: menu-docs.md
---

# Proof builder playground

<style type="text/css">
/* Set the proof editor below the sidebar, but moved
   to the left to give it a wider space to work in. */
.proofEditor {
  margin-top: 5em;
  margin-left: -10em;
  margin-bottom: 5em;
}

/* Use normal positioning so the proof editor won't
   overlap the sidebar. */
div.sidebar {
  position: static;
}
</style>

The proof builder lets you interactively build proofs using all of the
publicly-available theorems and rules of inference.  It can make
working with proofs easier, apply rules of inference correctly, show
what inference rules do and how they work.

**Note** that the proof builder tool needs documentation that does not
yet exist.  Today using it is still an adventure.  You might like to
start with the version tuned for solving simple math problems
at [the Mathtoys website](http://mathtoys.org/equations.html).

Note: <i>Proof displays and the Proof Builder are supported in recent
versions of Firefox, Chrome, and Microsoft Edge.</i>

<div id=proofEditor></div>

<script defer>

// On DOM ready.  This initializer runs before jQuery or
// Prooftoys scripts are loaded.
document.addEventListener('DOMContentLoaded', event => {
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
