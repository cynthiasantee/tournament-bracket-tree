import * as React from 'react'
import styles from './styles.module.css'
import { Tree } from './treeInterface'

const Children: React.FC = (props) => {
  return <div className={styles.children}>
    {React.Children.map(props.children, comp => {
      return <div className={styles.child}>{comp}</div>
    })}
  </div>
}

type MapDataToNode<T> = (t: T) => React.ReactElement

function toComponent<T>(tree: Tree<T>, depth: number, mapDataToNode: MapDataToNode<T>, reverse?: boolean): React.ReactElement {
  const rec = (t: Tree<T>) => toComponent(t, depth - 1, mapDataToNode, reverse);
  
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

export function ExampleComponent<T>(props: Props<T>) { 
  return(
    <div className={styles.container}>
      {toComponent(props.tree, 5, props.mapDataToNode, props.reverse)}
    </div>
  )
}

export * from './tree';
export * from './treeInterface';