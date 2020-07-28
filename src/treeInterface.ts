export interface BinaryTreeNode <T> {
    data: T,
    right: TreeWithTags<T>,
    left: TreeWithTags<T>,
    tag: "binary"
}

export interface UnaryTreeNode <T> {
    data: T,
    next: TreeWithTags<T>,
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
export type TreeWithTags<T> = BinaryTreeNode<T> | UnaryTreeNode<T> | LeafNode<T> | DummyNode;

export interface Tree<T> {
    data: T;
    left?: Tree<T>;
    right?: Tree<T>;
}

export type Root = "top" | "bottom" | "right" | "left";

export const t: TreeWithTags<number> =
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


export const treeWithTags: TreeWithTags<any> = {
    tag: 'binary',
    data: {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/This_Is_Us_%28Logo%29.png/500px-This_Is_Us_%28Logo%29.png',
      link: 'https://en.wikipedia.org/wiki/This_Is_Us'
    },
    left: {
      tag: 'leaf',
      data: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/This_Is_Us_%28Logo%29.png/500px-This_Is_Us_%28Logo%29.png',
        link: 'https://en.wikipedia.org/wiki/This_Is_Us'
      }
    },
    right: {
      tag: 'binary',
      data: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NewGirlTitlesS5.jpg/500px-NewGirlTitlesS5.jpg',
        link: 'https://en.wikipedia.org/wiki/New_Girl'
      },
      left: {
        tag: 'leaf',
        data: {
          img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Title_screen_for_Netflix%27s_Dead_to_Me.png',
          link: 'https://en.wikipedia.org/wiki/Dead_to_Me_(TV_series)'
        }
      },
      right: {
        tag: 'leaf',
        data: {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NewGirlTitlesS5.jpg/500px-NewGirlTitlesS5.jpg',
          link: 'https://en.wikipedia.org/wiki/New_Girl'
        }
      }
    }
  }