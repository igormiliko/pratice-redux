import produce from 'immer'

export default function cars(state = [], action) {
    switch(action.type){
        case 'ADD_CAR':
           return produce(state, draft =>{
            const carIx = draft.findIndex(car => car.id === action.car.id)
            
            if(carIx >= 0){
                draft[carIx].amount += 1
            }
            else {
               draft.push({
                   ...action.car,
                   amount: 1
               })

      
            }
           });
        case 'REMOVE_CAR':
            return produce(state, draft => {
                const carIx = draft.findIndex(car => car.id === action.id)
                if(carIx >= 0) {
                    draft.splice(carIx, 1)
                }
            });
        case 'ADD_AMOUNT':
            return action.car.amount <= 0 ? state : produce(state, draft => {
                const carIx = draft.findIndex(car => car.id === action.car.id)
                if(carIx >= 0) {
                    draft[carIx].amount++
                }
            });
        case 'MINUS_AMOUNT':
            return action.car.amount <= 0 ? state : produce(state, draft => {
                const carIx = draft.findIndex(car => car.id === action.car.id)
                if(carIx >= 0) {
                    draft[carIx].amount--
                }
            });
        default:
            return state
    }
}