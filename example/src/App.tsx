import React from 'react'
import { TreeGenerator } from 'tournament-bracket-tree'
import 'tournament-bracket-tree/dist/index.css'
import { mapTournamentToNode } from './mapTournamentToNode'
import { myTree } from './myTree'

const App = () => {
    return (
        <TreeGenerator
            root={'left'}
            mapDataToNode={mapTournamentToNode}
            tree={myTree}
            lineThickness={2}
            lineColor="red"
            lineStyle="dashed"
        />
    )
}

export default App
