import { INCREMENT, DECREMENT } from 'action/count'

const countReducer = (state, action) => {
  switch (action) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      throw new Error('Action not defined')
  }
}

export default countReducer
