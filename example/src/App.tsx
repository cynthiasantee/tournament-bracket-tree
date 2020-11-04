import React from 'react'
import { TreeGenerator } from 'tournament-bracket-tree'
import 'tournament-bracket-tree/dist/index.css'
import { mapTournamentToNode } from './mapTournamentToNode'
import { myTree } from './myTree'

const App = () => {
    return (
        <TreeGenerator
            root={'right'}
            mapDataToNode={mapTournamentToNode}
            tree={myTree}
            lineThickness={1}
            lineColor="red"
            lineStyle="solid"
            lineLength={50}
        />
    )
}

export default App
