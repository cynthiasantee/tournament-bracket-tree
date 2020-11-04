import {TreeWithTags} from "./treeADT"

export function calcDepth<T>(tree: TreeWithTags<T>): number {
    switch(tree.tag) {
      case 'binary':
        return 1 + Math.max(calcDepth(tree.left), calcDepth(tree.right));
      case 'unary':
        return 1 + calcDepth(tree.next);
      case 'leaf':
        return 1;
      case 'dummy':
        return 0;
    }
  }