import { useCallback, useReducer } from 'react'

import { INCREMENT, DECREMENT } from 'action/count'
import count from 'reducer/count'
import { createStore } from 'shared/store'

const useCount = (initialState = { count: 5 }) => {
  const [state, dispatch] = useReducer(count, initialState)
  const increment = useCallback(() => dispatch(INCREMENT), [])
  const decrement = useCallback(() => dispatch(DECREMENT), [])

  return { state, increment, decrement }
}

const Count = createStore(useCount)

export default Count
