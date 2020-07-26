import * as React from 'react'
import styles from './styles.module.css'
import { t, Tree } from './treeInterface'

function toComponent<T>(tree: Tree<T>): React.ReactElement {
  return <div className={styles.outer}>

    <div className={styles.parent}>
      {tree.data}
    </div>

    <div className={styles.children}>
      <div className={styles.child}>
        {tree.left && toComponent(tree.left)}
      </div>
      
      <div className={styles.child}>
        {tree.right && toComponent(tree.right)}
      </div>
    </div>

  </div>
}

export const ExampleComponent = () => { 
  return(
    <div className={styles.container}>
      {toComponent(t)}
    </div>
  )
}

export * from './tree';