---
title: "Understanding React useCallback"
description: "Learn how to use the useCallback hook to optimize React performance by memoizing functions between re-renders and preventing unnecessary component updates."
date: "2023-05-11"
category: "React"
tags: ["React", "Hooks", "Performance", "useCallback", "Optimization"]
---

# Understanding React useCallback

Hi folks, if you struggle to understand `useCallback`, don’t worry, you are not alone! It took me a while to understand this hook, and I hope I can help you understand faster by sharing my learnings with you in this blog post.

> The main idea you need to understand is that the `useCallback` hook lets you memoize (in other words, cache) a function between re-renders.

Okay… but let’s take it one step at a time.

## What is re-render?

To keep our UI synced with our application state, React performs a “re-render”. Each time our application is rendered, React takes a snapshot of the UI at that moment based on the current application state.

For example, when we change the state of a component, we are telling React that it needs to re-render to be updated with the new state. React takes a snapshot of the UI with the latest state values and compares it with the old snapshot, updating only the parts of the UI that have changed.

React has optimized the re-rendering process, making it easy for developers to manage. However, occasionally creating these snapshots can be time-consuming, leading to performance issues, such as when the user interface freezes while waiting for an update after a user action.

That is where `useCallback` comes in.

## The useCallback hook

`useCallback` helps us to improve performance in two ways:

1. Minimizing the frequency of re-renders.
2. Reducing the work done by the component in a given render.

Wow, that’s great, so we should always use `useCallback` to improve the performance of our applications, shouldn’t we?

Let’s see how `useCallback` works, and then we can decide where we use it.

### How it works

On the initial render, `useCallback` returns the function you have passed as the first parameter.

Over the following renders, if the dependencies haven’t changed, it will return the cached function from the last render. Otherwise, it will return the function you have passed on this render.

In short, `useCallback` stores a function between re-renders until its dependencies change.

### How to use

You need to pass two parameters to `useCallback`:

1. A function that you want to cache between re-renders.
2. A list of dependencies that are used inside your function.

Let’s walk through an example to understand it.

```jsx
import "./styles.css";
import React from "react";
import CountButtonThousand from "./CountButtonThousand";

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleCountThousand = () => {
    setCount((currentValue) => currentValue + 1000);
  };

  return (
    <>
      Count: {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment 1
      </button>
      <CountButtonThousand handleClick={handleCountThousand} />
    </>
  );
}
```

This code is a simple application that displays a count and provides two buttons for incrementing the count.

The first button increments the count by 1 with every click, and the second button, a custom component called `CountButtonThousand`, increments the count by 1000.

The `handleCountThousand` function is a callback function that increments the count state variable by 1000. It is passed to the `CountButtonThousand` component as a prop called `handleClick`.

```jsx
function CountButtonThousand({ handleClick }) {
  console.log("Render Button Thousand");

  return (
    <button type="button" onClick={handleClick}>
      Increment 1000
    </button>
  );
}

export default React.memo(CountButtonThousand);
```

The `CountButtonThousand` component takes a single prop `handleClick` and renders a button that, when clicked, calls the `handleClick` function passed as a prop.

The `console.log` statement inside the `CountButtonThousand` function is executed every time the component is rendered.

You may notice we are using `React.memo` to memoize it. To avoid making this post excessively long and to focus on `useCallback`, here is a concise explanation of the purpose of `React.memo`:

By default, React re-renders all its children recursively when a component re-renders. This is why, when the `App` re-renders with a different count, the `CountButtonThousand` component also re-renders.

It is fine for components that don’t require much calculation to re-render. But if you have verified a re-render is slow, you can tell `CountButtonThousand` to skip re-rendering when its props are the same as on the last render by wrapping it in `React.memo`.

> In this case, `handleCountThousand` is a new function on each render, so `CountButtonThousand` will re-render every time.

Now, let’s wrap `handleCountThousand` in `useCallback`:

```jsx
import "./styles.css";
import React from "react";
import CountButtonThousand from "./CountButtonThousand";

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleCountThousand = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1000);
  }, []);

  return (
    <>
      Count: {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment 1
      </button>
      <CountButtonThousand handleClick={handleCountThousand} />
    </>
  );
}
```

Now, `handleCountThousand` is wrapped in `useCallback`, and it will only be recreated if its dependencies change. Since the dependency array is empty (`[]`), the function will be created only once, preventing unnecessary re-renders of `CountButtonThousand`.
