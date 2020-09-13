import React from 'react'
import { Game } from './myTree'

//style one single node
export const mapTournamentToNode = (game: Game) => {
    return (
        //don't forget to add top and bottom margins to the outer container
        <div
            style={{
                border: '1px solid black',
                height: '50px',
                width: '150px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0px'
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <p style={{ margin: 0, paddingLeft: '2px' }}>{game.teamOne}</p>
                <p style={{ margin: 0, paddingRight: '2px' }}>{game.scoreTeamOne}</p>
            </div>
            <div
                style={{
                    flex: 1,
                    borderTop: '1px solid black',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <p style={{ margin: 0, paddingLeft: '2px' }}>{game.teamTwo}</p>
                <p style={{ margin: 0, paddingRight: '2px' }}>{game.scoreTeamTwo}</p>
            </div>
        </div>
    )
}