export class Node {
    private data: number;
    private right: Node | null;
    private left: Node | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    getData() {
        return this.data;
    }

    getRight() {
        return this.right;
    }

    getLeft() {
        return this.left;
    }

    setRight(data: number) {
        this.right = new Node(data);
    }

    setLeft(data: number) {
        this.left = new Node(data);
    }
}

export class Tree {
    private head: Node | null;
    constructor() {
        this.head = null
    }

    addNode(data: number) {
        if (this.head === null) {
            this.head = new Node(data)
        } else {
            
        }
    }
}
