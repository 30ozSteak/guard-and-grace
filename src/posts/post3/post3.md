---
slug: "/managing-state-with-useReducer"
date: "2020-06-3"
title: "Managing state with useReducer"
desc: "Redux is back baybeee"
topics: "React Hooks"
---

Last time we looked into React Hooks and why they've been introduced, then we refactored a react component built as a class into a function component using hooks, allowing us to share logic between components. Now we're going to look at managing complex state with useState and useReducer.

See the code in this blog in action at <br/><br/>

[Counter with useState and useReducer](https://repl.it/@imsteaky/UnlinedLatestComputerscience#src/App.js)
<br/>

## React useState hook

<hr/>

`useState` is a basic hook that allows us to have local state in a functional component.

We create one by declaring a state variable: `counter` followed by a function to update it: `setCounter`.

Initialize the count to zero by passing it `0` as the only argument to `useState()`.

Lastly, because we want to update our state by adding `1` to the previous state(initialized at `0`), we need to provide a function of the previous state as an argument to update it.

_If you're setting a value that does **not** rely on the value of the old state, then you can use a value as the argument, otherwise, use a function._

```jsx
function Counter() {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)

  return (
    <div>
      <div>{counter}</div>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  )
}
```

Notice `counter` (value) and `setCounter` are being returned as an array from `useState().` The order here is important, The setter function will control the state that is managed by the hook.

🤔🤔 What happens when we want another piece of state?

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const increment = () => setCount(count + 1)
  const toggleDisabled = () => setDisabled(!disabled)

  return (
    <div>
      <div>{count}</div>
      <button type="button" disabled={disabled} onClick={increment}>
        +
      </button>
      <button type="button" onClick={toggleDisabled}>
        {disabled ? "enable" : "disable"}
      </button>
    </div>
  )
}
```

We can do it as many times as we want! Each useState is unique and can function independently of each other.

However, after writing your third or fourth `useState` in the same component, you start to feel like that there's got to be something better. If your component needed the ability to undo, you'd have to keep track of the previous state _ontop of_ the current state for every operation.

Let's add some extra capabilities to our counter by adding the ability to `decrement`, `reset`, and `undo`.

```jsx
function Counter({ initialValue = 0 }) {
  const [previousCount, setPreviousCount] = useState(null)
  const [count, setCount] = useState(0)

  const increment = () => {
    setPreviousCount(count)
    setCount(count + 1)
  }

  const decrement = () => {
    setPreviousCount(count)
    setCount(count - 1)
  }

  const reset = () => {
    setPreviousCount(null)
    setCount(initialValue)
  }

  const undo = () => {
    setCount(previousCount)
    setPreviousCount(null)
  }

  const toggleDisabled = () => setDisabled(!disabled)

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="button" onClick={undo} disabled={!prevValue}>
        Undo
      </button>
    </div>
  )
}
```

<div style='display: flex; justify-content: center; margin: 2rem 0'>
  <img src="https://user-images.githubusercontent.com/34214595/91326832-04c4ea00-e782-11ea-96c4-fbd94dacdcf2.gif"/>
</div>
Hrmm. We did it, but that's a lot of slightly different, but mostly repetitive, code.
<br/>
<br/>
<br/>

## React useReducer hook 🔥🔥🔥

---

What is _useReducer_ ? It's a hook based off of Javascript's very popular _reduce_ function. Definitely a topic that will require it's own blog post eventually, but until then, here are a few outstanding posts by other people on it

[Sarah Drasner: The Almighty Reducer](https://css-tricks.com/understanding-the-almighty-reducer/)

[Kent C Dodds: Array reduce vs chaining vs for loop](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks/)

An important takeaway of the _reducer_ is it will always return one value, By _reducing_ the previous value down to a single representative one. Reducers are incredibly powerful and it's hard to get far on the internet without seeing them referenced.

The reducer function is a function that receives a state and an action, then _reduces_ to a new state.  
`(state, action) => newState`

The `useReducer` hook is an alternative to `useState`, meaning you can use the two interchangeably. However, `useReducer` is preferred over `useState` when you have complex state logic, _especially when the next state is dependant on the previous state._

`useReducer` takes two arguments: First being the `reducer()` method itself and the second is a `dispatch` method that calls the `reduer()` method.

The `useReducer` hook looks like this. It's a function that receives a state and an acation, and _reduces_ it to a new value, in our case: state.

```jsx
const [state, dispatch] = useReducer(reducer, initialState)
```

Let's rebuild the previous Counter component using `useReducer` instead of `useState`

```jsx
const CounterReducer = ({ initialState = 0 }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
          prevValue: state.count,
        }
      case "decrement":
        return {
          count: state.count - 1,
          prevValue: state.count,
        }
      case "reset":
        return {
          count: initialState,
          prevValue: null,
        }
      case "undo":
        return {
          count: state.prevValue,
          prevValue: null,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: initialState,
    prevValue: null,
  })

  return (
    <div>
      <h1>useReducer Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button
        onClick={() => dispatch({ type: "undo" })}
        disabled={!state.prevValue}
      >
        Undo
      </button>
    </div>
  )
}
```

<div style='display: flex; justify-content: center; margin: 2rem 0'>
  <img src="https://user-images.githubusercontent.com/34214595/91326839-07274400-e782-11ea-9e96-63d82677ee55.gif"/>
</div>

Nice! And it looks pretty similar to the architecture used in popular state management library, _Redux_.

Instead of using a bunch of useState updater functions, useReducer centralizes the state logic of the component into a single _reducer_ function.

Our _lord and savior Dan Abramov_ summed up in a tweet of when to use `useState` or `useReducer` when managing component state:

<h1>When to use useReducer</h1>
<div style='display: flex; justify-content: center; margin: 2rem 0'>
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Should I use multiple useState or useReducer?<br><br>For independent things (isHovering and textInput), multiple useState.<br><br>For things that change together (isFetching and fetchedItems), or if their next state depends on previous (todos), I prefer useReducer.<a href="https://t.co/wSyKITMRpZ">https://t.co/wSyKITMRpZ</a></p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1083330668522864640?ref_src=twsrc%5Etfw">January 10, 2019</a></blockquote>
</div>

For me, I use `useState` until it feels like the components stateful logic is overly complex. Forms and CRUD applications are a great example of when you'd benefit from `useReducer` over `useState`. We'll build a todo-list using `useReducer` _next time_.

## <h1>Recap</h1>

- `useReducer` > `useState` when handling complex state logic that involves multiple sub values, or when the next state is reliant on the previous state

- When called, `useReducer` will return an array of two items: Current State and a Dispatch method

- `useReducer` accepts three arguments:

  - reducer function
  - initial state
  - third, optional init function for lazy initialization of state

- Reducers are responsible for handliong transitions from one state to the next. They take in current state and an action and return a new state

- Actions are _unique events_ that happen in your app

- Actions are dispatched to our reducer when specific events take place.

_Hot Damn_ that was a long post. Thanks for reading!
