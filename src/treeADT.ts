interface BinaryTreeNode <T> {
    data: T,
    right: TreeWithTags<T>,
    left: TreeWithTags<T>,
    tag: "binary"
}

interface UnaryTreeNode <T> {
    data: T,
    next: TreeWithTags<T>,
    tag: "unary"
}

interface LeafNode <T> {
    data: T,
    tag: "leaf"
}

interface DummyNode {
    tag: "dummy"
}
// ADT - Algabraic Data Type
export type TreeWithTags<T> = BinaryTreeNode<T> | UnaryTreeNode<T> | LeafNode<T> | DummyNode;