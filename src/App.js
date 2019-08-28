import React from 'react'

import Button from 'component/Button'
import Count from 'store/count'

const App = () => {
  const { state, increment, decrement } = Count.useStore()

  return (
    <React.Fragment>
      <h1>{state.count}</h1>

      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </React.Fragment>
  )
}

export default App
