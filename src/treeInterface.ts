export interface BinaryTreeNode <T> {
    data: T,
    right: Tree<T>,
    left: Tree<T>,
    tag: "binary"
}

export interface UnaryTreeNode <T> {
    data: T,
    next: Tree<T>,
    tag: "unary"
}

export interface LeafNode <T> {
    data: T,
    tag: "leaf"
}

export interface DummyNode {
    tag: "dummy"
}
// ADT - Algabraic Data Type
export type Tree<T> = BinaryTreeNode<T> | UnaryTreeNode<T> | LeafNode<T> | DummyNode;

export const t: Tree<number> =
    {   
        data: 1,
        left: {   
            data: 2,
            left: {   
                data: 4,
                next: {
                    data: 7,
                    tag: 'unary',
                    next: {
                        data: 8,
                        tag: 'leaf'
                    }
                },
                tag: "unary"
            },
            right: {   
                data: 5,
                tag: "leaf"
            },
            tag: "binary"
        },
        right:     {   
            data: 3,
            next: {   
                data: 6,
                tag: "leaf"
            },
            tag: "unary"
        },
        tag: "binary"
    }
