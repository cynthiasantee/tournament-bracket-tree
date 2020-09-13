import * as React from 'react'
import { style as styleV2 } from './styleV2'
import { Tree } from './tree'
import { TreeWithTags } from './treeADT'
import { Root } from './root'
import { toComponent, MapDataToNode } from './toComponentV2'
import { calcDepth } from './calcDepth'

interface Props<T> {
    root?: Root
    mapDataToNode: MapDataToNode<T>
    tree: Tree<T>
}

export function TreeGenerator<T>(props: Props<T>) {
    function tagTree(tree: Tree<T>): TreeWithTags<T> {
        if (tree.left && tree.right) {
            return {
                data: tree.data,
                right: tagTree(tree.right),
                left: tagTree(tree.left),
                tag: 'binary'
            }
        } else if (tree.left) {
            return {
                data: tree.data,
                next: tagTree(tree.left),
                tag: 'unary'
            }
        } else if (tree.right) {
            return {
                data: tree.data,
                next: tagTree(tree.right),
                tag: 'unary'
            }
        } else {
            return {
                data: tree.data,
                tag: 'leaf'
            }
        }
    }

    const treeWithTags = tagTree(props.tree)
    const dummyParent = props.mapDataToNode(props.tree.data)

    return (
        <div className={styleV2.top}>
            <div className={styleV2.container}></div>
            {toComponent(treeWithTags, calcDepth(treeWithTags), props.mapDataToNode, dummyParent, true, props.root)}
        </div>
    )
}

export { Tree } from './tree'
