# Purpose

To align with the Lit development teams proposal for
ReactiveController and ReactiveControllerHosts.

<https://lit.dev/docs/composition/controllers/>

## Installation

```bash
npm install reactive-fast-element

# OR

yarn add reactive-fast-element
```

## Getting Started

To get started with `reactive-fast-element`, the easiest
way is to use the provided base class.

```js
import { customElement } from "@microsoft/fast-element"
import { ReactiveFASTElement } from "reactive-fast-element"


@customElement({
  name: "my-element"
})
class MyElement extends ReactiveFASTElement {}
```

This allows you to then attach `ReactiveControllers` for
use by your element.

Alternatively, `reactive-fast-element` ships a base mixin
for you to use if you dont want to use the base class.

```js
import { FASTElement, customElement } from "@microsoft/fast-element"
import { FASTReactiveMixin } from "reactive-fast-element"


@customElement({
  name: "my-element"
})
class MyElement extends FASTReactiveMixin(FASTElement) {}
```

## Examples

For some examples of using `reactive-fast-element`,
checkout the [/examples directory](/examples)

## Local Development

```bash
git clone https://github.com/ParamagicDev/reactive-fast-element
cd reactive-fast-element
pnpm install
```

### Start a Dev Server

```bash
pnpm start
```

### Testing

```bash
pnpm test
```
