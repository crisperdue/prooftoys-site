---
title: Function and set terms
menu: menu-docs-plus.md
sitemap:
  disable: true
---

<!-- Not linked, where should this content appear? -->

# Working with function and set terms

The Prooftoys language includes terms that build functions or
predicates from other terms.  The notation is like the _set builder
notation_ used in set theory, and express the same idea, though the
technical foundations differ.

The Prooftoys notation for a _function term_ is `{x. X}` where `x` is
any variable and `X` is any term.  For example `{z. 0 < z & z < 10}`
is a function term.  The variable `x` is known as the _bound variable_
of the term and `X` is known as the _body_ of the function term.

If `X` has a boolean value, `{x. X}` represents a set, otherwise a
function whose values are of some other type.  If the term is known to
represent a set, we may refer to it more specifically as a _set term_.

In a function 

### Applying a function to its argument(s)

{{% preblock %}}
_From:_ `{x. A} X`.
_To:_ `A`, with term `X` substituted for `x` throughout
{{% /preblock %}}

This can be done anywhere in any formula.

#### Renaming bound variables

You can always rename any _bound variable_ of a function term,
wherever the function term may appear.  It may be necessary for
Prooftoys to rename other bound variables as

#### Binding the sides of an equation

{{% preblock %}}
_From:_ `X = Y`
_To:_ `{x. X} = {x. Y}`
{{% /preblock %}}

(Consequence of `{x. X} = forall {x. X}`, then replacing the second `X` with
`Y`.)

