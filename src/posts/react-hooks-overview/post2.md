---
slug: "/react-hooks-overview"
date: "2019-04-1"
title: "React Hooks Overview"
desc: "Understanding hooks and how we got here"
topics: "React Hooks"
---

[Part 1: React Hooks Overview](https://repl.it/@imsteaky/Counter#src/App.js)

---

## Where are we?

At React Conf 2018, the React team presented the [Hooks Proposal](https://reactjs.org/docs/hooks-intro.html). A new addition to React as of 16.8 and allows you to split a component into smaller functions based on which pieces are related. This results in smaller, faster, easier to understand code.

[React Conf 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM)

I was a student at [Turing School of Software and Design](https://turing.io/) about to finish my run of the program. Eager to explore new technologies I fully embraced hooks (along with anything else Dan Abramov said), and moved away from class based components. Since then I've found that my code is a lot easier to understand, easier to debug, more importantly, more _fun_ to write.

I recommend visiting the [React Hooks Documentation](https://reactjs.org/docs/hooks-state.html) and starting your React journey there. This post will briefly cover the how and why for React Hooks and will assume you understand some basic concepts like [state](https://reactjs.org/docs/faq-state.html). We'll compare a Class-based component to a new functional one with hooks, as well as examples of _built-in_ hooks that are already provided to us.

We'll take a look at `useState` and `useEffect`, I'll do a deeper dive into each of these and then we'll get into _custom hooks_ for when we want to share logic between two Javascript functions, _next time_.

## Why Hooks?

- Hooks allow you to use local state and other React features without writing a class.

- Hooks are special functions that let you "hook into" React state and other lifecycle features inside of function components.

<br/>

---

## Why are we here?

Since React 14 we've had two ways of creating components: classes or functions.

Function components are just that, functions that can accept `props` and return a React element.

```jsx
import React, { Component } from "react"

function Heading(props) {
  return <h1>{props.children}</h1>
}

export default Heading
```

Class based components are Javascript classes. They extend from React.Component and requires use of the `render` method.

```jsx
import React from "react"

class Heading extends React.Component {
  render() {
    return <h1>{this.props.children}</h1>
  }
}
```

let's dive deeper.

## Class Based Counter

A class component extends from `React.Component` and creates a `render` function which returns a React Component. At the time, class based components provided certain benefits that functional components didn't have access to.

- Components can have their own internal state. While you can pass state as props from parent components down your tree, or use a state management library like `Redux`, some state is internal and doesn't need to be passed to other components.

- You gain access to lifecycle methods like `componentDidMount()`, `componentDidUnmount()`, and `render`. These are for when the component is rendered and removed from the DOM, as well as whenever it's updated with new `state` or `props`.

<br/>

😕 _What?_<br/>

Let's look at some code and see if that clears some things up.
Below I've built a simple counter as a React Class. Pressing the button will increase the counter by one.
You can play with this code on [Repl](https://repl.it/@imsteaky/Counter#src/App.js)

```jsx
import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  componentDidMount() {
    document.title = this.state.counter
  }
  componentDidUpdate() {
    document.title = this.state.counter
  }
  handleIncrement() {
    this.setState({
      counter: (this.state.counter += 1),
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <hr />
        <button type="button" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
```

That's a lot of code, and most of it boilerplate, and some being duplicative! We even have to add the `this` context and then bind it inside the constructor because of implicit binding in vanilla JS. _Big yikes_

`componentDidMount()` and `componentDidUpdate()` handle the side effects of the component mounting and updating on the DOM. This example may seem trivial but there are many other common side effects like DOM mutations, data fetching, and setting up subscriptions.

If we wanted to clean up after the side effects, we'd need to also return a function that has some `componentDidUnmount()` logic.

[Deep Dive on React Lifecycle Methods](https://programmingwithmosh.com/javascript/react-lifecycle-methods/)

---

## Hooks Based Counter

Let's try it again but using React Hooks, the new API from React as of 16.8. This counter functions the exact same way as the class based counter above.

- `useState()` is a hook that lets you add a React state to a function component.

- `useState()` takes on argument, the initial state

- `useState()` returns a pair of values in an array. The _current state_ and a _function to update the current state_.

- `useEffect()` is a hook that lets you use side effects in your function components

- `useEffect()` tells your component to do _something_ after every render

even the explanations don't take as long to type

You can play with this code on [Repl](https://repl.it/@imsteaky/Counter#src/App.js)

```jsx
import React, { useState, useEffect } from "react"

function Counter() {
  const [counter, incrementCounter] = useState(0)

  useEffect(() => {
    document.title = counter
  })

  function handleIncrement() {
    incrementCounter(counter + 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <hr />
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default Counter
```

We import and call `useState()` to declare a `state variable` and then pass in the value of whatever value is being passed into `useState()`

```jsx
const [counter, incrementCounter] = useState(0)
```

By destructuring our state array into two variables, we can approach it in a more declarative way. The first value returned is the current state, and the second value is the function that updates the state

In this example, our current state is the value of `count`, which is 0, and then`incrementCounter` is the function that updates `count`

```jsx
useEffect(() => {
  document.title = counter
})
```

Our `useEffect()` updates the document.title on every render, preventing us from needing excess boilerplate for different stages of the components lifecycle just to keep our component in sync.

In almost half the lines we accomplished the exact same thing, made it more accessible to someone that is new to our codebase, removed a lot of duplicative code, and can move on to the next feature of our app

---

## Conclusion

Hooks are functions that let you hook into react features from function components.

Hooks addressed many of the pain points developers were experiencing with classes in React. They decrease code length by almost half and increases efficiency as well by making it easier to read.

There are lots of built-in React Hooks including `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useRef`, and `useLayoutEffect`.

Over the next few days we'll take a deeper look into the other hooks we have access to, and then get into the true power of React Hooks: creating your own custom hook.

Thanks for reading!
