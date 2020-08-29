# tournament-bracket-tree

> Renders a simple tournament bracket

[![NPM](https://img.shields.io/npm/v/tournament-bracket-tree.svg)](https://www.npmjs.com/package/tournament-bracket-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tournament-bracket-tree
```

## Important information

* ```tournament-bracket tree```only supports binary trees
* The tree does not have to be balanced
* The content of the node is 100% customizable
* All nodes must be the same size
* This library supports typescript


## Usage
### 1. Construct your tree
Tree type: 
```tsx
interface Tree<T> {
  data: T,
  left?: Tree<T>,
  right?: Tree<T>
}
```
Each node can have zero (leaf), one (unary) or two (binary) children:
```tsx
import {Tree} from 'tournament-bracket-tree';

const leafNode: Tree<number> = {data: 5};
const unaryNode: Tree<number> = {data: 3, left: leafNode};
const binaryNode: Tree<number> = {data: 2, left: leafNode, right: unaryNode};
```
When creating a unary node, either “left“ or “right“ can be used to represent its child.
### 2. Create map function
```tsx
const mapMyDataToNode = (data: number) => {
  return(
    //don't forget to have a standard height and width that will be appplied to all nodes
    <div style={{border: "1px solid black", height: "50px", width: "50px"}}>
        <p style={{margin: 0, paddingLeft: "2px", color: "red"}}>{data}</p>
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

### BracketGenerator Props
Where on the page you want your fist node to show:

`root = "top" | "bottom" | "left" | "right"`

Function to construct a single node:

`mapDataToNode = <your-function>`

Your data tree:

`tree = <your-tree>`


### Important observations
If you are using "<i>root</i>" as <b>right</b> or <b>left</b>:
* You can manually set the height of the container to ensure the content will fit. Allowing it to the scrollable will also help making sure the content won't get distorted if too large

If you are using "<i>root</i>" as <b>top</b> or <b>bottom</b>:
* You can set the width of its container. If not, it will take 100% of its parent width. 

![alt tag](https://github.com/cynthiasantee/tournament-bracket-tree/blob/master/src/images/basic.png?raw=true)

### To Do
* Add testing
* Add customization of lines

## License

MIT © [cynthiasantee](https://github.com/cynthiasantee)
