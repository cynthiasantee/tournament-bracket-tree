import styles from './styles.module.css'

export const style = ({
    top: {
      outer: styles.outer,
      parent: styles.parent,
      hide: styles.hide,
      spacerContainer: styles.spacerContainer,
      spacer: styles.spacer,
      bar: styles.borderRight,
      hook: styles.borderBottom,
      children: styles.children
    },
    bottom: {
      outer: styles.outerBottom,
      parent: styles.parent,
      hide: styles.hide,
      spacerContainer: styles.spacerContainer,
      spacer: styles.spacer,
      bar: styles.borderRight,
      hook: styles.borderTop,
      children: styles.children
    },
    left: {
        outer: styles.outerLeft,
        parent: styles.parentRightLeft,
        hide: styles.hideRightLeft,
        spacerContainer: styles.spacerContainerRightLeft,
        spacer: styles.spacer,
        bar: styles.borderBottom,
        hook: styles.borderRight,
        children: styles.childrenRightLeft,
    },
    right: {    
        outer: styles.outerRight,
        parent: styles.parentRightLeft,
        hide: styles.hideRightLeft,
        spacerContainer: styles.spacerContainerRightLeft,
        spacer: styles.spacer,
        bar: styles.borderBottom,
        hook: styles.borderLeft,
        children: styles.childrenRightLeft,
    }
    });