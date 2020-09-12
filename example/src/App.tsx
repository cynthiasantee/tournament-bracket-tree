import React from 'react'
import { TreeGenerator } from 'tournament-bracket-tree'
import 'tournament-bracket-tree/dist/index.css'
import { mapTournamentToNode } from './mapTournamentToNode'
import { myTree } from './myTree'

const App = () => {
    return (
        <div style={{ height: '500px', overflow: 'scroll' }}>
            <TreeGenerator root={'right'} mapDataToNode={mapTournamentToNode} tree={myTree} />
        </div>
    )
}

export default App
