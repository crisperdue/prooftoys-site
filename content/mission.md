---
title: Prooftoys project mission
Desccription: >
  The Prooftoys project is an effort to demonstrate the
  potential of computer-support to reduce the unnecessary
  pain and increase the value of mathematics education.
---
<style>
  
  p {
    max-width: 75ch;
    text-wrap: pretty;
  }
  
  li {
    max-width: 72ch;
    text-wrap: pretty;
  }

</style>

# Prooftoys mission and vision

## The mission

The Prooftoys project aims to demonstrate how a simplified system of
deductive reasoning can support effective and natural use of proof in
learning mathematics, starting with basic algebra and extending naturally
to much of mathematics.

## The vision

The practical and intellectual successes of mathematics are primary
reasons for the high regard mathematics has had at least since the times
of the ancient Greeks.  Because mathematical reasoning is at the core
of mathematical thinking, it is key to every branch of mathematics.

It turns out that the kind of reasoning gently introduced in any basic
algebra course enables the deduction needed for solving many typical
math problems in the sequence of topics from algebra and leading up to
calculus, and more.  Modest though conceptually significant extensions
enable the system to work with much more advanced mathematics.

The Prooftoys effort is based on the belief that with modern technology,
learning to use precise mathematical reasoning quite soon after basic
algebra has the potential to help students of mathematics more than
conventional approaches.

### Implementation

The proof builder implements the logic with a user-friendly interface
design to help the user succeed while learning the details of the logic
along the way.  The tool lets the user focus on a step or part of a
step, and offers next steps that apply to the focused part.

The content on this website demonstrates the approach, starting with
basic pre-college mathematics and showing how the reasoning extends
naturally to working with more advanced concepts such quantifiers,
functions, and collections.

## You might be wondering

**Q:** *Why focus on reasoning rather than conventional techniques?*

**A:** This question is worth a longer answer, but here is my point of
view in brief.

- Computers, especially computer algebra systems, easily carry out all
  of the techniques taught in the standard curriculum, and this has been
  true for a number of years.  In reality they can solve many harder
  problems as well, and some can make available step-by-step solutions
  that show how the solution can be derived.
  When you learn standard techniques, you are just learning things
  computers have known how to do for years.
- Mathematical reasoning is a skill that carries over beyond
  standard techniques.  It is essential to reading explanations produced
  by a computer.  Along with mathematical intuition, it gives you the
  potential to solve different kinds of problems and create new
  mathematical knowledge.  These things will be relevant as long as
  human beings are involved in mathematics.

**Q:** *Surely you aren't trying to change our mathematics curriculum?*

**A:** No, I believe that changes to the curriculum can only occur in
the event of overwhelming demand for change, and then only with much
pain.  This project only aims to give some people the chance to try a
fresh approach and hopefully to help point a way forward.

**Q:** *You seem to believe that I can "pick up" Prooftoys without a lot
of studying.  Seriously??*

**A:** Yes, seriously!  Try a few of the simplest sample problems and
see how it feels.  You may find that getting simple things done is not
hard at all. You can use the proof builder without understanding a lot
about logic.  If it fails in this, please [contact the author]({{<
relref "/about.md" >}}).  I would love to hear from you.

Properly grasping the meaning of mathematical statements may take a bit
longer.  You can start by ignoring the parts that aren't shown in a
typical textbook.  As you understand the language of mathematics better
you can pay more attention to them. 

**Q:** *But is it useful for "textbook" math problems?*

**A:** In fact it can help you solve problems quickly and accurately,
but you will need to invest some time in learning to use it and getting
familiar with explicit mathematical reasoning.

**Q:** *Can it help me with my math homework?*

**A:** If you are just trying to get today's homework done today,
Prooftoys is probably not worth the effort.  If you would like help
getting through your homework for the rest of the year, then perhaps
yes.  Once you get familiar with the basics, the same concepts carry
over directly to other topics.
And if you want to strengthen your mathematical skills and your grasp of
mathematical concepts, then Prooftoys should be able to really shine for
you.

**Q:** *Why should I spend time here when there are Khan Academy,
Geogebra, Wolfram Alpha, and many other mathematics websites?*

**A:** Prooftoys is about mathematical reasoning. The user interface
keeps you always in control while assuring that your reasoning is
mathematically correct.  You solve the problem or prove the theorem
yourself, while the engine correctly takes care of the details. As you
work, presentation of the reasoning is in textbook-like form.

None of these "math help" website offers anything close to this, and to
my knowledge no other math help website is backed by a computer
implementation of mathematical logic.

**Q:** *Is Prooftoys or its logic really that unique?*

**A:** Well, yes and no.  Very close relatives of the simple type
theory used here are implemented in "research-grade" proof assistant
software, but hardly any textbooks present this kind of logic.

First-order logic is presented in many textbooks. Simple type theory has
important practical and technical advantages, but the user interfaces
for other systems that implement it are much more suitable for experts.

**Q:** *My interest is learning about mathematical proof using a
textbook such as "The Book of Proof" or similar resource. Why shouldn't
I learn about proof from my well thought-out book?*

**A:** You may be very happy with your book.  In fact, support for
reasoning in the style of books of this kind is an important goal for
Prooftoys and the proof builder.

If you are teaching yourself, you may find that Prooftoys helps to "keep
you honest", not skipping steps or waving your hands. The downside can
be that computers and computer implementations of logic are very precise
and explicit, so Prooftoys may feel nit-picky at times.


<!--

**Q:** Does this "simplicity" accomplish anything?

**A:** Yes, it does.  You see, there are at least two kinds of
simplicity of logics.  One could be called technical simplicity.  How
many axioms are there, and how many rules of inference?  How complicated
are they to describe?

Another kind of simplicity might be called practical simplicity.
Practical simplicity.

A careful look at the most basic textbook algebra shows two ways for
going from one step of work to the next.  Surprisingly, these two ways
carry forward naturally to even quite advanced mathematics.  **No
other** basic rules are needed, and even a great many reasoning steps
used in much higher mathematics are just simple combinations of these
two.

First it is necessary to make these rules precise; not to change them,
but just to make them crystal clear.  To get "off the ground" we also
need to be able to talk about statements as well as numbers.  Up until
calculus, this is all we need to work properly and effectively with
textbook mathematics.

Talking mathematically about statements means having variables and
constants with "boolean" values, values can be "true" or "false"; and
functions with inputs or outputs that can be true or false.  This is the
main adjustment needed for textbook math prior to calculus.

## Background

The pre-college mathematics track from algebra up through calculus is
heavily based on equations.  Most of the mathematical laws presented are
laid out in the form of equations.  Solutions to prototypical textbook
problem -- at least prior to calculus -- revolve around manipulating
equations using these laws.

A careful look at the most basic textbook algebra reveals two ways in
which one step of work follows from another.

**One way** is by replacing *an occurrence* of a variable or expression with
another expression equal to it.  So if we know that `2 + 2 = 4` we can
replace any occurrence of `2 + 2` with `4`.

**The other way** is by substituting any expression at all for *every
occurrence* of a *variable*.

It turns out that equations and these same rules for working with
equations can also neatly apply to much more advanced mathematics as
well.

The information and tools on this website are devoted to showing how to
do this.

On the one hand, it aims to explain these very same few rules more
carefully and systematically.  Then with these as a 

Then with a minimum of extension it shows
how to capture intuitive mathematical thinking as application of the
rules to different kinds of problems.



prepare you to do mathematics in a way that for
whatever mathematics your future may hold.

skills that you can use for mathematics at all levels and for
computerized math.

a more effective
and rewarding approach to learning mathematics.

## Why should I think this way is more effective?




## But I have to learn all of this extra stuff

Mathematics has a practical side.  In fact it has many practical
sides.  Managing your money and other resources is practical.
Planning, designing, and building are practical.  Success using math
in these kinds of situations is a real of success.

Borrowing and lending, investing, and analyzing risk need a bit more
math, 

One measure is successfully answering the questions in the textbook and
on your teacher's tests.

Mathematics has proved itself to be a uniquely powerful tool for solving
problems and answering questions.

This is a test

## Background -- the paradigm today

Procedures. Simple problem-solving.

Generally proof only prominent for math majors taking hardcore theory
classes.  Some proof may show up in discrete math, but then not at a
practical level.

There are courses focused on mathematical reasoning, but not widespread.
"Book of Proof", "Introduction to Mathematical Thinking", etc..
These are good, but at best come into play late in the game.

## Background -- computer and Internet resources (emerging paradigm)

Computers and the Internet already offer wonderful resources for
mathematics in many areas: visualization, demonstrations, developing
intuition, ...

Computers also do mathematical reasoning through formal logic.

Textbooks and curricula lag behind.

## Rationale


Logical reasoning is the bedrock of mathematics.  


Today computers can solve typical textbook problems in algebra, trigonometry,
even calculus easily for us.

-->
