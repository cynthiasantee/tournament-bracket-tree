import React from 'react';
import { BracketGenerator, Tree} from 'tournament-bracket-tree';
import 'tournament-bracket-tree/dist/index.css';

const App = () => {

  // define your type for one single node
  interface Game {
    teamOne: string;
    scoreTeamOne: number;
    teamTwo: string;
    scoreTeamTwo: number
  }
  
  //construct your tree
  const tournament: Tree<Game> = {
      data: {
        teamOne: "Team Thirteen",
        scoreTeamOne: 42,
        teamTwo: "Team Fourteen",
        scoreTeamTwo: 30,
      },
      left: {
        data: {
          teamOne: "Team Nine",
          scoreTeamOne: 25,
          teamTwo: "Team Ten",
          scoreTeamTwo: 32,
        },
        left: {
          data: {
            teamOne: "Team One",
            scoreTeamOne: 22,
            teamTwo: "Team Two",
            scoreTeamTwo: 39,
          }
        },
        right: {
          data: {
            teamOne: "Team Three",
            scoreTeamOne: 42,
            teamTwo: "Team Four",
            scoreTeamTwo: 33,
          },
        }
      },
      right: {
        data: {
          teamOne: "Team Eleven",
          scoreTeamOne: 21,
          teamTwo: "Team Twelve",
          scoreTeamTwo: 35,
        },
        left: {
          data: {
            teamOne: "Team Five",
            scoreTeamOne: 22,
            teamTwo: "Team Six",
            scoreTeamTwo: 21,
          },
        },
        right: {
          data: {
            teamOne: "Team Seven",
            scoreTeamOne: 34,
            teamTwo: "Team Eight",
            scoreTeamTwo: 27,
          }
        }
      }
    }
    
    //style one single node
    const mapShowToNode = (game: Game) => {
      return(
        //don't forget to have a standard height and width for all nodes
        <div style={{border: "1px solid black", height: "50px", width: "150px", display: "flex", flexDirection: "column"}}>
          <div style={{flex: 1, display: "flex", justifyContent: "space-between"}}>
            <p style={{margin: 0, paddingLeft: "2px"}}>{game.teamOne}</p>
            <p style={{margin: 0, paddingRight: "2px"}}>{game.scoreTeamOne}</p>
        </div>
        <div style={{flex: 1, borderTop: "1px solid black", display: "flex", justifyContent: "space-between"}}>
          <p style={{margin: 0, paddingLeft: "2px"}}>{game.teamTwo}</p>
          <p style={{margin: 0, paddingRight: "2px"}}>{game.scoreTeamTwo}</p>
        </div>
      </div>
      )
    }

    return <div style={{height: "500px", overflow: "scroll"}}>
      <BracketGenerator root={"right"} mapDataToNode={mapShowToNode} tree={tournament}/>
    </div> 
}

export default App;
