export interface Tree<T> {
    data: T;
    left?: Tree<T>;
    right?: Tree<T>;
}