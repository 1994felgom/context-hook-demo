import React, { memo } from 'react'

import createRandomColor from 'shared/createRandomColor'

const Button = memo(props => <button {...props} style={createRandomColor()} />)

export default Button
