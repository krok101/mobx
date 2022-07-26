import counter from "../../store/counter"
import { observer } from 'mobx-react-lite'

const Display = observer(() => {
  return (
    <div>display counter: {counter.count}</div>
  )
})

export default Display