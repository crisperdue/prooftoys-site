---
title: Home
type: custom
noSidebar: true
---

<a name=theStory id=theStory></a>
## What Prooftoys is about

Logic and proof are the building materials of
mathematics.  They make it possible to build sturdy mathematical
structures that reach to the clouds and even far beyond.

Mathematics has had an extraordinary impact on modern science and
technology.  Progress in all fields of engineering, physics,
chemistry, and science generally has been greatly accelerated by use
of mathematics.  And it is proof that distinguishes mathematics from
all other fields of knowledge.

Prooftoys is a unique web-based tool for building and exploring
computer-verified mathematical proofs, based on simple concepts
directly out of basic high school math.

The core of the system is proudly free and open source software,
hosted on **<a href="http://github.com/crisperdue/prooftoys"
target=_blank>GitHub</a>**.

##### >> **[Learn More](/introduction/)**

##### >> **[Examples](/basic-examples/)**

<!--
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

## About Prooftoys

[[This section belongs elsewhere.]]

<script>
  $('#startButton').on('click', function() {
       window.location = 'basic-examples/';
     });
  $('#tellButton').on('click', function() {
	  $('#theStory').each(function() {
		  this.scrollIntoView({behavior: 'smooth', block: 'start'});
		})});
</script>
