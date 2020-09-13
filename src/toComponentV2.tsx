import * as React from 'react'
import { style as styleV2 } from './styleV2'
import { TreeWithTags } from './treeADT'
import { Root } from './root'
import { style as generalStyle } from './style'
import cx from 'classnames'

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
            <div className={cx(styleV2.flex, styleV2.center)}>
                {React.Children.map(props.children, (comp) => {
                    return <div className={styleV2.child}>{comp}</div>
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
                <div className={cx(styleV2.container, styleV2.flex)}>
                    {
                        <div className={cx(styleV2.entrySpacer, styleV2.flex, styleV2.center)}>
                            {!isRoot && <div className={cx(styleV2.line)}></div>}
                        </div>
                    }
                    <div className={cx(styleV2.flex, styleV2.center)}>{mapDataToNode(tree.data)}</div>
                </div>
            )
        case 'unary':
            return (
                <div className={cx(styleV2.container, styleV2.flex)}>
                    <div className={cx(styleV2.entrySpacer, styleV2.flex, styleV2.center)}>
                        {!isRoot && <div className={cx(styleV2.line)}></div>}
                    </div>
                    <div className={cx(styleV2.flex, styleV2.center)}>{mapDataToNode(tree.data)}</div>
                    <div className={cx(styleV2.exitSpacer, styleV2.flex, styleV2.center)}>
                        <div className={cx(styleV2.line)}></div>
                    </div>
                    <Children>{rec(tree.next)}</Children>
                </div>
            )
        case 'binary':
            return (
                <div className={cx(styleV2.container, styleV2.flex)}>
                    <div className={cx(styleV2.entrySpacer, styleV2.flex, styleV2.center)}>
                        {!isRoot && <div className={cx(styleV2.line)}></div>}
                    </div>
                    <div className={cx(styleV2.flex, styleV2.center)}>{mapDataToNode(tree.data)}</div>
                    <div className={cx(styleV2.exitSpacer, styleV2.flex, styleV2.center)}>
                        <div className={cx(styleV2.lineContainer, styleV2.flex, styleV2.center)}>
                            <div className={cx(styleV2.line)}></div>
                        </div>
                    </div>
                    <Children>
                        {rec(tree.left)}
                        {rec(tree.right)}
                    </Children>
                </div>
            )
    }
}
