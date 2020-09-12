import * as React from 'react'
import styles from './styles.module.css'
import { TreeWithTags } from './treeADT'
import { Root } from './root'
import { style as generalStyle } from './style'

export type MapDataToNode<T> = (t: T) => React.ReactElement

export function toComponent<T>(
    tree: TreeWithTags<T>,
    depth: number,
    mapDataToNode: MapDataToNode<T>,
    dummyParent: React.ReactElement,
    isRoot: boolean,
    root: Root = 'top'
): React.ReactElement {
    const rec = (t: TreeWithTags<T>) => toComponent(t, depth - 1, mapDataToNode, dummyParent, false, root)

    const Children: React.FC = (props) => {
        return (
            <div className={style.children}>
                {React.Children.map(props.children, (comp) => {
                    return <div className={styles.child}>{comp}</div>
                })}
            </div>
        )
    }

    const style = generalStyle[root]

    switch (tree.tag) {
        case 'dummy':
            // return empty divs until depth is 0
            if (depth === 0) {
                return <div></div>
            } else {
                return (
                    <div className={style.outer}>
                        <div className={style.spacerContainer}></div>
                        <div className={[style.parent, style.hide].join(' ')} id="dummy">
                            <div>{dummyParent}</div>
                        </div>
                        <div className={style.spacerContainer}></div>
                        <Children>{rec(tree)}</Children>
                    </div>
                )
            }
        case 'leaf':
            return (
                <div className={style.outer}>
                    <div className={style.spacerContainer}>
                        {!isRoot && <div className={[style.spacer, style.bar].join(' ')}></div>}
                        <div className={style.spacer}></div>
                    </div>

                    <div className={style.parent}>{mapDataToNode(tree.data)}</div>
                    <div className={style.spacerContainer}></div>
                    {depth !== 0 && <Children>{rec({ tag: 'dummy' })}</Children>}
                </div>
            )
        case 'unary':
            return (
                <div className={style.outer}>
                    <div className={style.spacerContainer}>
                        {!isRoot && <div className={[style.spacer, style.bar].join(' ')}></div>}
                        <div className={style.spacer}></div>
                    </div>

                    <div className={style.parent}>{mapDataToNode(tree.data)}</div>
                    <div className={style.spacerContainer}>
                        <div className={[style.spacer, style.bar].join(' ')}></div>
                        <div className={style.spacer}></div>
                    </div>
                    <Children>{rec(tree.next)}</Children>
                </div>
            )
        case 'binary':
            return (
                <div className={style.outer}>
                    <div className={style.spacerContainer}>
                        {!isRoot && <div className={[style.spacer].join(' ')}></div>}
                        <div className={styles.separator}></div>
                        <div className={style.spacer}></div>
                    </div>

                    <div className={style.parent}>{mapDataToNode(tree.data)}</div>

                    <div className={style.spacerContainer}>
                        <div className={style.spacer}></div>
                        <div className={[style.spacer, style.hook].join(' ')}></div>
                        <div className={styles.separator}></div>
                        <div className={[style.spacer, style.hook].join(' ')}></div>
                        <div className={styles.spacer}></div>
                    </div>

                    <Children>
                        {rec(tree.left)}
                        {rec(tree.right)}
                    </Children>
                </div>
            )
    }
}
