const initialState = {
    students:[
        {
            firstname:'mohan',
            lastname:'krishna',
            gender:'male'
        },
        {
            firstname:'mitra',
            lastname:'bhrt',
            gender:'male'
        },
        {
            firstname:'rehaana',
            lastname:'shaik',
            gender:'female'
        },

    ]
}

function studentReducer(state=initialState,action){
    return state;
}

export default studentReducer;