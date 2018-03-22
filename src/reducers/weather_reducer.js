export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_WEATHER':
            console.log(state);
            return [...state, action.payload.data];
        default: return state;
    }
}