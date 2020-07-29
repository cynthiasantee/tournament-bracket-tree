import styles from './styles.module.css'

export const style = ({
    top: {
      outer: styles.outer,
      parent: styles.parent,
      hide: styles.hide,
      spacerContainer: styles.spacerContainer,
      borderBottom: styles.borderBottom,
      borderTop: ``,
      spacer: styles.spacer,
      borderRight: styles.borderRight,
      borderLeft: ``,
      hook: styles.borderBottom,
      children: styles.children
    },
    bottom: {
      outer: styles.outerBottom,
      parent: styles.parent,
      hide: styles.hide,
      spacerContainer: styles.spacerContainer,
      borderBottom: ``,
      borderTop: styles.borderTop,
      spacer: styles.spacer,
      borderRight: styles.borderRight,
      borderLeft: ``,
      hook: styles.borderTop,
      children: styles.children
    },
    left: {
        outer: styles.outerRight,
        parent: styles.parentRight,
        hide: styles.hide,
        spacerContainer: styles.spacerContainerRight,
        borderBottom: styles.borderBottom,
        borderTop: ``,
        spacer: styles.spacer,
        borderRight: ``,
        borderLeft: styles.borderLeft,
        hook: ``,
        children: styles.childrenRight,
    },
    right: {    
        outer: styles.outerRight,
        parent: styles.parentRight,
        hide: styles.hide,
        spacerContainer: styles.spacerContainerRight,
        borderBottom: styles.borderBottom,
        borderTop: ``,
        spacer: styles.spacer,
        // name better
        borderRight: styles.borderBottom,
        borderLeft: styles.borderLeft,
        hook: styles.borderLeft,
        children: styles.childrenRight,
    }
    });