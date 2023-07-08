export const INCRQTY = 'INCRQTY';
export const DECRQTY = 'DECRQTY';

export let incrProduct = () => {
    return{
        type : INCRQTY
    }
};

export let decrProduct = () => {
    return{
        type : DECRQTY
    }
};