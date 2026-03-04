import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Coungt :{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Decrement</button>
     <button onClick={()=>setCount(count+1)}>Decrement</button>
    </div>
  )
}

export default State