import * as React from 'react'
import { style } from './style'
import { Tree } from './tree'
import { TreeWithTags } from './treeADT'
import { Root } from './root'
import { toComponent, MapDataToNode } from './toComponent'
import { calcDepth } from './calcDepth'
import cx from 'classnames'

interface Props<T> {
    root?: Root
    mapDataToNode: MapDataToNode<T>
    tree: Tree<T>
    lineThickness?: number
    lineColor?: string
    lineStyle?: string
    lineLength?: number
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

    const orientation = {
        left: style.left,
        right: style.right,
        top: style.top,
        bottom: style.bottom
    }[props.root || 'top']

    return (
        <div className={cx(orientation, (props.root === 'top' || props.root === 'bottom') && style.inlineBlock)}>
            {toComponent(
                treeWithTags,
                calcDepth(treeWithTags),
                props.mapDataToNode,
                dummyParent,
                props.root,
                props.lineThickness,
                props.lineColor,
                props.lineStyle,
                props.lineLength
            )}
        </div>
    )
}

export { Tree } from './tree'
