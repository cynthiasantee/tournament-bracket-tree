export interface Tree <T>{
    data: T,
    right: Tree<T> | null,
    left: Tree<T> | null
}

export const t: Tree<number> =
    {   
        data: 1,

        left:     {   
            data: 2,
            left: {   
                data: 4,
                left: null,
                right: null

            },
            right: {   
                data: 5,
                left: null,
                right: null
            }
        },

        right:     {   
            data: 3,
            left: {   
                data: 6,
                left: null,
                right: null
            },
            right: {   
                data: 7,
                left: null,
                right: null
            }
        }
    }
