import { Tree, TreeGenerator } from 'tournament-bracket-tree'

import React from 'react'
import { mapTournamentToNode } from './mapTournamentToNode'
import { Game } from './myTree'

const balancedTree = (levels: number): Tree<Game> => {
    if (levels === 1) {
        return {
            data: {
                teamOne: 'Team Thirteen',
                scoreTeamOne: 42,
                teamTwo: 'Team Fourteen',
                scoreTeamTwo: 30
            }
        }
    } else {
        return {
            data: {
                teamOne: 'Team Thirteen',
                scoreTeamOne: 42,
                teamTwo: 'Team Fourteen',
                scoreTeamTwo: 30
            },
            left: balancedTree(levels - 1),
            right: balancedTree(levels - 1)
        }
    }
}

// Simple balanced tree, simple map fn
export const test1 = (
    <TreeGenerator
        root="left"
        tree={balancedTree(1)}
        mapDataToNode={mapTournamentToNode}
    />
)

// Simple balanced tree, simple map fn
export const test2 = (
    <TreeGenerator
        root="left"
        tree={balancedTree(3)}
        mapDataToNode={mapTournamentToNode}
    />
)

// Simple balanced tree, simple map fn
export const test3 = (
    <TreeGenerator
        root="left"
        tree={balancedTree(6)}
        mapDataToNode={mapTournamentToNode}
    />
)

// Simple balanced tree, simple map fn
export const test4 = (
    <TreeGenerator
        root="left"
        tree={balancedTree(9)}
        mapDataToNode={mapTournamentToNode}
    />
)

// Simple balanced tree, simple map fn
export const test5 = (
    <TreeGenerator
        root="left"
        tree={balancedTree(12)}
        mapDataToNode={mapTournamentToNode}
    />
)
