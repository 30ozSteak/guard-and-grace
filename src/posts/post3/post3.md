---
slug: "/managing-state-with-useReducer"
date: "2020-06-3"
title: "Managing state with useReducer"
desc: "Redux is back baybeee"
topics: "React Hooks"
---

Last time we looked into React Hooks and why they've been introduced, then we refactored a react component built as a class into a function component using hooks, allowing us to share logic between components. Now we're going to look at managing complex state with useState and useReducer.

<br/>

## React useState hook

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

Hrmm. We did it, but that's a lot of _slightly different_, but mostly repetitive, code.
<br/>
<img src="https://media.giphy.com/media/l0He8i34poZIo3kY0/giphy.gif"/>

## useReducer 🔥🔥🔥

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

<img src="https://media2.giphy.com/media/bzn3aznEbnh28/giphy.gif?cid=ecf05e47w5zqm86fifipqb4lworezmy4q22pv6o5hggqhe3i&rid=giphy.gif">

**_this is still in progress_**
