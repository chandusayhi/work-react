
export const GOOD_MORNING = 'GOOD_MORNING';
export const GOOD_AFTERNOON = 'GOOD_AFTERNOON';
export const GOOD_EVENING = 'GOOD_EVENING';

export let wishGoodMorning = () => {
    return {
        type : GOOD_MORNING
    }
};

export let wishGoodAfternoon = () => {
    return {
        type : GOOD_AFTERNOON
    }
};

export let wishGoodEvening = () => {
    return {
        type : GOOD_EVENING
    }
};

