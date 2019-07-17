import React from 'react'
import { render } from 'react-dom'

import App from 'App'
import Count from 'store/count'

import 'index.css'

render(
  <Count.Provider>
    <App />
  </Count.Provider>,
  document.getElementById('root')
)
