---
title: FAQ
menu: menu-site.md
---

### Questions and answers

Q: Where is the set theory?
: A: Like many modern proof assistants, Prooftoys is based on *simple
  type theory* rather than set theory.  A big advantage
  for Prooftoys is that type theory enables us to get on very directly
  to talk about things like numbers without theorizing about sets
  first.
  
Q: Mathematics can get limitlessly sophisticated.  How can the
principles of basic algebra possibly take us to all of that?
: A: The power of simple principles to solve complex problems is part
  of the wonder of mathematics.  In fact Prooftoys does employ just a
  couple of simple *extensions* to basic algebra, but mostly it
  applies the same principles in more general ways.

Q: Tell me more about this type theory.
: A: See the [technical notes]({{< relref "/tech-notes.md" >}}) for
  more information about type theory and Prooftoys' use of it.
  
Q: Is there something weird about this logic?  When I look at theorems
with quantifiers for example, I see things like `forall P`.  What's up
with that?
: A: No, the principles behind Prooftoys are about as standard as can
  be.  The notation is sometimes a bit different though.  Anywhere you
  see something like `forall P` you can read it exactly as `forall
  x. P x` in a more traditional notation.

Q: Some theorems have curly braces in them.  What do they mean?
: A: The curly braces are the Prooftoys notation for on of the main
  innovations of type theory.  See the technical notes.

Q: I have a different question.  What can I do?
: A: Contact the author by email, or better yet file an issue or a
  question on
  [GitHub](https://github.com/crisperdue/prooftoys/issues), perhaps
  with the "question" label.
