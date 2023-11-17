import React from 'react'

import { useDependency } from '../Context/DependencyProvider'

const MyComponent = () => {
    const {myService} = useDependency()
    myService.callMe()

  return (
    <div>MyComponent</div>
  )
}

export default MyComponent
