---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
colorSchema: light
highlighter: shiki
lineNumbers: false
info: |
  ## Mutation Testing

  ConFoo 2024
drawings:
  persist: false
defaults:
  foo: true
transition: none
title: How could I have a regression?
mdc: true
hideInToc: true
---

# I have 100% Coverage

How could I have a regression?

<!--
We all love tests.
We swear by them
We shun untested projects
But are our tests any good?
-->

---
hideInToc: true
layout: two-cols-header
---

# $ whoami

Formerly DecSecOps @ FOCUS

::left::
- 10 Hosts / 50 Services
- ~ 5 transactions/s
- 1 environment
- < 1 deployment/week
- 5th dev

::right::
- 100 Hosts / 400 Services
- 100 transactions/s
- 10 environments
- 200 deployments/day
- 15 devs

::bottom::

The cornerstone of this transformation? TESTS!

---
hideInToc: true
layout: default
---

# Tests Quality

Who has:
<v-clicks>

- Tests for their code?
- High Code Coverage?
- Seen these tests fail?
- Confidence in their tests?

</v-clicks>

---
hideInToc: true
layout: default
---

# Table of contents

<Toc maxDepth="1"></Toc>

---
layout: default
---

# Coverage

## Coverage is Great!

<v-clicks>

- Shows which lines/branches of code are covered by tests
- Which lines aren't
    - Quite Useful for Quirky Exception Testing

</v-clicks>

---
layout: center
level: 2
---
### Code
```ts
export function divideBy(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by 0 is Invalid!");
  }
  return a / b;
}
```

### Tests
```ts
import "mocha";
import { expect } from "chai";
import { divideBy } from "../src/divide-by.mjs";

describe("Error Handling Tests", () => {
  it("Existence Check", () => expect(divideBy).to.exist);
  it("Doesn't Throw on Non-0 Argument", () => expect(divideBy(1,1)).to.not.throw);
  it("Naive Notation", () => expect(() => divideBy(0,0)).to.throw);
});
```

---
layout: center
level: 2
---

> $ npx tsc && npx c8 mocha  
>  
>  
>  Error Handling Tests  
>    ✔ Existence Check  
>    ✔ Doesn't Throw on Non-0 Argument  
>    ✔ Naive Notation  
>  
>  
>  3 passing (3ms)

Yay, Right?
---
layout: center
level: 2
---

![Quirky Coverage](imgs/coverage-quirk.png)

---
layout: center
level: 2
---

```ts {1,2|1-4|5,6|3-6}{lines: true}
it("Naive Notation", () =>
  expect(() => divideBy(0)).to.throw);
it("Correct Notation", () =>
  expect(() => divideBy(0)).to.throw());
it("Explicit Notation", () =>
  expect(() => divideBy(0)).to.throw("Division by 0 is invalid"));
```

---
layout: center
level: 2
---

![Coverage](imgs/coverage.png)

---
layout: fact
level: 2
---

Tests validate your code works as expected

Coverage validates you're invoking your code

We still haven't assesed how good our tests are!

---
layout: section
---

# Mutation Testing

---
layout: center
level: 2
---

# Mutation Testing: RIP

<v-clicks>

- _Reach_ the code (Coverage)
- _Infect_ the code
- _Propagate_ & catch the error (Tests)

</v-clicks>

---
layout: center
level: 2
---

# Mutation Testing: Code Requirements

- Tests Green
- Acceptable Coverage

---
level: 2
---

# Mutation Testing: Mutators

|Original|Mutated|
|:---:|:---:|
|a + b|a - b|
|a - b|a + b|
|a * b|a / b|
|a / b|a * b|
|a % b|a * b|

Source: [Stryker Supported Mutators](https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators/#arithmetic-operator)

---
image: https://stryker-mutator.io/images/stryker-man.svg
layout: image
---


---
layout: center
level: 2
---

# Installing Stryker

```sh
npm i -D stryker-cli
npx stryker init
```

---
layout: center
level: 2
---

# Running Stryker

```sh
npx stryker run
```
---
layout: center
level: 2
---

# Edge Cases on * <=> / mutation

0 and 1 have special identity behaviours.

$$
\begin{array}{cc}
  0\times1 = 0\div1 & 1\times1 = 1\div1 \\
  0\times2 = 0\div2 & 2\times1 = 2\div1 \\
  0\times3 = 0\div3 & 3\times1 = 3\div1 \\
\end{array}
$$

**You probably don't want to test using these values**

---
hideInToc: true
---
# Final Tests

```ts
import "mocha";
import { expect } from "chai";
import { divideBy } from "../src/divide-by.mjs";

describe("Error Handling Tests", () => {
  it("Existence Check", () => expect(divideBy).to.exist);
  it("Explicit Notation", () =>
    expect(() => divideBy(1, 0)).to.throw("Division by 0 is Invalid!"));
  it("Integer Division", () => expect(divideBy(4,2)).equals(2));
});

```
---
level: 2
---

# And Another Thing...

> All tests/coverage-quirks.tes.mjs  
>  ✘ Error Handling Tests Existence Check (covered 0)  
>  ✓ Error Handling Tests Explicit Notation (killed 5)  
>  ✓ Error Handling Tests Result Expression (killed 1)  
>  ✓ Error Handling Tests Integer Division (killed 1)


---
level: 2
---
# Final Tests... For Real!

```ts
import "mocha";
import { expect } from "chai";
import { divideBy } from "../src/divide-by.mjs";

describe("Error Handling Tests", () => {
  it("Explicit Notation", () =>
    expect(() => divideBy(1, 0)).to.throw("Division by 0 is Invalid!"));
  it("Integer Division", () => expect(divideBy(4,2)).equals(2));
});

```

---
hideInToc: true
---
# Conclusion

- Code Coverage is *great* to know what's not tested
- Mutation Testing allows us to assert the validity of our tests

---

> All those giving Code Coverage a hard time  
> Should pick up Mutation Testing  
> - Me. 2024

---
hideInToc: true
layout: end
---

# Thank You!

[https://github.com/carboneater/confoo-2024-mutation-testing](https://github.com/carboneater/confoo-2024-mutation-testing)