---
title: About
description: >
  Prooftoys is a simple, easy to learn and use use proof
  assistant for beginners.
---

> The scientific man does not aim at an immediate result.  He does not
expect that his advanced ideas will be readily taken up.  His work is
like that of the planter -- for the future.  His duty is to lay the
foundation for those who are to come, and point the way. --- Nikola
Tesla

### About Prooftoys.org

**Welcome!** The [Prooftoys](http://prooftoys.org) website and its
software are ongoing experiments in creating computer aids to help
human beings learn and do mathematics.  The application software is
proudly open source, hosted at <a href="http://github.com">Github</a>,
primarily in the <a
href="http://github.com/crisperdue/prooftoys">crisperdue/prooftoys</a>
repository.

The key goal is to create a computer math tool or tools that are easy,
highly available, useful, attractive, and valuable to people learning
(or doing) mathematics, especially newcomers, for reading and writing
proofs, and for solving problems deductively.

The larger vision is to develop the kind of user experience that can
bridge the gap between computer proof technology and ordinary people
learning to understand and use mathematics.

### About the logic

At its core, the reasoning in Prooftoys is **equational**, in other
words based on equations.  In particular Leibniz's principle of
replacing a term with an equal term is fundamental, as applied in
algebra from the basic high school level and up.

Prooftoys implements a form of logic known as <a target=_blank href=
"https://imps.mcmaster.ca/doc/seven-virtues.pdf">simple type theory</a>.
Anything provable in "first-order" logic remains provable.  Furthermore,
reasoning about equality is not an add-on, in fact it is the core.
General statements about functions and predicates can also be expressed
and proved here, unlike first-order logic.

This particular system is based rather directly on the
**Q<sub>0</sub>** system of Carnegie Mellon University Professor Peter B.
Andrews.  See the [tech notes]({{< relref "/tech-notes.md" >}}) for more
details.

### Working with a logic textbook

Yes, you should be able to use the Proof Builder tool with your logic
textbook.  If your textbook presents problems to solve by formally
proving or disproving statements in pure logic, the intention is that
you will solve the problems using the rules laid out in the textbook.

To do this, you will need to be careful to limit the inference steps and
logic facts you use.  [This page]({{< relref "/emulating-logics.md" >}})
has details for a couple of examples I have seen reference.

### Getting in touch

One goal is to develop a friendly community of users around the tools
here and their goals of using computers for mathematical reasoning.
Don't hesitate to say "hello" to the author through <a
href="mailto:cris@perdues.com"><b>email</b></a>.

Sincerely,<br>
Cris Perdue

<!--
Or you can reach him on Slack.com with <a target=_blank href=
"https://join.slack.com/t/mathtoys/shared_invite/zt-hfjkerk4-Am67OX60KEHycW9WEKFbxQ">
<b>this link</b></a>.

Today there are wonderful tools for practitioners who need answers to
mathematical questions, ranging from handheld calculators to numerical
simulators to computer algebra systems.  Generally speaking, these
tools do not require their users to use proof, though understanding of
mathematical principles can be most helpful to users of these tools,
and proof is a part of the essence of all mathematical principles.

At the same time, mathematical proof is poorly understood by both
students and skilled practitioners of fields that use and even rely on
mathematics.

Prooftoys is an effort to bring deeper and stronger understanding of
mathematical proof to a wider audience, aided by computer
implementation of principles of mathematical proof.

The experience of two or more thousands of years of
mathematical practice has shown that diverse minds from different
backgrounds and different times can agree when a statement has been
mathematically proven according to accepted principles, and when it
has not.
-->

