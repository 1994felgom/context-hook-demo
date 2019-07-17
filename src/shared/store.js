import React, { useContext } from 'react'

export const createStore = useHook => {
  const Context = React.createContext(null)

  const Provider = ({ children, initialState }) => {
    return (
      <Context.Provider value={useHook(initialState)}>
        {children}
      </Context.Provider>
    )
  }

  const useStore = () => {
    const v = useContext(Context)

    if (v === null)
      throw new Error('Component must be wrapped with <Container.Provider/>')

    return v
  }

  return { Provider, useStore }
}

export const useStore = c => c.useStore()
