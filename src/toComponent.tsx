import * as React from 'react'
import { style } from './style'
import { TreeWithTags } from './treeADT'
import { Root } from './root'
import cx from 'classnames'

export type MapDataToNode<T> = (t: T) => React.ReactElement

export function toComponent<T>(
    tree: TreeWithTags<T>,
    depth: number,
    mapDataToNode: MapDataToNode<T>,
    dummyParent: React.ReactElement,
    root: Root = 'top',
    lineThickness?: number,
    lineColor?: string,
    lineStyle?: string,
    lineLength?: number
): React.ReactElement {
    const rec = (t: TreeWithTags<T>) =>
        toComponent(t, depth - 1, mapDataToNode, dummyParent, root, lineThickness, lineColor, lineStyle, lineLength)

    const Children: React.FC = (props) => {
        return (
            <div className={cx(style.flex, style.center, (root === 'left' || root === 'right') && style.column)}>
                {React.Children.map(props.children, (comp) => {
                    return <div className={style.child}>{comp}</div>
                })}
            </div>
        )
    }

    // const style = generalStyle[root]

    const lineStyles = {
        borderColor: lineColor,
        borderWidth: `${lineThickness}px`,
        borderStyle: lineStyle
    }

    let spacer = {}
    if (root === 'left' || root === 'right') {
        spacer = { height: `calc(50% - ${lineThickness}px)` }
    } else {
        spacer = { width: `calc(50% - ${lineThickness}px)` }
    }

    let spacerHeight
    if (root === 'left' || root === 'right') {
        spacerHeight = { minWidth: `${lineLength}px` }
    } else {
        spacerHeight = { height: `${lineLength}px` }
    }

    switch (tree.tag) {
        case 'dummy':
            // return empty divs until depth is 0
            if (depth === 0) {
                return <div></div>
            } else {
                return (
                    <div className={cx(style.container, style.flex)}>
                        <div
                            className={cx(style.entrySpacer, style.flex, style.center)}
                            style={spacerHeight}
                        ></div>

                        <div className={cx(style.flex, style.center)} id="dummy">
                            <div>{dummyParent}</div>
                        </div>

                        <div
                            className={cx(style.exitSpacer, style.flex, style.center)}
                            style={spacerHeight}
                        ></div>
                        <Children>{rec(tree)}</Children>
                    </div>
                )
            }
        case 'leaf':
            return (
                <div className={cx(style.container, style.flex)}>
                    <div className={cx(style.flex, style.center)}>{mapDataToNode(tree.data)}</div>
                    {depth !== 0 && <Children>{rec({ tag: 'dummy' })}</Children>}
                </div>
            )
        case 'unary':
            return (
                <div className={cx(style.container, style.flex)}>
                    <div className={cx(style.entrySpacer, style.flex, style.center)} style={spacerHeight}>
                        <div className={cx(style.line)} style={lineStyles}></div>
                    </div>
                    <div className={cx(style.flex, style.center)}>{mapDataToNode(tree.data)}</div>
                    <div className={cx(style.exitSpacer, style.flex, style.center)} style={spacerHeight}>
                        <div className={cx(style.line)} style={lineStyles}></div>
                    </div>
                    <Children>{rec(tree.next)}</Children>
                </div>
            )
        case 'binary':
            return (
                <div className={cx(style.container, style.flex)}>
                    <div className={cx(style.flex, style.center)}>{mapDataToNode(tree.data)}</div>
                    <div className={cx(style.entrySpacer, style.flex, style.center)} style={spacerHeight}>
                        <div className={cx(style.line)} style={lineStyles}></div>
                    </div>
                    <div className={cx(style.exitSpacer, style.flex, style.center)} style={spacerHeight}>
                        <div
                            id="exit-spacer"
                            className={cx(style.lineContainer, style.flex, style.center)}
                            style={{ ...lineStyles, ...spacer, ...spacerHeight }}
                        ></div>
                    </div>
                    <Children>
                        {rec(tree.left)}
                        {rec(tree.right)}
                    </Children>
                </div>
            )
    }
}
