import React from 'react'

import { ExampleComponent,   Button, Card } from 'my-library'
import 'my-library/dist/index.css'

const App = () => {
  return <>
  <ExampleComponent text="Create React Library Example 😄" />
  <Button text="Button 1" />
  <Card title="Title">
  </Card>
  </>
}

export default App
