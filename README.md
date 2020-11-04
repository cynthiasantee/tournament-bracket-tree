# tournament-bracket-tree

> Renders a simple tournament bracket

[![NPM](https://img.shields.io/npm/v/tournament-bracket-tree.svg)](https://www.npmjs.com/package/tournament-bracket-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tournament-bracket-tree
```

## About

-   `tournament-bracket-tree`only supports binary trees
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
import { TreeGenerator } from 'tournament-bracket-tree';
import 'tournament-bracket-tree/dist/index.css';

<TreeGenerator root={"top"} mapDataToNode={mapMyDataToNode} tree={your-tree}/>
<TreeGenerator root={"left"} mapDataToNode={mapMyDataToNode} tree={your-tree}/>
```

### TreeGenerator Props

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

-   You can add top and bottom margins to your outer html tag to ensure distance between nodes

If you are using "<i>root</i>" as <b>top</b> or <b>bottom</b>:

-   You can add right and left margins to your outer html tag to ensure distance between nodes

![alt tag](https://github.com/cynthiasantee/tournament-bracket-tree/blob/master/src/images/basic.png?raw=true)

#### Unbalanced trees

If your tree is large <b>and</b> significantly unbalanced, the lines will distort.

### Full example:

-   https://codesandbox.io/s/tournament-bracket-tree-ijrr7

### To do

-   Add testing

### Run Example

-   Node version required >= v12.18.0

### Known issues

-   Distortion of connecting lines if tree is significantly unbalanced
-   Chrome specific: due to Chrome's pixelation calculation, some of the generated lines might display 1px off of desired location

## License

MIT © [cynthiasantee](https://github.com/cynthiasantee)
