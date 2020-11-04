import { Tree } from 'tournament-bracket-tree'

// define your type for one single node
export interface Game {
    teamOne: string
    scoreTeamOne: number
    teamTwo: string
    scoreTeamTwo: number
}

//construct your tree
// export const myTree: Tree<Game> = {
//       data: {
//         teamOne: "Team Thirteen",
//         scoreTeamOne: 42,
//         teamTwo: "Team Fourteen",
//         scoreTeamTwo: 30,
//       },
//       left: {
//         data: {
//           teamOne: "Team Nine",
//           scoreTeamOne: 25,
//           teamTwo: "Team Ten",
//           scoreTeamTwo: 32,
//         },
//         left: {
//           data: {
//             teamOne: "Team One",
//             scoreTeamOne: 22,
//             teamTwo: "Team Two",
//             scoreTeamTwo: 39,
//           }
//         },
//         right: {
//           data: {
//             teamOne: "Team Three",
//             scoreTeamOne: 42,
//             teamTwo: "Team Four",
//             scoreTeamTwo: 33,
//           },
//         }
//       },
//       right: {
//         data: {
//           teamOne: "Team Eleven",
//           scoreTeamOne: 21,
//           teamTwo: "Team Twelve",
//           scoreTeamTwo: 35,
//         },
//         left: {
//           data: {
//             teamOne: "Team Five",
//             scoreTeamOne: 22,
//             teamTwo: "Team Six",
//             scoreTeamTwo: 21,
//           },
//         },
//         right: {
//           data: {
//             teamOne: "Team Seven",
//             scoreTeamOne: 34,
//             teamTwo: "Team Eight",
//             scoreTeamTwo: 27,
//           }
//         }
//       }
//     }

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

// const unbalancedTree = {
//     data: {
//         teamOne: 'Team Thirteen',
//         scoreTeamOne: 42,
//         teamTwo: 'Team Fourteen',
//         scoreTeamTwo: 30
//     },
//     left: balancedTree(1),
//     right: balancedTree(4)
// }

export const myTree: Tree<Game> = balancedTree(5)
