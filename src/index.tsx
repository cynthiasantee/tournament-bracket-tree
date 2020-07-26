import * as React from 'react'
import styles from './styles.module.css'
import { Tree, TreeWithTags } from './treeInterface'

const Children: React.FC = (props) => {
  return <div className={styles.children}>
    {React.Children.map(props.children, comp => {
      return <div className={styles.child}>{comp}</div>
    })}
  </div>
}

type MapDataToNode<T> = (t: T) => React.ReactElement

function toComponent<T>(tree: TreeWithTags<T>, depth: number, mapDataToNode: MapDataToNode<T>, reverse?: boolean): React.ReactElement {
  const rec = (t: TreeWithTags<T>) => toComponent(t, depth - 1, mapDataToNode, reverse);
  
  if (depth === 0) {
    return <div></div>
  } else {
    let comp;
    
    if (tree.tag === 'binary') {
      comp = <Children>
          {rec(tree.left)}
          {rec(tree.right)}
        </Children>
    } else if (tree.tag === 'unary') {
      comp = <Children>{rec(tree.next)}</Children>
    } else if (tree.tag === 'leaf' || tree.tag === 'dummy') {
      comp = <Children>{rec({tag: 'dummy'})}</Children>;
    }
    return <div className={reverse ? styles[`outer-reverse`] : styles.outer}>
      <div className={styles.parent}>
        {tree.tag === 'dummy' ? '' : mapDataToNode(tree.data)}
      </div>
      {comp}
    </div>
  }
}

interface Props<T> {
  reverse?: boolean,
  mapDataToNode: MapDataToNode<T>,
  tree: Tree<T>
}

export function BracketGenerator<T>(props: Props<T>) { 

  function tagTree(tree: Tree<T>): TreeWithTags<T> {
    if (tree.left && tree.right) {
      return {
        data: tree.data,
        right: tagTree(tree.right),
        left: tagTree(tree.left),
        tag: "binary"
      }
    } else if (tree.left) {
      return {
        data: tree.data,
        next: tagTree(tree.left),
        tag: "unary"
      }
    } else if (tree.right) {
      return {
        data: tree.data,
        next: tagTree(tree.right),
        tag: "unary"
      }
    } else {
      return {
        data: tree.data,
        tag: "leaf"
      }
    }
  }

  return(
    <div className={styles.container}>
      {toComponent(tagTree(props.tree), 5, props.mapDataToNode, props.reverse)}
    </div>
  )
}

export * from './tree';
export * from './treeInterface';