import { observer } from "mobx-react-lite"
import counter from "../../store/counter"

const Counter = observer(() => {
  return (
    <>
      <div>counter = {counter.count}</div>
      <button onClick={() => counter.increment()}>increment</button>
      <button onClick={() => counter.decrement()}>decrement</button>
    </>
  )
})

export default Counter