---
headless: true
---
{{< jquery >}}
{{< resScript "/pt/js/canvas.js" >}}
{{< resScript "/pt/js/logic-pix.js" >}}
{{< resScript "/pt/js/site.js" >}}

<script>
  Toy.mathifyAll();
  drawBooleans();
  drawStatements();
  drawCombinations();
</script>
