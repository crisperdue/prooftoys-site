---
title: How long is a lunar?
---

## How long is a lunar?

Gardner imagines that the inhabitants of the moon have a unit of
distance called a "lunar", a unit adopted because the moon's surface
area in square lunars is exactly equal to the volume of the moon in
cubic lunars.  If the diameter of the moon as 2160 miles, how many
miles long is a lunar?

*Notes:* Think of the moon as a
[sphere](https://en.wikipedia.org/wiki/Sphere).  The surface area of a
sphere is equal to `4 * pi * r ^2` where r is its radius, and
the volume of a sphere is `(4 / 3) * pi * r^3`.

### Solution

[[Solution is not quite complete yet!]]

{{% faded %}}

<div class="proof-display mb-4" data-steps='(steps
(1 assumeExplicitly (t (A == (((4 * pi) * (r ** 2)) = (((4 / 3) * pi) * (r ** 3))))))
(2 subtractThisFromBoth (s 1) (path "/right/right/right"))
(3 simplifySums (s 2) (path "/right/right"))
(4 rewrite (s 3) (path "/right/right/left/right/right") (t ((R x) => ((x ** 3) = ((x ** 2) * x)))))
(5 rewrite (s 4) (path "/right/right/left/right/right") (t (((R x) & (R y)) => ((x * y) = (y * x)))))
(6 flattenTerm (s 5) (path "/right/right/left/right"))
(7 rewrite (s 6) (path "/right/right/left") (t ((((R a) & (R b)) & (R c)) => (((a * c) - (b * c)) = ((a - b) * c)))))
(8 rewrite (s 7) (path "/right/right") (t (((R x) & (R y)) => (((x * y) = 0) == ((x = 0) | (y = 0))))))
(9 simplifyFocalPart (s 8))
(10 multiplyBoth (s 9) (path "/right/right/left") (t 3))
(11 simplifyProducts (s 10) (path "/right/right/left"))
(12 rewrite (s 11) (path "/right/right/left/left") (t ((((R a) & (R b)) & (R c)) => ((a * (b - c)) = ((a * b) - (a * c))))))
(13 simplifyProducts (s 12) (path "/right/right/left/left"))
(14 rewrite (s 13) (path "/right/right/left/left/right") (t ((((((b != 0) & (c != 0)) & (R b)) & (R c)) & (R a)) => (((a * c) / b) = (a / (b / c))))))
(15 rewrite (s 14) (path "/right/right/left/left/right") (t (((((c != 0) & (R c)) & (R a)) & (R b)) => (((a * b) / c) = ((a / c) * b)))))
(16 rewrite (s 15) (path "/right/right/left/left/right/left") (t ((((((b != 0) & (c != 0)) & (R b)) & (R c)) & (R a)) => ((a / (b / c)) = ((a / b) * c)))))
(17 simplifyFocalPart (s 16))
)'></div>

{{% /faded %}}

### Try working it yourself

<div class="proof-editor mb-4" data-steps='(steps
(1 assumeExplicitly (t (A == (4 * pi * r ** 2 = (4 / 3) * pi * r ** 3))))
)'></div>

and so on.
