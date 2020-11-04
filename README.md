# tournament-bracket-tree

> Renders a simple tournament bracket

[![NPM](https://img.shields.io/npm/v/tournament-bracket-tree.svg)](https://www.npmjs.com/package/tournament-bracket-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tournament-bracket-tree
```

## About

-   `tournament-bracket tree`only supports binary trees
-   The tree does not have to be balanced
-   The content of the node is 100% customizable
-   All nodes must be the same size
-   This library supports typescript

## Usage

### 1. Construct your tree

Tree type:

```tsx
interface Tree<T> {
    data: T
    left?: Tree<T>
    right?: Tree<T>
}
```

Each node can have zero (leaf), one (unary) or two (binary) children:

```tsx
import { Tree } from 'tournament-bracket-tree'

const leafNode: Tree<number> = { data: 5 }
const unaryNode: Tree<number> = { data: 3, left: leafNode }
const binaryNode: Tree<number> = { data: 2, left: leafNode, right: unaryNode }
```

When creating a unary node, either “left“ or “right“ can be used.

### 2. Create map function

```tsx
const mapMyDataToNode = (data: number) => {
    return (
        //don't forget to have a standard height and width that will be appplied to all nodes
        <div style={{ border: '1px solid black', height: '50px', width: '50px' }}>
            <p style={{ margin: 0, paddingLeft: '2px', color: 'red' }}>{data}</p>
        </div>
    )
}
```

### 3. Combine map function and tree data into bracket:

```tsx
import { BracketGenerator } from 'tournament-bracket-tree';
import 'tournament-bracket-tree/dist/index.css';

<BracketGenerator root={"top"} mapDataToNode={mapMyDataToNode} tree={your-tree}/>
<BracketGenerator root={"left"} mapDataToNode={mapMyDataToNode} tree={your-tree}/>
```

### BracketGenerator Props

```
interface Props {
    root: "top" | "bottom" | "left" | "right";
    mapDataToNode: (yourTree: YourTreeType) => JSX.Element;
    tree: Tree<YourTreeType>;
    lineThickness?: number // Default = 1(px);
    lineStyle?: string // Default = "solid";
    lineColor?: string // Default = "black";
    lineLength?: number //Default = 25(px);
}
```

### Important observations

#### Balanced trees

If you are using "<i>root</i>" as <b>right</b> or <b>left</b>:

-   You can add top and bottom margins to your outer html tag to enssure distance between nodes

If you are using "<i>root</i>" as <b>top</b> or <b>bottom</b>:

-   You can add right and left margins to your outer html tag to enssure distance between nodes

![alt tag](https://github.com/cynthiasantee/tournament-bracket-tree/blob/master/src/images/basic.png?raw=true)

#### Unbalanced trees

If your tree is large and significantly unbalanced, the lines will distort.

### To do

-   Add testing

### Run Example

-   Node version required >= v12.18.0

### Known issues

-   Distortion of connecting lines if tree is significantly unbalanced
-   Chrome specific: due to Chrome's pixelation calculation, some of the generated lines might display 1px off of desired location

### Full example:

```tsx
import React from 'react'
import { Tree } from 'tournament-bracket-tree'
import { BracketGenerator } from 'tournament-bracket-tree'
import 'tournament-bracket-tree/dist/index.css'

// 1. Contruct your tree
// define your type for one single node
export interface Game {
    teamOne: string
    scoreTeamOne: number
    teamTwo: string
    scoreTeamTwo: number
}

//your tree
export const myTree: Tree<Game> = {
    data: {
        teamOne: 'Team Thirteen',
        scoreTeamOne: 42,
        teamTwo: 'Team Fourteen',
        scoreTeamTwo: 30
    },
    left: {
        data: {
            teamOne: 'Team Nine',
            scoreTeamOne: 25,
            teamTwo: 'Team Ten',
            scoreTeamTwo: 32
        },
        left: {
            data: {
                teamOne: 'Team One',
                scoreTeamOne: 22,
                teamTwo: 'Team Two',
                scoreTeamTwo: 39
            }
        },
        right: {
            data: {
                teamOne: 'Team Three',
                scoreTeamOne: 42,
                teamTwo: 'Team Four',
                scoreTeamTwo: 33
            }
        }
    },
    right: {
        data: {
            teamOne: 'Team Eleven',
            scoreTeamOne: 21,
            teamTwo: 'Team Twelve',
            scoreTeamTwo: 35
        },
        left: {
            data: {
                teamOne: 'Team Five',
                scoreTeamOne: 22,
                teamTwo: 'Team Six',
                scoreTeamTwo: 21
            }
        },
        right: {
            data: {
                teamOne: 'Team Seven',
                scoreTeamOne: 34,
                teamTwo: 'Team Eight',
                scoreTeamTwo: 27
            }
        }
    }
}

// 2. Create map function
export const mapTournamentToNode = (game: Game) => {
    return (
        //tip: using flexbox helps to make it responsive
        <div
            style={{
                border: '1px solid black',
                height: '50px',
                width: '150px',
                display: 'flex',
                flexDirection: 'column',
                //don't forget to add margins to the outer container
                margin: '10px 0'
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

// 3. Combine map function and tree data into bracket:
const MyTournament = () => {
    return (
        <TreeGenerator
            root={'right'}
            mapDataToNode={mapTournamentToNode}
            tree={myTree}
            lineThickness={1} //optional
            lineColor="red" //optional
            lineStyle="solid" //optional
            lineLength={50} //optional
        />
    )
}

export default MyTournament
```

## License

MIT © [cynthiasantee](https://github.com/cynthiasantee)
