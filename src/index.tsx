import * as React from 'react'
import styles from './styles.module.css'
import { t, Tree } from './treeInterface'

function toComponent<T>(tree: Tree<T>, depth: number): React.ReactElement {
  let comp;
  if (tree.tag === 'binary') {
    comp = (<div>
      <div className={styles.parent}>
        {tree.data}
      </div>
      <div className={styles.children}>
        <div className={styles.child}>
          {toComponent(tree.left, depth - 1)}
        </div>
        <div className={styles.child}>
          {toComponent(tree.right, depth - 1)}
        </div>
      </div>
    </div>)
  } else if (tree.tag === 'unary') {
    comp = (<div>
      <div className={styles.parent}>
        {tree.data}
      </div>
      <div className={styles.children}>
        <div className={styles.child}>
          {toComponent(tree.next, depth - 1)}
        </div>
      </div>
    </div>)
  } else if (tree.tag === 'leaf') {
    comp = <div>
    <div className={styles.parent}>
      {tree.data}
    </div>
    <div className={styles.children}>
      <div className={styles.child}>
        {toComponent({tag: 'dummy'}, depth - 1)}
      </div>
    </div>
  </div>
  } else if (tree.tag === 'dummy' && depth !== 0) {
    comp = <div>
    <div className={styles.parent}>
    </div>
    <div className={styles.children}>
      <div className={styles.child}>
        {toComponent({tag: 'dummy'}, depth - 1)}
      </div>
    </div>
  </div>
  } else if (tree.tag === 'dummy' && depth === 0) {
    comp = <div></div>
  }

  return <div className={styles.outer}>
    {comp}
  </div>
}

export const ExampleComponent = () => { 
  return(
    <div className={styles.container}>
      {toComponent(t, 5)}
    </div>
  )
}

export * from './tree';