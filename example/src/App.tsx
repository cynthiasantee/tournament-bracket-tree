import React from 'react'

import { ExampleComponent, t} from 'react-tournament-bracket-generator'
import 'react-tournament-bracket-generator/dist/index.css'

const App = () => {

  const mapDataToNode = (n: number) => {
    return <div>
      NODE: {n}
      <a href="https://www.google.com">game</a>
    </div>
  }

  return <div>
    <ExampleComponent mapDataToNode={mapDataToNode} tree={t} reverse={true}/>
    <ExampleComponent mapDataToNode={mapDataToNode} tree={t}/>

  </div>
  
}

export default App
