import { useState } from "react";

import {initialItems} from './utils'

type DemoProps = object

// eslint-disable-next-line no-empty-pattern
const PracticeMemo = ({}: DemoProps) => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);
  
   const selectedItem = items.find((item)=> item.isSelected)

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default PracticeMemo
