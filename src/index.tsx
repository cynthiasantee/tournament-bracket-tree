import * as React from 'react'
import styles from './styles.module.css'
import { Tree, TreeWithTags, Root } from './treeInterface'

const Children: React.FC = (props) => {
  return <div className={styles.children}>
    {React.Children.map(props.children, comp => {
      return <div className={styles.child}>{comp}</div>
    })}
  </div>
}

function calcDepth<T>(tree: TreeWithTags<T>): number {
  switch(tree.tag) {
    case 'binary':
      return 1 + Math.max(calcDepth(tree.left), calcDepth(tree.right));
    case 'unary':
      return 1 + calcDepth(tree.next);
    case 'leaf':
      return 1;
    case 'dummy':
      return 0;
  }
}

type MapDataToNode<T> = (t: T) => React.ReactElement

function toComponent<T>(tree: TreeWithTags<T>, depth: number, mapDataToNode: MapDataToNode<T>, dummyParent: React.ReactElement, isRoot: boolean, root?: Root): React.ReactElement {
  const rec = (t: TreeWithTags<T>) => toComponent(t, depth - 1, mapDataToNode, dummyParent, false, root);

  switch(tree.tag) {
    case 'dummy':
      // return empty divs until depth is 0
      if (depth === 0) {
        return <div></div>;
      } else {
        return ( 
          <div className={root !== "bottom" ? styles.outer : styles.outerReverse}>
            <div className={styles.spacerContainer}></div>
        <div className={[styles.parent, styles.hide].join(' ')}>
          <div>{dummyParent}</div>
        </div>
            <div className={styles.spacerContainer}></div>
            <Children>
              {rec(tree)}
            </Children>
          </div>
        );
      }
    case 'leaf':
      return (
        <div className={root !== "bottom" ? styles.outer : styles.outerReverse}>

          <div className={styles.spacerContainer}>
            {
              !isRoot && <div className={[styles.spacer, styles.borderRight].join(' ')}></div>
            }
            <div className={styles.spacer}></div>
          </div>

            <div className={styles.parent}>{mapDataToNode(tree.data)}</div>
            <div className={styles.spacerContainer}></div>
            {
              depth !== 0 && (
              <Children>
                {rec({tag: 'dummy'})}
              </Children>
              )
            }


        </div>
      );
    case 'unary':
      return (
        <div className={root !== "bottom"  ? styles.outer : styles.outerReverse}>

          <div className={styles.spacerContainer}>
          {
              !isRoot && <div className={[styles.spacer, styles.borderRight].join(' ')}></div>
            }
            <div className={styles.spacer}></div>
          </div>

            <div className={styles.parent}>{mapDataToNode(tree.data)}</div>
            <div className={styles.spacerContainer}>
            <div className={[styles.spacer, styles.borderRight].join(' ')}></div>
            <div className={styles.spacer}></div>
          </div>
            
            <Children>
              {rec(tree.next)}
            </Children>


        </div>
      );
    case 'binary':
      return (
        <div className={root !== "bottom"  ? styles.outer : styles.outerReverse}>
            
            <div className={styles.spacerContainer}>
            {
              !isRoot && <div className={[styles.spacer, styles.borderRight].join(' ')}></div>
            }
            <div className={styles.spacer}></div>
          </div>
            
            <div className={styles.parent}>{mapDataToNode(tree.data)}</div>

            <div className={styles.spacerContainer}>
            <div className={styles.spacer}></div>
            <div className={root !== "bottom"  ? [styles.spacer, styles.borderRight, styles.borderBottom].join(' ') : [styles.spacer, styles.borderRight, styles.borderReverse].join(' ')}></div>
            <div className={root !== "bottom"  ? [styles.spacer, styles.borderBottom].join(' ') : [styles.spacer, styles.borderReverse].join(' ')}></div>
             <div className={styles.spacer}></div>
             </div>

            <Children>
              {rec(tree.left)}
              {rec(tree.right)}
            </Children>



        </div>
      );
  }  

}

interface Props<T> {
  root?: Root,
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

  const treeWithTags = tagTree(props.tree)
  console.log(treeWithTags);

  const dummyParent = props.mapDataToNode(props.tree.data)

  return toComponent(treeWithTags, calcDepth(treeWithTags), props.mapDataToNode, dummyParent, true,  props.root);
}

export * from './treeInterface';