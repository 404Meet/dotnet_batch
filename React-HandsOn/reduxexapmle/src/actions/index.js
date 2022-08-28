export const increment= () =>{
    return{
        type: 'INCREMENT'
    };
};

export const decrement= () =>{
    return{
        type: 'DECREMENT'
    };
};

export const log= () =>{
    return{
        type: 'LOG'
    };
};

export const inc5 = (nr) =>{
    return{
        type: 'INCREMENT5',
        payload: nr
    };
};

export const dec5 = (nr) =>{
    return{
        type: 'DECREMENT5',
        payload: nr
    };
};