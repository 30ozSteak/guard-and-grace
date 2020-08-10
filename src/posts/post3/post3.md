---
slug: "/managing-state-with-useReducer"
date: "2020-06-3"
title: "Managing state with useReducer"
desc: "Redux is back baybeee"
topics: "React Hooks"
---

Hooks are _rad_. I'm a big fan.

Last time we looked into React Hooks and why they've been introduced, then we refactored a react component built as a class into a function component using hooks, allowing us to share logic between components. Now we're going to look at managing state with useState and useReducer.

## React useState hook

`useState` is a basic hook that allows us to have local state in a functional component.

We create one by declaring a state variable: `count` followed by a function to update it: `incrementCount`.

Lastly we initialize the count to zero by passing it `0` as the only argument to `useState()`.

```jsx
function App() {
const [count, setCount] = useState(0)
const increment = () => setClicks(clicks + 1);

return (
  <div>
    <div>{count}</div>
    <hr />
    <button type="button" onClick={increment}>+</button>
  </div>
)
```

Notice `count` (value) and `incrementCount` are being returned as an array from `useState().` The order here is so you can use the setter function returned as the second array item from a hook function. The setter function will control the state that is managed by the hook.

🤔🤔What happens when we want another piece of state?

```jsx
function App() {
const [count, setCount] = useState(0)
const [disabled, setDisabled] = useState(false);
const increment = () => setClicks(clicks + 1);
const toggleDisabled = () => setDisabledStatus(!disabled)

return (
  <div>
    <div>{count}</div>
    <hr />
    <button type="button" onClick={increment}>+</button>
    <button type="button" onClick={toggleDisable}>disabled</button>
  </div>
)
```

We can do it as many times as we want! Each useState is unique and can function independently of each other. Likewise, state can be any data type and `useState()` can take any type as an argument. The initial value and it's type will be the starting value of the state.

However, after writing your third or fourth `useState` in the same component, you start to feel like that there's got to be something better. If your component needed the ability to undo, you'd have to keep track of the previous state _ontop of_ the current state for every operation

## useReducer 🔥🔥🔥

---

What is _useReducer_ ? It's a hook based off of Javascript's very popular _reduce_ function. Definitely a topic that will require it's own blog post eventually, until then, here are a few outstanding posts by other people on it

- [https://css-tricks.com/understanding-the-almighty-reducer/](Sarah Drasner on Javascript Reduce)

An important takeaway of the _reducer_ is it will always return one value, By _reducing_ the previous value down to a single representative one. Reducers are incredibly powerful and it's hard to get far in development without encountering them.

The `useReducer` hook looks like this. It's a function that receives a state and an acation, and _reduces_ it to a new value, in our case: state.
`(state, action) => newState`

```jsx
const [state, dispatch] = useReducer(reducer, initialState)
```

_in progress_
