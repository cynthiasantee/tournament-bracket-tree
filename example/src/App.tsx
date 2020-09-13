import React from 'react'
import { TreeGenerator } from 'tournament-bracket-tree'
import 'tournament-bracket-tree/dist/index.css'
import { mapTournamentToNode } from './mapTournamentToNode'
import { myTree } from './myTree'

const App = () => {
    return (
        <div style={{}}>
            <TreeGenerator root={'top'} mapDataToNode={mapTournamentToNode} tree={myTree} />
        </div>
    )
}

export default App
