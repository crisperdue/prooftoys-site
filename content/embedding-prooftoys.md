---
title: Embedding Prooftoys in a web page
menu: menu.md
---
<style type="text/css">
.logicZone .content .code {
  font-family: "Roboto Mono", monospace;
}
</style>

### Sample HTML for embedding Prooftoys in a web page

Here is complete HTML for a sample page that embeds a Prooftoys proof editor.

~~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Prooftoys embedding</title>
  <link rel="stylesheet" href="https://prooftoys.org/css/pt.css">  <===
</head>
<body>
  <h1>Prooftoys embedding -- sample page</h1>
  <div class=proof-editor></div>                                   <===
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>  <===
  <script src="https://prooftoys.org/js/all.js"></script>          <===
</body>
</html>
~~~~

Put the stylesheet link in the `head` section and the scripts at the bottom of the `body`. The `div` can go anywhere within the content of the page, and there can be more than one of them.


#### Preloading steps into a proof editor

```text
<div class="proof-editor" data-steps='
(steps
(1 consider (t (4 * pi * r ** 2 = (4 / 3) * pi * r ** 3)))
)'></div>
```
